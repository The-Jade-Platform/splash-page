'use client'
import { useState} from "react"

export default function JoinWaitList() {
    const[formData,setformData]=useState({
        name:'',
        email:''
    })
    const[errors,setErrors]=useState({});
    const[isSending, setIsSending]=useState(false);
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setformData({
            ...formData,
            [name]:value,
        })
    }
  return (
    <div>
        <form className = "mt-6 flex flex-col  gap-2 max-w-md mx-auto">
            <div>
                {errors.name &&(
                        <p className="text-sm text-rose-800">{errors.name}</p>
                      )}
                <input
                    className="px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 "
                    type='text'
                    id='name'
                    placeholder='Enter your name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    
                />
                
                {errors.email &&(
                <p className="text-sm text-rose-800">{errors.email}</p>
                )}
                <input
                    className="px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    type="email"
                    placeholder="Enter your email"
                    name='email'
                    id='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                
              </div>
              <button
                type="submit"
                className = "bg-[#4A3AFF] text-white px-5 py-2 rounded-md hover:bg-indigo-800 "
              >
                Join the Waitlist
              </button>
          </form>

    </div>
  )
}
