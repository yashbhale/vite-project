import React, { useState } from 'react';
import Navbar from './Navbar';

const Card = (props) => {
    return (
        <div className="card mx-20 my-1 flex justify-between bg-gray-950 border-none rounded-lg p-3">
            <div className="card20 flex ">
                <div className="no p-2 mr-4 text-xl">
                    {props.serialNumber}
                </div>
                <div className="names">
                    <h1 className='text-[24px] font-bold'>{props.name}</h1>
                    <h4 className='text-gray-300'>Udise No: {props.Uid}</h4>
                </div>
            </div>
            <div className="hello flex justify-normal">
            <h1 className='my-auto text-xl mr-10'>Score: {props.score}</h1>
            <button
                type="submit"
                className="px-9 py-1 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
                Verify
            </button>
            </div>
        </div>
    );
};

const Govhome = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Sample card data
    const cardData = [
        { name: "Vishwakarma Institute Of Technology", Uid: "-19223484273522", score: "0.0001" },
        { name: "Pune Institute Of Technology", Uid: "-19223484273522", score: "0.0001" },
        { name: "COEP", Uid: "-19223484273522", score: "0.0001" },
        { name: "IIT Bibwewadi", Uid: "-19223484273522", score: "0.0001" },
        { name: "IIT Bombay", Uid: "-19223484273522", score: "0.0001" },
        { name: "Vishwakarma Institute Of Technology", Uid: "-19223484273522", score: "0.0001" },
        { name: "Vishwakarma Institute Of Technology", Uid: "-19223484273522", score: "0.0001" },
    ];

    // Filter card data based on search term
    const filteredCardData = cardData.filter(card =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Navbar />
            <div className="body bg-gray-900 text-white relative">
                <div className="hero mx-auto py-6 flex flex-col items-center ">
                    <span className='text-4xl text-bold'>ODD School List</span>
                    
                </div>
                <input
                        type="text"
                        placeholder="Search schools..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mt-2 p-1 border rounded-md text-black w-64 absolute right-16 top-7"
                    />

                <div className="cardcon flex flex-col">
                    {filteredCardData.map((card, index) => (
                        <Card
                            key={index}
                            name={card.name}
                            Uid={card.Uid}
                            score={card.score}
                            serialNumber={index + 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Govhome;
