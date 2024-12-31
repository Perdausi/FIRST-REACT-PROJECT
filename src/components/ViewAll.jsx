import { Link } from "react-router-dom"

export default function ViewAll() { 

    return(
        <section className="py-6 my-7 bg-white max-w-lg m-auto px-5">
            <Link to="/jobs" className="block bg-black text-white text-center rounded-xl py-2 px-6">View All</Link>
        </section>
    )
  }