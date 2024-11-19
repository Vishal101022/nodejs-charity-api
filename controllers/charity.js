const Charity = require("../models/charity");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
     const { name, email, password, mission, goals } = req.body;
  try {
    const existingCharity = await Charity.findOne({ where: { email } });
    if (existingCharity) {
      return res
        .status(400)
        .json({ message: "Charity with this email already exists" });
    }

    // Hash password
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);

    await Charity.create({
      name,
      email,
      password: hashedPassword,
      mission,
      goals,
    });
    res
      .status(201)
      .json({
        message: "Charity registered successfully. Pending admin approval.",
      });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // check user exists or not
        const user = await Charity.findOne({ where: { email } });
        if (!user) {
          return res.status(404).json({ error: "Charity not found" });
      }
      // check user is approved or not
      if (!user.isApproved) {
        return res.status(401).json({ error: "Charity is not approved" });
      }
        // compare password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ error: "Invalid credentials" });
        }
        // generate JWT token
        const token = jwt.sign({ userId: user.id , name: user.name}, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
        // return token
        return res.status(200).json({ message: "Login successful", token });
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.approveCharity = async (req, res) => {
  const charityId = req.params.id;
  try {
    const charity = await Charity.findByPk(charityId);
    if (!charity) return res.status(404).json({ message: "Charity not found" });

    charity.isApproved = true;
    await charity.save();

    res.status(200).json({ message: "Charity approved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


exports.getCharity = async (req, res) => {
  try {
    const charities = await Charity.findAll(
      {attributes: ["id", "name", "email", "mission", "goals", "isApproved", "createdAt"]},
    );
    res.status(200).json({ charities });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get charity details with id
exports.getCharityById = async (req, res) => {
    try {
      const charity = await Charity.findByPk(req.params.id
          ,{attributes: ["id", "name", "email", "mission", "goals", "isApproved", "createdAt"]},
        );
        if (!charity) {
            return res.status(404).json({ error: "Charity not found" });
        }
        res.status(200).json({ charity });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update charity details
exports.updateCharity = async (req, res) => {
    const { name, email, mission, goals } = req.body;
    // get charity id from token
    const charityId = req.charity.id;
    try {
        const charity = await Charity.findByPk(charityId);
        if (!charity) {
            return res.status(404).json({ error: "Charity not found" });
        }
        // Update charity details
        charity.name = name || charity.name;
        charity.email = email || charity.email;
        charity.mission = mission || charity.mission;
        charity.goals = goals || charity.goals;
        await charity.save();
        res.status(200).json({ message: "Charity updated successfully", charity });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}