
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className='w-full mx-auto'>
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8 justify-items-center">
                        {/* Company Info */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">CS — Ticket System</h3>
                            <p className="text-gray-400 text-sm">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley.
                            </p>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Career Board</a></li>
                            </ul>
                        </div>

                        {/* Services Links */}
                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Ticketing & Services</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Customer Outreach</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
                            </ul>
                        </div>

                        {/* Information & Social Links */}
                        <div>
                            <h4 className="font-semibold mb-4">Information</h4>
                            <ul className="space-y-2 text-sm text-gray-400 mb-6">
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Term & Conditions</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
                            </ul>

                            <h4 className="font-semibold mb-4">Social Links</h4>
                            <div className="flex gap-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Facebook />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                   <Twitter />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                  <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
                        © 2024-25 — Ticket System. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;