'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
    const [itineraries, setItineraries] = useState<any[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Ensure the component is only running on the client side
        setIsClient(true);

        // Fetch itineraries after the component mounts
        const fetchItineraries = async () => {
            const response = await axios.get('/api/itinerary');
            setItineraries(response.data);
        };

        fetchItineraries();
    }, []); // Empty dependency array to only run on mount

    // Render loading until the client is mounted
    if (!isClient) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Travel Itinerary Planner</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Plan your next group adventure with ease. Organize activities, set dates, and track budgets all in one place.
                </p>
                {/* Link without <a> */}
                <Link
                    href="/create-itinerary"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600"
                >
                    Start New Itinerary
                </Link>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Existing Itineraries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {itineraries.length > 0 ? (
                        itineraries.map((itinerary) => (
                            <div key={itinerary._id} className="bg-white shadow-lg rounded-lg p-4">
                                <h3 className="text-xl font-semibold text-gray-700">{itinerary.title}</h3>
                                <p className="text-gray-600">{itinerary.destination}</p>
                                {/* Link without <a> */}
                                <Link
                                    href={`/itinerary/${itinerary._id}`}
                                    className="text-blue-500 mt-2 inline-block"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No itineraries found. Start planning one!</p>
                    )}
                </div>
            </div>
        </div>
    );
}