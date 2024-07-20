import Image from 'next/image'
import React from 'react'

const feedback_enquiry = [
    {
        feedback_image: "/images/variety/Ratnagiri.jpg",
        comment: "this mango is good quality",
        product_name: "Ratnagiri"
    },
    {
        feedback_image: "/images/variety/devgad.jpg",
        comment: "this mango is good quality",
        product_name: "Devgad"
    },
    {
        feedback_image: "/images/variety/Rajapuri.jpg",
        comment: "this mango is good quality",
        product_name: "Rajapuri"
    },
    {
        feedback_image: "/images/variety/Himsagar.jpg",
        comment: "this mango is good quality",
        product_name: "Himsagar"
    }
]

const feedback = () => {
    return (
        <div className='container'>
            <h1 className='center'>Customer Feedback!</h1>
            <div className="feedback-container border-radius">
                {feedback_enquiry.map((feedback_enquiry, index) => {
                    return (
                        <div key={index} className="feedback-image">
                            <Image src={feedback_enquiry.feedback_image} height={350} width={350} alt='' />
                            <div className="content">
                                <h3>{feedback_enquiry.product_name}</h3>
                                <p>{feedback_enquiry.comment}</p>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default feedback