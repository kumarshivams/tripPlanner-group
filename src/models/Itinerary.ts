import mongoose from 'mongoose';

const itinerarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    destination: { type: String, required: true },
    travelDates: { type: [Date], required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    activities: [{ type: String }],
    budget: { type: Number },
    createdAt: { type: Date, default: Date.now },
});

const Itinerary = mongoose.models.Itinerary || mongoose.model('Itinerary', itinerarySchema);
export default Itinerary;