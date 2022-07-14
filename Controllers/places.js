const router = require("express").Router();
const places = require("../models/places.js");
// GET /places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});
router.post("/", (req, res) => {
  console.log(req.body);
  router.post("/", (req, res) => {
    console.log(req.body);
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = "http://placekitten.com/400/400";
    }
    if (!req.body.city) {
      req.body.city = "Anytown";
    }
    if (!req.body.state) {
      req.body.state = "USA";
    }
    places.push(req.body);
    res.redirect("/places");
  });

  res.send("POST/places");
});

// GET /places/:id
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "https://images.unsplash.com/photo-1600490036275-35f5f1656861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ];

  res.render("places/index", { places });
});
module.exports = router;
