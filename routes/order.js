const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

router.post("/create", (req, res) => {
  // console.log(req.body);

  try {
    const order = new Order(req.body);
    order.save();
    res.status(201).json({
      message: "Order is created",
    });
  } catch (error) {
    res.status(500).json({
      message: "Order failed",
    });

    console.log("Error Occerd", error);
  }
});

router.get("/get", async (req, res) => {
  try {
    const routes = await Order.find();
    res.status(200).send(routes);
  } catch (error) {
    res.status(500).json({
      message: "Order failed",
    });

    console.log("Error Occerd", error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const orderId = req.params.id;
  console.log("orderId", orderId);

  try {
    await Order.deleteOne({ _id: orderId})
    res.status(200).json({
      message: "Order is deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Order failed",
    });

    console.log("Error Occerd", error);
  }
});

module.exports = router;
