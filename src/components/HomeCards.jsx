import Card from "./Card"
import { Link } from "react-router-dom"
export default function HomeCards() {   
    return(
        <section className="py-11">
            <div className="container lg:container mx-auto">
                <div className="flex grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Card>
                            <h2 className="text-2xl font-bold mb-5">
                                For Developers
                            </h2>
                            <p className=" text-lg mb-3">
                                browse react job and start your career
                            </p>
                            <Link to="jobs" className="bg-black text-white px-6 py-2 rounded hover:bg-indigo-500 hover:text-white transition">Browse</Link>
                    </Card>

                    <Card bg="bg-indigo-100">
                    <h2 className="text-2xl font-bold mb-5">
                            For Employers
                        </h2>
                        <p className=" text-lg mb-3">
                            List your job and find a perfect developer for the role
                        </p>
                        <Link to="add-job" className="bg-indigo-600 hover:bg-indigo-500 hover:text-black transition text-white px-6 py-2 rounded">Add job</Link>
                    </Card>
                </div>
            </div>
        </section>
    )
  }