'use client'

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router in App Directory
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function CreateItinerary() {
    const { register, handleSubmit } = useForm();
    const [isClient, setIsClient] = useState(false); // State to check if client-side

    const router = useRouter(); // Next.js App Directory specific router

    useEffect(() => {
        // Ensure that we are on the client-side
        setIsClient(true);
    }, []);

    const onSubmit = async (data: any) => {
        try {
            // Send the data to your API
            await axios.post('/api/itinerary', data);
            router.push('/'); // Navigate to the homepage after successful submission
        } catch (error) {
            console.error('Error creating itinerary', error);
        }
    };

    // Return null or a loading spinner until the component is mounted client-side
    if (!isClient) {
        return <div>Loading...</div>; // Show loading state until mounted on client
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">Create New Itinerary</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg p-6">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700">Itinerary Title</label>
                        <input
                            {...register('title', { required: true })}
                            id="title"
                            type="text"
                            placeholder="Trip to Paris"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="destination" className="block text-gray-700">Destination</label>
                        <input
                            {...register('destination', { required: true })}
                            id="destination"
                            type="text"
                            placeholder="Paris, France"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="travelDates" className="block text-gray-700">Travel Dates</label>
                        <input
                            {...register('travelDates', { required: true })}
                            id="travelDates"
                            type="date"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="participants" className="block text-gray-700">Participants</label>
                        <input
                            {...register('participants')}
                            id="participants"
                            type="text"
                            placeholder="John, Jane, Bob"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="budget" className="block text-gray-700">Budget</label>
                        <input
                            {...register('budget')}
                            id="budget"
                            type="number"
                            placeholder="1000"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600 w-full"
                    >
                        Create Itinerary
                    </button>
                </form>
            </div>
        </div>
    );
}