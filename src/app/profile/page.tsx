// app/profile/page.tsx
import React from 'react';

const mockUserData = {
    name: "John Doe",
    email: "johndoe@example.com",
    profileImage: "/profile-pic.png", // Default image placeholder
    location: "New York, USA",
    bio: "Enthusiastic traveler and adventure seeker. Always on the lookout for unique experiences and hidden gems.",
    trips: [
        { destination: "Paris, France", date: "June 2024" },
        { destination: "Tokyo, Japan", date: "December 2023" },
    ],
};

export default function ProfilePage() {
    const { name, email, profileImage, location, bio, trips } = mockUserData;

    return (
        <section className="max-w-3xl mx-auto p-4">
            {/* Profile Header */}
            <div className="flex items-center space-x-4">
                <img
                    src={profileImage}
                    alt={`${name}'s profile picture`}
                    className="w-24 h-24 rounded-full border"
                />
                <div>
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <p className="text-gray-600">{location}</p>
                    <p className="text-gray-600">{email}</p>
                </div>
            </div>

            {/* Bio Section */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold">About Me</h2>
                <p className="mt-2 text-gray-700">{bio}</p>
            </div>

            {/* Trips Section */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold">My Trips</h2>
                {trips.length > 0 ? (
                    <ul className="mt-2 space-y-2">
                        {trips.map((trip, index) => (
                            <li key={index} className="p-4 bg-gray-100 rounded-md">
                                <span className="font-semibold">{trip.destination}</span>
                                <span className="block text-gray-600 text-sm">{trip.date}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-2 text-gray-600">No trips planned yet.</p>
                )}
            </div>

            {/* Edit Profile Button */}
            <div className="mt-8">
                <a
                    href="/profile/edit"
                    className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
                >
                    Edit Profile
                </a>
            </div>
        </section>
    );
}
