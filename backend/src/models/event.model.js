const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
      trim: true,
    },
    eventType: {
      type: String,
      required: true,
    },
    eventVenue: {
      type: String,
      required: true,
    },
    eventDate: {
      type: String,
      required: true,
    },
    hireType: {
      type: String,
      enum: ["planner", "performer", "crew"],
      required: true,
    },

    plannerDetails: {
      eventBudget: {
        type: Number,
      },
      guestCount: {
        type: Number,
      },
      services: {
        type: [String],
        enum: ["Vendor", "Decor", "Guest Management", "Caterers"],
      },
    },

    performerDetails: {
      performerType: {
        type: [String],
        enum: ["Anchor", "DJ", "Dancers", "Singer/Band"],
      },
      count: {
        anchorCount: {
          type: Number,
        },
        djCount: {
          type: Number,
        },
        dancerCount: {
          type: Number,
        },
        singerCount: {
          type: Number,
        },
      },
      duration: {
        type: String,
      },
      equipmentRequired: {
        type: String,
      },
    },

    crewDetails: {
      crewType: {
        type: [String],
        enum: ["Stage", "Security", "Sound", "Lighting", "Photographer"],
      },
      count: {
        stageNumbers: {
          type: Number,
        },
        securityNumbers: {
          type: Number,
        },
        soundNumbers: {
          type: Number,
        },
        lightNumbers: {
          type: Number,
        },
        photographers: {
          type: Number,
        },
      },
      duration: {
        type: String,
      },
      equipmentRequired: {
        type: String,
      },
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);
const eventModel = mongoose.model("Event", eventSchema);
module.exports = eventModel;
