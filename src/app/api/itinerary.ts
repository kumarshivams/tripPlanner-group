import type { NextApiRequest, NextApiResponse } from 'next';
import Itinerary from '../../models/Itinerary';
import dbConnect from '../../utils/dbconnect';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();  // Make sure your DB connection is established first

    if (req.method === 'GET') {
        try {
            const itineraries = await Itinerary.find();  // Fetch itineraries from the database
            res.status(200).json(itineraries);  // Return the itineraries as a JSON response
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching itineraries' });  // Handle errors
        }
    } else if (req.method === 'POST') {
        try {
            const itinerary = new Itinerary(req.body);  // Create a new itinerary from the request body
            await itinerary.save();  // Save the itinerary to the database
            res.status(201).json(itinerary);  // Return the newly created itinerary as JSON
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error creating itinerary' });  // Handle errors
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });  // Handle unsupported methods
    }
}

export default handler;  // Default export of the handler function