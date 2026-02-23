import { Plus } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='max-w-400 mx-auto'>
            <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-gray-800 text-xl font-medium">
                        CS — Ticket System
                    </span>
                </div>
                <div className="flex items-center gap-6">

                    <a className="text-gray-600 hover:text-gray-900 transition-colors" href="">Home</a>
                    <a className="text-gray-600 hover:text-gray-900 transition-colors" href="">FAQ</a>
                    <a className="text-gray-600 hover:text-gray-900 transition-colors" href="">Changelog</a>
                    <a className="text-gray-600 hover:text-gray-900 transition-colors" href="">Blog</a>
                    <a className="text-gray-600 hover:text-gray-900 transition-colors" href="">Download</a>
                    <a className="text-gray-600 hover:text-gray-900 transition-colors" href="">Contact</a>

                    <button className="flex items-center gap-1 cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded text-xs transition-colors">
                        <Plus />
                        New Ticket
                    </button>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;