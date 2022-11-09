import React from 'react';

const Review = ({reviewItem}) => {
    // console.log(reviewItem)
    const {photoURL, displayName, review} = reviewItem
    return (
        <div className=' border-2 border-blue-500 rounded-lg p-5'>
            <div className=' flex flex-row  gap-5'>
                <img className=' h-14 w-14 rounded-full' src={photoURL} alt="" />
                <p className=' font-bold text-xl'>{displayName}</p>

            </div>
            <div className=' mt-5 text-lg font-semibold italic'>
                "{review}"
            </div>
            
        </div>
    );
};

export default Review;