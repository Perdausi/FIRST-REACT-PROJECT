import notFound from '../assets/laptop.png'
import { Link } from 'react-router-dom'
import React from 'react'

const NotFound = () => {
  return (
    <section className='flex flex-col items-center justify-center mt-20 gap-5 h-96'>
        <img src={notFound} className='w-40' alt="notfound" />
        <h1 className="text-4xl font-bold sm:text-6xl">404 not found</h1>
        <p className='text-xl '>This page doesn't exist</p>
        <Link to="/" className='bg-indigo-600 px-6 py-2 rounded text-white font-bold'>Go back</Link>
    </section>
  )
}

export default NotFound