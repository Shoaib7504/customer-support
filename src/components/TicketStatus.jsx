import React from 'react';

const TicketStatus = ({ result, handelResolved, handelComplete }) => {
    // console.log(result);



    return (
        <div className='w-90 h-36  p-3 mt-4 bg-white rounded-xl'>
            <h1 className='font-semibold text-2xl'>{result.title}</h1>
            <button onClick={() => { handelResolved(result); handelComplete(result.id) }} className='w-full p-2 mt-3 text-white font-medium bg-green-500 rounded-xl'>Completed</button>
        </div>
    );
};

export default TicketStatus;