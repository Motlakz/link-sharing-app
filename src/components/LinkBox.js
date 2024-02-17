import React from "react";
import { Link } from "react-router-dom";
import CustomDropdown from './CustomDropdown';

function LinkBox() {
    return (
        <div className="linkbox p-4 scale-in-top">
            <header className="flex justify-between items-center">
                <p className="text-lg text-gray-500 font-bold"><i className="bi bi-list-ul"></i> Link #1</p>
                <Link className="text-gray-500 hover:text-gray-100 hover:bg-gray-400 p-2 rounded-md border border-gray-400">Remove</Link>
            </header>
            <section className="bg-cyan-50 bg-opacity-50">
               <CustomDropdown />
            </section>
        </div>
    )
} 

export default LinkBox;
