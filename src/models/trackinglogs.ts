import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  status: String,
  location: String,
  date: Date,
});

const trackingSchema = new mongoose.Schema({
  trackingNumber: { type: String, required: true, unique: true },
  type: { type: String, enum: ["FCL", "LCL"], required: true },
  logs: [logSchema],
});

export default mongoose.models.TrackingLogs || 
    mongoose.model("TrackingLogs", trackingSchema);
