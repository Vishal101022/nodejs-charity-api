const user = require("../models/user");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    // check user exists or not
    const userExits = await user.findOne({ where: { email } });
    if (userExits) {
      return res.status(400).json({ message: "User already exists" });
    }
    // hash password
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);
    // create user
    await user.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
};
