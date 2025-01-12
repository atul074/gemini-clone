import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    

    return (
        <div className={`flex flex-col justify-between bg-gray-100 p-4 h-screen transition-all ${extended ? 'w-64' : 'w-20'} duration-300`}>
            <div>
                {/* Menu Icon */}
                <img
                    onClick={() => setExtended((prev) => !prev)}
                    className="w-5 cursor-pointer mb-8"
                    src={assets.menu_icon}
                    alt="Menu Icon"
                />

                {/* New Chat */}
                <div 
                    onClick
                    className="flex items-center gap-2 p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
                >
                    <img src={assets.plus_icon} alt="New Chat" className="w-5" />
                    {extended && <p className="text-sm text-gray-700">New Chat</p>}
                </div>

                {/* Recent Prompts */}
                {extended && (
                    <div className="mt-6">
                        <p className="mb-4 text-gray-500">Recent</p>
                        {/* {prevPrompts.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => loadPrompt(item)}
                                className="flex items-center gap-2 p-3 rounded-full cursor-pointer hover:bg-gray-300"
                            >
                                <img src={assets.message_icon} alt="Message Icon" className="w-5" />
                                <p className="text-sm text-gray-800">{item.slice(0, 18)}...</p>
                            </div>
                        ))} */}
                    </div>
                )}
            </div>

            {/* Bottom Menu */}
            <div className="flex flex-col gap-3">
                <div className="flex items-cente gap-2 p-3 rounded-full cursor-pointer hover:bg-gray-300">
                    <img src={assets.question_icon} alt="Help Icon" className="w-5" />
                    {extended && <p className="text-sm">Help</p>}
                </div>
                <div className="flex items-center gap-2 p-3 rounded-full cursor-pointer hover:bg-gray-300">
                    <img src={assets.history_icon} alt="Activity Icon" className="w-5" />
                    {extended && <p className="text-sm">Activity</p>}
                </div>
                <div className="flex items-center gap-2 p-3 rounded-full cursor-pointer hover:bg-gray-300">
                    <img src={assets.setting_icon} alt="Settings Icon" className="w-5" />
                    {extended && <p className="text-sm">Settings</p>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
