const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

// Ruta za registraciju
router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "Korisnik uspješno registriran!" });
  } catch (error) {
    res.status(500).json({ error: "Greška prilikom registracije" });
  }
});

// Ruta za prijavu
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    /* console.log(req.body.password)
    console.log(user.get("password"))
    console.log(user) */
    const a = user.matchPassword(req.body.password)
    console.log(a)
    if (!user)
      return res.status(400).json({ message: "Korisnik nije pronađen" });

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.get("password")
    );
    if (!isPasswordValid)
      return res.status(400).json({ message: "Neispravna lozinka" });

    const token = jwt.sign({ id: user._id }, "tajna_lozinka", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Greška prilikom prijave" });
  }
});

router.get("/", async (req, res) => {
  try {
    console.log("GET /api/users pozvan");
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Greška prilikom dobijanja korisnika" });
  }
});

module.exports = router;
