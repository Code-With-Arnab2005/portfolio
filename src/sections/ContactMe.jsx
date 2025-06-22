import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

const ContactMe = () => {
    return (
        <section id="contactme" className="flex-center section-padding">
            <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
                <TitleHeader
                    title="Contact Information"
                    sub="💬 Feel free to reach out to me anytime 🚀"
                />

                <div className="border-2 border-gray-500 px-4 sm:px-6 lg:px-10 py-10 sm:py-14 rounded-lg mt-10 space-y-6 w-full">

                    {/* Email */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                        <Mail className="text-cyan-400" />
                        <span className="text-lg sm:text-xl break-words">
                            <strong>Email:</strong> arnabbhattacharya2005@gmail.com
                        </span>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                        <Phone className="text-cyan-400" />
                        <span className="text-lg sm:text-xl">
                            <strong>Phone:</strong> +91 74393 02009
                        </span>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                        <MapPin className="text-cyan-400" />
                        <span className="text-lg sm:text-xl">
                            <strong>Location:</strong> Kolkata, West Bengal, India
                        </span>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-4 mt-6 text-lg sm:text-xl">
                        <span><strong>Socials:</strong></span>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
                            <div className='flex items-center gap-2'>
                                <Github className="text-cyan-400" />
                                <a
                                    href="https://github.com/Code-With-Arnab2005"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-400"
                                >
                                    GitHub
                                </a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Linkedin className="text-cyan-400" />
                                <a
                                    href="https://www.linkedin.com/in/arnab-bhattacharya-42216a320"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-400"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* DSA/CP Platforms */}
                    <div className="flex flex-col gap-4 mt-10">
                        <h3 className="text-xl sm:text-2xl font-semibold">📘 My DSA/CP Platforms Account:</h3>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-lg sm:text-xl">
                            <div className='flex items-center gap-2'>
                                <img
                                    src="https://cdn.simpleicons.org/geeksforgeeks/06b6d4"
                                    alt="LeetCode"
                                    className="w-6 h-6"
                                />
                                <a
                                    href="https://leetcode.com/u/Arnab_Bhattacharya_2005/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-400"
                                >
                                    LeetCode
                                </a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img
                                    src="https://cdn.simpleicons.org/leetcode/06b6d4"
                                    alt="GFG"
                                    className="w-6 h-6"
                                />
                                <a
                                    href="https://www.geeksforgeeks.org/user/arnabbhattacharya2005/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-400"
                                >
                                    GeeksforGeeks
                                </a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img
                                    src="https://cdn.simpleicons.org/codeforces/06b6d4"
                                    alt="Codeforces"
                                    className="w-6 h-6"
                                />
                                <a
                                    href="https://codeforces.com/profile/Arnab_Bhattacharya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-400"
                                >
                                    Codeforces
                                </a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img
                                    src="https://cdn.simpleicons.org/codingninjas/06b6d4"
                                    alt="Coding Ninjas"
                                    className="w-6 h-6"
                                />
                                <a
                                    href="https://www.naukri.com/code360/profile/9355f6bf-57ff-4ac8-a209-560c291fcd7e"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-400"
                                >
                                    Coding Ninjas
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactMe
