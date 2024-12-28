'use client'

import React from "react";
import { FaPlane, FaHotel, FaUmbrellaBeach, FaTrain } from "react-icons/fa";

export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-blue-600 text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">TravelMate</h1>
                    <nav className="space-x-6 flex items-center">
                        <a href="#" className="flex items-center space-x-2 hover:underline">
                            <FaPlane />
                            <span>Flights</span>
                        </a>
                        <a href="#" className="flex items-center space-x-2 hover:underline">
                            <FaHotel />
                            <span>Hotels</span>
                        </a>
                        <a href="#" className="flex items-center space-x-2 hover:underline">
                            <FaUmbrellaBeach />
                            <span>Holiday Packages</span>
                        </a>
                        <a href="#" className="flex items-center space-x-2 hover:underline">
                            <FaTrain />
                            <span>Trains</span>
                        </a>
                    </nav>
                </div>
            </header>

            {/* Search Section */}
            <section className="bg-white py-10 shadow-md">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6">Plan Your Trip</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="From"
                            className="w-full p-4 border border-gray-300 rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="To"
                            className="w-full p-4 border border-gray-300 rounded-md"
                        />
                        <input
                            type="date"
                            className="w-full p-4 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* Deals and Offers Section */}
            <section className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6">Deals & Offers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-md overflow-hidden">
                            <img
                                src="/images/offer1.jpg"
                                alt="Offer 1"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold">Flight Offer</h3>
                                <p>Save up to 30% on domestic flights!</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-md overflow-hidden">
                            <img
                                src="/images/offer2.jpg"
                                alt="Offer 2"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold">Hotel Deal</h3>
                                <p>Book hotels and get up to 40% off.</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-md overflow-hidden">
                            <img
                                src="/images/offer3.jpg"
                                alt="Offer 3"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold">Holiday Package</h3>
                                <p>Special discounts on international trips.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 TravelMate. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}