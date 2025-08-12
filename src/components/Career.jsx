import React from "react";
import "./Career.css";
import { Gem } from "lucide-react";

const Career = () => {
    return (
        <>
        <div className="career-container w-full flex flex-row">
            <div className="max-w-1/2 mt-34 ml-12">
                <h1 className="text-5xl font-bold mb-5"><span className="text-blue-900">Unlock</span> Your Career</h1>
                <p className="text-gray-600 mb-7">Explore opportunities from across the globe to grow, showcase skills, gain <br/> CV points & get hired by your dream company.</p>
                <div className='flex w-60 h-13 px-2 py-2 bg-violet-100 text-black rounded-3xl hover:bg-violet-200'>
                <img src="/src/assets/diamond.png" alt="Pro diamond" className="relative h-11 bottom-1 " />
                    <div className="flex flex-col ml-2">
                        <span className="text-xs opacity-50">heyyyy</span>
                        <span className="font-semibold -mt-1">Just went Unstop Pro!</span>
                    </div>
                </div>     
            </div>
            <div className="grid gap-5 ml-30 mt-15 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
                <div className="career-card w-65 h-27 bg-green-300 shadow-lg rounded-2xl pl-4 pt-2 flex overflow-hidden transform transition-transform duration-700 ease-out hover:-translate-y-1 hover:shadow-xl hover:scale-105">
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-col ">
                            <h2 className="text-lg">Internships</h2>
                            <h2 className="text-xs max-w-10">Gain Practical Experience</h2>
                        </div>
                        <img src="/src/assets/male_intern.png" alt="" className="-mr-13"/>
                    </div>
                </div>
                <div className="career-card w-65 h-27 bg-orange-300 shadow-lg rounded-2xl pl-4 pt-2 flex overflow-hidden transform transition-transform duration-700 ease-out hover:-translate-y-1 hover:shadow-xl hover:scale-105">
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-col ">
                            <h2 className="text-lg">Mentorship</h2>
                            <h2 className="text-xs max-w-24">Guidance From Top Mentors</h2>
                        </div>
                        <img src="/src/assets/male_intern.png" alt="" className="-mr-13"/>
                    </div>
                </div>
                <div className="career-card w-65 h-27 bg-blue-300 shadow-lg rounded-2xl pl-4 pt-2 flex overflow-hidden transform transition-transform duration-700 ease-out hover:-translate-y-1 hover:shadow-xl hover:scale-105">
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-col ">
                            <h2 className="text-lg">Jobs</h2>
                            <h2 className="text-xs max-w-24">Explore Diverse Careers</h2>
                        </div>
                        <img src="/src/assets/male_intern.png" alt="" className="-mr-13"/>
                    </div>
                </div>
                <div className="career-card w-65 h-27 bg-purple-300 shadow-lg rounded-2xl pl-4 pt-2 flex overflow-hidden transform transition-transform duration-700 ease-out hover:-translate-y-1 hover:shadow-xl hover:scale-105">
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-col ">
                            <h2 className="text-lg">Practice</h2>
                            <h2 className="text-xs max-w-24">Refine Skills Daily</h2>
                        </div>
                        <img src="/src/assets/male_intern.png" alt="" className="-mr-13"/>
                    </div>
                </div>
                <div className="career-card w-65 h-27 bg-yellow-300 shadow-lg rounded-2xl pl-4 pt-2 flex  overflow-hidden transform transition-transform duration-700 ease-out hover:-translate-y-1 hover:shadow-xl hover:scale-105">
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-col ">
                            <h2 className="text-lg">Competitions</h2>
                            <h2 className="text-xs max-w-24">Battle<br/> For Excellence</h2>
                        </div>
                        <img src="/src/assets/male_intern.png" alt="" className="-mr-13"/>
                    </div>
                </div>
                <div className="career-card w-65 h-27 bg-pink-300 shadow-lg rounded-2xl pl-4 pt-2 flex overflow-hidden transform transition-transform duration-700 ease-out hover:-translate-y-1 hover:shadow-xl hover:scale-105">
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-col ">
                            <h2 className="text-lg font-semibold mt-7">::: More</h2>
                            <h2 className="text-xs max-w-24"></h2>
                        </div>
                        <img src="/src/assets/male_intern.png" alt="" className="-mr-13"/>
                    </div>
                </div>
            </div>
        </div>












        </>
    )
}

export default Career;