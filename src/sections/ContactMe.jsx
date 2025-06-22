import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

const ContactMe = () => {
    return (
        <section id="contactme" className="flex-center section-padding">
            <div className="max-w-4xl mx-auto">
                <TitleHeader
                    title="Contact Information"
                    sub="💬 Feel free to reach out to me anytime 🚀"
                />
                <div className=" mt-10 space-y-6 w-full">
                    <div className="flex items-center gap-4 w-full">
                        <Mail className="text-cyan-400" />
                        <span className="text-xl w-full">
                            <strong>Email:</strong> arnabbhattacharya2005@gmail.com
                        </span>
                    </div>

                    <div className="flex items-center gap-4 w-full">
                        <Phone className="text-cyan-400" />
                        <span className="text-xl w-full">
                            <strong>Phone:</strong> +91 74393 02009
                        </span>
                    </div>

                    <div className="flex items-center gap-4 w-full">
                        <MapPin className="text-cyan-400" />
                        <span className="text-xl w-full">
                            <strong>Location:</strong> Kolkata, West Bengal, India
                        </span>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-6 mt-8 text-xl w-full">
                        <span><strong>Socials:</strong></span>
                        <div className='flex justify-center items-center gap-2'>
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
                        <div className='flex justify-center items-center gap-2'>
                            <Linkedin className='text-cyan-400' />
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
            </div>
        </section>
    )
}

export default ContactMe
