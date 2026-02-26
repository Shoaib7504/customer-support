import React from 'react';

const ResolvedStatus = ({res}) => {
    
    
    return (
        <div className='bg-[#E0E7FF] w-89.5 h-15 m-3 rounded-xl justify-items-center text-center'>
            <h1 className='text-xl'>{res.title}</h1>
        </div>
    );
};

export default ResolvedStatus;