import React from 'react';
import '../src/app/globals.css'


const Notification = () => {



    return (
        <div className='h-12 bg-red-500 text-white px-4 flex items-center justify-center text-center text-sm
                        md:text-base cursor-pointer'>
            Free delivery for all orders over $50. Order your food now!
        </div>
    );
};

export default Notification;