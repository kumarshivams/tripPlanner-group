'use client'

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router in App Directory
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function CreateItinerary() {
    const { register, handleSubmit } = useForm();
    const [isClient, setIsClient] = useState(false); // State to check if client-side
 
    const [formData, setFormData] = useState({destination:"", days:"",budget:"",companion:""});
    const router = useRouter(); // Next.js App Directory specific router

    useEffect(() => {
        // Ensure that we are on the client-side
        setIsClient(true);
    }, []);


    const onSubmit = () => {
        if(formData.destination.length==0 || formData.days.length==0 ||formData.budget.length==0 || formData.companion.length==0 ){
            
            return;
        }
        console.log(formData);
        // try {
        //     // Send the data to your API
        //     await axios.post('/api/itinerary', data);
        //     router.push('/'); // Navigate to the homepage after successful submission
        // } catch (error) {
        //     console.error('Error creating itinerary', error);
        // }
    };

    const handleOptions = (name: string, value: string): void => {
        if (formData["name"] === value) {
          setFormData({ ...formData, [name]: "" });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    // Return null or a loading spinner until the component is mounted client-side
    if (!isClient) {
        return <div>Loading...</div>; // Show loading state until mounted on client
    }

    return (
        
        <div className="container mx-auto p-10 ">
      <h1 className="text-2xl font-bold mb-2">Tell us your travel preferences 🌄🌴</h1>
      <p className="text-gray-600 mb-6">Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>

        
      
        {/* Destination */}
        <div className='py-4'>
          <label htmlFor="destination" className="block text-lg font-medium">What is destination of choice?</label>
          <input
            id="destination"
            onChange={(e)=>{setFormData({...formData ,["destination"] :e.target.value })}}
            className="w-full border border-gray-300 rounded-lg p-2 mt-2"
            value={formData.destination}
            placeholder='Paris , France'
          >
          </input>
        </div>

        {/* Number of Days */}
        <div className='py-4'>
          <label htmlFor="days" className="block text-lg font-medium">How many days are you planning your trip?</label>
          <input
            type="number"
            id="days"
            onChange={(e)=>setFormData({...formData , ["days"]:e.target.value})}
            value={formData.days}
            placeholder="Ex: 3"
            className="w-full border border-gray-300 rounded-lg p-2 mt-2"
          />
        </div>

        {/* Budget */}
        <div className='py-4'>
          <label className="block text-lg font-medium">What is Your Budget?</label>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <button
            onClick={()=>handleOptions("budget" , "cheap")}
              type="button"
              className={`flex flex-col items-center rounded-lg p-4 hover:bg-gray-100 border-2 ${formData.budget=="cheap"? "border-black":"border-gray-300"}`}
            >
              <div className="mb-2 text-5xl" >💵</div>
              <span className="font-bold">Cheap</span>
              <span className="text-sm text-gray-500">Stay conscious of costs</span>
            </button>
            <button
            onClick={()=>handleOptions("budget" , "moderate")}
              type="button"
              className={`flex flex-col items-center rounded-lg p-4 hover:bg-gray-100 border-2 ${formData.budget=="moderate"? "border-black":"border-gray-300"}`}
            >
              <div className="mb-2 text-5xl" >💰</div>
              <span className="font-bold">Moderate</span>
              <span className="text-sm text-gray-500">Keep cost on the average side</span>
            </button>
            <button
            onClick={()=>handleOptions("budget" , "luxury")}
              type="button"
              className={`flex flex-col items-center rounded-lg p-4 hover:bg-gray-100 border-2  ${formData.budget=="luxury"? "border-black":"border-gray-300"}`}
            >
              <div className="mb-2 text-5xl" >💸</div>
              <span className="font-bold">Luxury</span>
              <span className="text-sm text-gray-500">Don’t worry about cost</span>
            </button>
          </div>
        </div>

        {/* Travel Companions */}
        <div className='py-4'>
          <label className="block text-lg font-medium">Who do you plan on traveling with on your next adventure?</label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <button
                onClick={()=>{handleOptions('companion','solo')}}
              type="button"
              className={`flex flex-col items-center border-2 rounded-lg p-4 hover:bg-gray-100 ${formData.companion=='solo'?'border-black':"border-gray-300"}`}
            >
              <div className="mb-2 text-5xl" >✈️</div>
              <span className="font-bold">Just Me</span>
              <span className="text-sm text-gray-500">A sole traveler in exploration</span>
            </button>
            <button
            onClick={()=>{handleOptions('companion','friends')}}
              type="button"
              className={`flex flex-col items-center border-2 rounded-lg p-4 hover:bg-gray-100 ${formData.companion=='friends'?'border-black':"border-gray-300"}`}
            >
              <div className="mb-2 text-5xl" >⛵</div>
              <span className="font-bold">Friends</span>
              <span className="text-sm text-gray-500">A bunch of thrill-seekers</span>
            </button>
            <button
            onClick={()=>{handleOptions('companion','couple')}}
              type="button"
              className={`flex flex-col items-center border-2 rounded-lg p-4 hover:bg-gray-100 ${formData.companion=='couple'?'border-black':"border-gray-300"}`}
            >
              <div className="mb-2 text-5xl" >🥂</div>
              <span className="font-bold">A Couple</span>
              <span className="text-sm text-gray-500">Two travelers in tandem</span>
            </button>
            <button
            onClick={()=>{handleOptions('companion','family')}}
              type="button"
              className={`flex flex-col items-center border-2 rounded-lg p-4 hover:bg-gray-100 ${formData.companion=='family'?'border-black':"border-gray-300"}`}
            >
              <div className="mb-2 text-5xl" >🏡</div>
              <span className="font-bold">Family</span>
              <span className="text-sm text-gray-500">A group of fun-loving adventurers</span>
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex justify-end mb-10">
          <button
            onClick={()=>onSubmit()}
            className="bg-black text-xl text-white px-6 py-4 rounded-lg hover:bg-gray-800"
          >
            Generate Trip
          </button>
        </div>
      
    </div>
    );
}