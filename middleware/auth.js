const jwt = require("jsonwebtoken");
const User = require("../models/user");
const dotenv = require("dotenv");

dotenv.config();

exports.authMiddleware = async (req, res, next) => { 
      try {
        const token = req.header("Authorization");

        const payload = jwt.verify(token, process.env.JWT_SECRET);

        const userExits = await User.findByPk(payload.userId);

        if (!userExits) {
          return res.status(401).json({ error: "User not found" });
        }
          req.user = {
            id: userExits.id,
            name: userExits.name
        }
        next();
      } catch (error) {
        console.log(error);
        return res.status(401).json({ error: "Unauthorized" });
      }
}