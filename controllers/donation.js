const Donation = require("../models/donation");

exports.getDonation = async (req, res) => { 
    try {
      const userId = req.user.id; 

      const donations = await Donation.findAll({
        where: { userId },
        attributes: ["id", "amount", "charityName", "createdAt"],
        order: [["createdAt", "DESC"]],
      });

      res.status(200).json({ userId, donations });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
}