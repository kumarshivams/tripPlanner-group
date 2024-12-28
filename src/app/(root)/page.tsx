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
            <section className="bg-cover bg-center h-96 relative" style={{ backgroundImage: "url('/images/bg-home.webp')" }}>
                <div className="h-full flex flex-col justify-center bg-black bg-opacity-40 text-white p-6">
                    <div className="flex items-center mb-6">
                        <img
                            src="/images/logo.png"
                            alt="Travel Buddy"
                            className="w-12 h-12"
                        />
                        <h1 className="text-4xl font-bold" style={{ fontFamily: "'Baloo Bhaijaan 2', cursive" }}>
                            Travel Buddy
                        </h1>
                    </div>
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold mb-4">Hi, I'm Travel Buddy, your personal travel agent</h1>
                    </div>
                    <div className="flex flex-col items-center w-full max-w-3xl mx-auto space-y-6">
                        {/* Chat/Search Input */}
                        <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg w-full max-w-xl mx-auto transition-all duration-300 hover:shadow-2xl">
                            <img
                                src="/images/Logo.png"
                                alt="Profile"
                                className="w-10 h-10 rounded-full mr-4"
                            />
                            <input
                                type="text"
                                placeholder="Ask Anything"
                                className="flex-grow px-4 py-2 outline-none border-none text-gray-700 placeholder-gray-400 text-lg"
                            />
                            <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors">
                                Ask
                            </button>
                        </div>
                        {/* Quick Action Buttons */}
                        <div className="flex flex-wrap justify-center space-x-4 space-y-4">
                            <button className="w-64 h-16 bg-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-300 transition-all">
                                Inspire me where to go
                            </button>
                            <button className="w-64 h-16 bg-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-300 transition-all">
                                Create a new Trip
                            </button>
                            <button className="w-64 h-16 bg-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-300 transition-all">
                                Find family hotels in Dubai
                            </button>
                            <button className="w-64 h-16 bg-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-300 transition-all">
                                Build 7-day island hopping
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