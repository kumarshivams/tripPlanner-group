// app/itinerary-builder/page.tsx
export default function ItineraryBuilderPage() {
    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Build Your Itinerary</h2>
            <div className="flex flex-col space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold">Drag-and-Drop Scheduler</h3>
                    <p>Organize your trip seamlessly.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold">Prebuilt Templates</h3>
                    <p>Start with curated suggestions for different travel styles.</p>
                </div>
            </div>
        </section>
    );
}
