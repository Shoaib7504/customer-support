import React from 'react';

const Cards = ({ ticket, handleClick }) => {

    // console.log(ticket.id);

    return (
        <div>
            <div onClick={()=>handleClick(ticket)} className="bg-white shadow-md rounded-lg cursor-pointer p-4 w-105 border border-gray-200 hover:shadow-xl transition-shadow">


                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-sm font-semibold text-gray-800">
                        {ticket.title}
                    </h2>


                    <span className={`flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full
                                        ${ticket.priority == 'HIGH PRIORITY' ? "text-red-500 bg-red-400" :
                            ticket.priority == 'MEDIUM PRIORITY' ? "text-green-500 bg-green-400" :
                                "text-yellow-500 bg-yellow-400"} `}
                    >
                        <span className={`w-3 h-3 rounded-full
                                        ${ticket.priority == 'HIGH PRIORITY' ? " bg-red-600" :
                                ticket.priority == 'MEDIUM PRIORITY' ? " bg-green-600" :
                                    " bg-yellow-600"} `}></span>
                        {ticket.status}
                    </span>
                </div>


                <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                    {ticket.description}
                </p>


                <div className="flex items-center justify-between text-xs">


                    <div className="flex items-center gap-2">
                        <span className="text-gray-500">{ticket.id}</span>
                        <span className={` items-center text-xs font-medium px-3 py-1 rounded-lg
                                        ${ticket.priority == 'HIGH PRIORITY' ? "text-red-500" :
                                ticket.priority == 'MEDIUM PRIORITY' ? "text-green-500" :
                                    "text-yellow-500 "} `}>
                            {ticket.priority}
                        </span>
                    </div>


                    <div className="flex items-center gap-4 text-gray-500">
                        <span>{ticket.assignee}</span>
                        <span>{ticket.date}</span>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Cards;