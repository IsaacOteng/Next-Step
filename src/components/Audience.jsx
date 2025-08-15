import React, { useState } from 'react'
import "./Career.css";
import { GraduationCap, Trophy, ArrowUpRight, UserRoundPlus, UsersRound,
        Megaphone, Sparkles, Handshake, HeartHandshake, ChartColumnBig, Contact, ChevronUp
        , ChevronDown } from "lucide-react";

const Audience = () => {

    const [isexpanded, setIsexpanded] = useState(true)

    return (
    <>
    <div className='target-audience ml-12'>
        <div className='font-semibold text-xl mb-7'>
            Who's Using Unstop?
        </div>

        <div className="cards-container flex flex-row gap-5 mr-10 ">
            <div className="audience-card flex flex-col mb-5 pl-4 pt-4 w-1/3 bg-white rounded-2xl border border-gray-400 p-2 overflow-hidden" >
                <div className="flex flex-row mr-2">
                    <div className='flex flex-col'>
                        <span className='title font-medium text-lg max-w-70'>Students and Professionals</span>
                        <span className="description text-sm max-w-64"><span className='font-medium'>Unlock Your Potential: </span>Compete, Build Resume, Grow and get Hired!</span>
                    </div>
                    <img src="/src/assets/audience_image.png" alt="Student Audience" className='w-25 h-20'/>
                </div>
                    <div
                        className={`transition-all duration-1400 ease-in-out overflow-hidden ${
                            isexpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                    >
                    <hr className='-ml-4 -mr-2 mt-2 mb-1 opacity-20' />
                    <div className='text-size '>
                        <p className='my-2'><GraduationCap className='inline w-4 h-4 mr-2'/>Access tailored jobs and internships</p>
                        <p className='my-2'><Trophy className='inline w-4 h-4 mr-2'/>Participate in exciting competitions</p>
                        <p className='my-2'><ArrowUpRight className='inline w-4 h-4 mr-2'/>Upskill with mentorships & workshops</p>
                        <p className='my-2'><UserRoundPlus className='inline w-4 h-4 mr-2'/>Showcase your profile to top recruiters</p>
                    </div>
                    </div>
            </div>
            <div className="audience-card flex flex-col mb-5 pl-4 pt-4 w-1/3 bg-white rounded-2xl border border-gray-400 p-2 overflow-hidden" >
                <div className="flex flex-row mr-2">
                    <div className='flex flex-col'>
                        <span className='title font-medium text-lg max-w-70'>Companies and Recruiters</span>
                        <span className="description text-sm max-w-64"><span className='font-medium'>Discover Right Talent: </span>Hire, Engage, and Brand Like Never Before!</span>
                    </div>
                    <img src="/src/assets/audience_image2.png" alt="Student Audience" className='w-25 h-20'/>
                </div>
                <div
                    className={`transition-all duration-1400 ease-in-out overflow-hidden ${
                    isexpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                >
                <hr className='-ml-4 -mr-2 mt-2 mb-1 opacity-20' />
                <div className='text-size '>
                    <p className='my-2'><UsersRound className='inline w-4 h-4 mr-2'/>Build employer brand with engagements</p>
                    <p className='my-2'><Megaphone className='inline w-4 h-4 mr-2'/>Host jobs & internships to hire top talent</p>
                    <p className='my-2'><Sparkles className='inline w-4 h-4 mr-2'/>Streamline hiring with AI-driven tools</p>
                    <p className='my-2'><Handshake className='inline w-4 h-4 mr-2'/>Connect with 24M GenZs based on skills</p>
                </div>
                </div>
            </div>
            <div className="audience-card flex flex-col mb-5 pl-4 pt-4 w-1/3 bg-white rounded-2xl border border-gray-400 p-2 overflow-hidden" >
                <div className="flex flex-row mr-2">
                    <div className='flex flex-col'>
                        <span className='title font-medium text-lg max-w-70'>Students and Professionals</span>
                        <span className="description text-sm max-w-64"><span className='font-medium'>Bridge Academia and Industry: </span>Empower Students with Real-World Opportunities!</span>
                    </div>
                    <img src="/src/assets/audience_image3.png" alt="Student Audience" className='w-25 h-20'/>
                </div>
                <div
                        className={`transition-all duration-1400 ease-in-out overflow-hidden ${
                            isexpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                    >
                <hr className='-ml-4 -mr-2 mb-1 opacity-20' />
                <div className='text-size '>
                    <p className='my-2'><GraduationCap className='inline w-4 h-4 mr-2'/>Offer top competition & job opportunities</p>
                    <p className='my-2'><Contact className='inline w-4 h-4 mr-2'/>Partner with companies for placements</p>
                    <p className='my-2'><ChartColumnBig className='inline w-4 h-4 mr-2'/>Gain insights into student performance</p>
                    <p className='my-2'><HeartHandshake className='inline w-4 h-4 mr-2'/>Foster industry-academic collaboration</p>
                </div>
                </div>
            </div>
        </div>
        <div onClick={() =>
            setIsexpanded(!isexpanded)} className='flex mb-15 hover:text-blue-600 cursor-pointer items-center justify-center  '>
            <span className="text-size mr-1.5">
                {isexpanded ? "View Less" : "Know More"}
            </span>
            <ChevronDown
                className={`transition-transform duration-700 ${isexpanded ? "rotate-180" : ""
                }`}
            />
        </div>


    </div>
    </>
    )
}

export default Audience