import { useContext } from "react";
import { assets } from "../assets/assets";

const Main = () => {
   

    

    return (
        <div className="flex flex-col min-h-screen w-full ">
            <div className="flex items-center justify-between text-lg px-5 py-4 text-gray-600">
                <p className="font-bold cursor-pointer" onClick>
                    Gemini with <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">Atul tandan</span>
                </p>
                <img src={assets.user_icon} alt="User" className="w-10 rounded-full" />
            </div>

            <div className="max-w-3xl mx-auto flex-1 px-4">
                {/* {showResult ? (
                    <div className="overflow-y-auto max-h-[70vh]">
                        <div className="flex items-center gap-5 my-8">
                            <img src={assets.user_icon} alt="User" className="w-10 rounded-full" />
                            <p>{recentPrompt}</p>
                        </div>

                        <div className="flex items-start gap-5">
                            <img src={assets.gemini_icon} alt="Gemini" className="w-10" />

                            {loading ? (
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="h-5 bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-[length:800px_20px] animate-[loader_3s_infinite_linear]"></div>
                                    <div className="h-5 bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-[length:800px_20px] animate-[loader_3s_infinite_linear]"></div>
                                    <div className="h-5 bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-[length:800px_20px] animate-[loader_3s_infinite_linear]"></div>
                                </div>
                            ) : (
                                <p className="text-base font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: resultData }} />
                            )}
                        </div>
                    </div>
                ) : ( */}
                    <div>
                        <div className="text-2xl font-medium text-gray-500 mt-8 mb-10 px-5">
                            <p>
                                <span>
                                    Hello, I'm Gemini <span className="text-2xl">clone</span>, developed by Atul tandan.
                                </span>
                            </p>
                            <p>How can I help you today?</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5 ">
                            <div className="bg-gray-100 rounded-lg p-5 cursor-pointer hover:bg-gray-200 " onClick>
                                <p className="text-gray-600 text-sm ">Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="Compass icon" className="w-8  ml-auto mt-1" />
                            </div>

                            <div className="bg-gray-100 rounded-lg p-5 cursor-pointer hover:bg-gray-200" onClick>
                                <p className="text-gray-600 text-sm">Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="Bulb icon" className="w-8 ml-auto mt-6" />
                            </div>

                            <div className="bg-gray-100 rounded-lg p-5 cursor-pointer hover:bg-gray-200" onClick>
                                <p className="text-gray-600 text-sm">Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="Message icon" className="w-8 ml-auto mt-auto" />
                            </div>

                            <div className="bg-gray-100 rounded-lg p-5 cursor-pointer hover:bg-gray-200" onClick>
                                <p className="text-gray-600 text-sm">Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="Code icon" className="w-8 ml-auto mt-6" />
                            </div>
                        </div>
                    </div>
                {/* atul */}

                <div className="mt-12 px-5 ">
                    <div className="flex items-center justify-between gap-4 bg-gray-100 p-4 rounded-full">
                        <input 
                            
                            type="text" 
                            placeholder='Enter a prompt here' 
                            className="flex-1 bg-transparent border-none outline-none text-lg"
                        />

                        <div className="flex items-center gap-4">
                            <img src={assets.gallery_icon} alt="Gallery icon" className="w-6 cursor-pointer" />
                            <img src={assets.mic_icon} alt="Mic icon" className="w-6 cursor-pointer" />

                            {(
                                <img onClick src={assets.send_icon} alt="Send icon" className="w-6 cursor-pointer" />
                            )}
                        </div>
                    </div>

                    <p className="text-sm text-center text-gray-400 mt-5">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
