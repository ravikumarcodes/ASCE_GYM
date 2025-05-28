const Profile = require('../models/Profile');

exports.getProfile = async (req, res) => {
  try {
    console.log("Authenticated User:", req.user); // Debug authentication
    const profile = await Profile.findOne({ user: req.user.id }).populate("user", "name email");

    if (!profile) {
      return res.status(404).json({ user: null, message: "Profile not found" });
    }

    res.json({ user: profile.user, ...profile._doc }); // Ensuring correct data format
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createOrUpdateProfile = async (req, res) => {
  const { age, gender, height, weight, fitnessGoal } = req.body;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      profile.age = age;
      profile.gender = gender;
      profile.height = height;
      profile.weight = weight;
      profile.fitnessGoal = fitnessGoal;
    } else {
      profile = new Profile({
        user: req.user.id,
        age,
        gender,
        height,
        weight,
        fitnessGoal
      });
    }

    await profile.save();
    res.json({ user: profile.user, ...profile._doc }); // Ensuring consistency
  } catch (error) {
    console.error("Error saving profile:", error);
    res.status(500).json({ message: "Error saving profile" });
  }
};