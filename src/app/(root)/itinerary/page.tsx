import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function ItineraryDetails() {
    const [itinerary, setItinerary] = useState<any>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            const fetchItinerary = async () => {
                const response = await axios.get(`/api/itinerary/${id}`);
                setItinerary(response.data);
            };
            fetchItinerary();
        }
    }, [id]);

    if (!itinerary) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">{itinerary.title}</h1>
                <p className="text-lg text-gray-600">{itinerary.destination}</p>
                <p className="text-gray-500">Dates: {new Date(itinerary.travelDates[0]).toLocaleDateString()} - {new Date(itinerary.travelDates[1]).toLocaleDateString()}</p>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-800">Activities</h3>
                    <ul>
                        {itinerary.activities.map((activity: string, index: number) => (
                            <li key={index} className="text-gray-600">{activity}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-800">Budget</h3>
                    <p className="text-gray-600">${itinerary.budget}</p>
                </div>
            </div>
        </div>
    );
}
