import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddJobPage = ({ addJobSubmit }) => {
    const [title, setTitle] = useState("")
    const [type, setType] = useState("Full-Time")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [salary, setSalary] = useState("under $50K")
    const [companyName, setCompanyName] = useState("")
    const [companyDescription, setCompanyDescription] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const navigate = useNavigate();


    const formSubmit = (e) =>{
        e.preventDefault();
        
        const newJob = {
            title : title,
            type : type,
            description : description,
            location : location,
            salary : salary,
            company :{
                name : companyName,
                description : companyDescription,
                contactEmail : email,
                contactPhone : phone
            }
        }
        addJobSubmit(newJob)
        
        return navigate('/jobs');
    }


  return (
    <section className='bg-indigo-50 mt-10'>
        <div className='contaner px-11 m-auto py-20 max-w-2xl md:px-0'>
            <div className='bg-white rounded shadow-lg border px-5'>
                <form onSubmit={formSubmit} className='py-5 '>
                    <h2 className='text-sm mb-2 font-bold text-center p-2 md:text-2xl'>JOB FORM</h2>

                    <div className="flex flex-col gap-4">
                    <div className='flex flex-col gap-1 px-4'>
                        <label htmlFor="type" className='text-sm font-bold mx-3'>Job Type</label>
                        <select className='shadow:lg rounded border h-8 px-2 text-sm'
                                name="type" 
                                id="type" 
                                value={type}
                                onChange={(e)=> setType(e.target.value)}
                                
                        >
                            
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Remote-Time">Remote-Time</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2 px-4'>
                        <label htmlFor="title" className='text-sm font-bold mx-3'>Job Title</label>
                        <input type="text" 
                            className='border h-8 px-2 text-sm'
                                placeholder='e.g Frontend Developer'
                                id='title'
                                name='title'
                                value={title}
                                onChange={(e)=> setTitle(e.target.value)}
                                required
                        />
                    </div>

                    <div className='flex flex-col gap-2 px-4'>
                        <label htmlFor="description" className='font-bold text-sm  font-bold mx-3'>Description</label>
                        <textarea type="textarea" 
                                className='border h-24 px-2 text-sm py-2'
                                placeholder='Add any job duties, expectations, requirements, etc'
                                id='description'
                                name='description'
                                rows='4'
                                value={description}
                                onChange={(e)=> setDescription(e.target.value)}
                                required
                                minLength={80}
                        ></textarea>
                    </div>

                    <div className='flex flex-col gap-1 px-4'>
                        <label htmlFor="salary" className='font-bold text-sm font-bold mx-3'>Salary</label>
                        <select className='shadow:lg rounded border text-sm h-8'
                            id='salary'
                            name='salary'
                            value={salary}
                            onChange={(e)=> setSalary(e.target.value)}
                        >
                            <option value="under $50K">under $50K</option>
                            <option value="$50 - $60K">$50 - $60K</option>
                            <option value="$70 - $80K">$70 - $80K</option>
                            <option value="$90 - $110K">$90 - $110K</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2 px-4 text-sm'>
                        <label htmlFor="location" className='font-bold mx-3'>Location</label>
                        <input type="text" 
                            className='border h-8 px-2'
                            placeholder='company location'
                            id='location'
                            name='location'
                            value={location}
                            required
                            autoComplete='off'
                            onChange={(e)=> setLocation(e.target.value)}
                        />
                    </div>

                    
                    <div className='flex flex-col gap-2 px-4 text-sm'>
                    <h1 className='text-4xl'>Company Info</h1>
                        <label htmlFor="companyName" className='font-bold'>Company Name</label>
                        <input type="text"
                            className='h-8 border px-2 text-sm'
                            placeholder='company name'
                            id='companyName'
                            name='companyName'
                            value={companyName}
                            required
                            autoComplete='off'
                            onChange={(e)=> setCompanyName(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col gap-2 px-4 text-sm'>
                        <label htmlFor="companyDescription" className='font-bold'>Company Description</label>
                        <textarea type="textarea" 
                            className='border h-24 px-2 py-2 text-sm'
                            placeholder='What does your company do?'
                            id='companyDescription'
                            name='companyDescription'
                            value={companyDescription}
                            onChange={(e)=> setCompanyDescription(e.target.value)}
                            required
                            autoComplete='off'
                        />
                    </div>

                    <div className='flex flex-col gap-2 px-4 text-sm'>
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input type="text"
                            className='h-8 border px-2 text-sm'
                            placeholder='Company@email.com'
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            required
                            
                        />
                    </div>

                    <div className='flex flex-col gap-2 px-4 text-sm '>
                        <label htmlFor="phone" className='font-bold'>Phone</label>
                        <input type="tel"
                            className='h-8 border px-2'
                            placeholder='Contact number (Optional)'
                            id='phone'
                            name='phone'
                            value={phone}
                            onChange={(e)=> setPhone(e.target.value)}
                            
                        />
                    </div>

                    <div className='px-5 flex items-center justify-center'>
                        <button
                            type='submit'
                            className='w-1/2 bg-indigo-600 py-2 rounded-full text-white font-bold hover:bg-indigo-800'
                        >
                            Continue
                        </button>
                    </div>

                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default AddJobPage