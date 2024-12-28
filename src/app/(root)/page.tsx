import React from 'react';

const guides = [
    { name: "Giuseppe", expertise: "Nature", image: "/giuseppe.jpg" },
    { name: "Giulia", expertise: "Oceans", image: "/giulia.jpg" },
    { name: "Giorgio", expertise: "Culture", image: "/giorgio.jpg" },
    { name: "SUNNY", expertise: "Planner", image: "/sunny.jpg" },
    { name: "Jeremy", expertise: "Sustainability", image: "/jeremy.jpg" },
];

export default function HomePage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-cover bg-center h-96" style={{ backgroundImage: "url('/background.jpg')" }}>
                <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
                    <h1 className="text-4xl font-bold mb-4">Hi, I'm Travel Buddy, your personal travel agent</h1>
                    <div className="flex flex-col items-center w-full max-w-lg space-y-4">
                        {/* Chat/Search Input */}
                        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full">
                            <img
                                src="/profile-pic.png"
                                alt="Layla"
                                className="w-8 h-8 rounded-full"
                            />
                            <input
                                type="text"
                                placeholder="Ask Anything"
                                className="flex-grow px-4 py-2 outline-none border-none text-gray-700"
                            />
                            <button className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700">
                                Ask
                            </button>
                        </div>
                        {/* Quick Action Buttons */}
                        <div className="flex space-x-2 flex-wrap">
                            <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
                                Inspire me where to go
                            </button>
                            <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
                                Create a new Trip
                            </button>
                            <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
                                Find family hotels in Dubai
                            </button>
                            <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
                                Build 7 day island hopping
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guides Section */}
            <section className="py-12">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">Discover Unforgettable Trips</h2>
                    <div className="flex justify-center space-x-4 overflow-x-auto">
                        {guides.map((guide, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-40 bg-gray-100 p-4 rounded-lg shadow-md text-center"
                            >
                                <img
                                    src={guide.image}
                                    alt={guide.name}
                                    className="w-16 h-16 mx-auto rounded-full mb-4"
                                />
                                <h3 className="font-semibold">{guide.name}</h3>
                                <p className="text-sm text-gray-600">{guide.expertise}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}