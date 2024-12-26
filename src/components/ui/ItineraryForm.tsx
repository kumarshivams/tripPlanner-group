import { useForm } from 'react-hook-form';

export default function ItineraryForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        const response = await fetch('/api/itinerary', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        console.log(result);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('title')} placeholder="Title" required />
            <input {...register('destination')} placeholder="Destination" required />
            <input {...register('travelDates')} type="date" required />
            <button type="submit">Create Itinerary</button>
        </form>
    );
}
