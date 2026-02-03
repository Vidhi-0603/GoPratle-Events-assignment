const eventModel = require("../models/event.model");

// Create event
const createEvent = async (req, res) => {
  try {
    const event = await eventModel.create(req.body);

    res.status(201).json({
      success: true,
      data: event,
    });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports = {
  createEvent,
};