import React from 'react';

const ResolvedStatus = ({res}) => {
    
    
    return (
        <div className='bg-[#E0E7FF] w-89.5 h-15 m-3 rounded-xl '>
            <h1 className='text-xl p-2 flex text-center justify-items-center'>{res.title}</h1>
           
        </div>
    );
};

export default ResolvedStatus;