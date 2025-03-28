import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useSelector } from 'react-redux';

function TypeWriter() {
    const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <div className={`${darkMode ? "text-white" : "text-gray-800"} flex`}>
            <div className="text-center">
                <h1 className="text-2xl font-bold">
                    I Am Into {" "}
                    <span className={`${darkMode ? "text-yellow-400" : "text-blue-700"}`}>
                        <Typewriter
                            words={["Software Developer", "Full Stack Developer"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>
        </div>
    );
}
export default TypeWriter;