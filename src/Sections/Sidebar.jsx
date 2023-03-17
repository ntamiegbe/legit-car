import React, { useState } from 'react';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleSidebar() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="bg-gray-800 text-white h-full fixed top-0 left-0 transition-all duration-300 ease-in-out z-30" style={{ width: isOpen ? '300px' : '0px' }}>
            <div className="p-4 flex justify-end lg:hidden">
                <button onClick={toggleSidebar}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>
            <ul className={`px-2 py-4 lg:block ${isOpen ? '' : 'hidden'}`}>
                {/* your sidebar links here */}
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    );
}

export default Sidebar;