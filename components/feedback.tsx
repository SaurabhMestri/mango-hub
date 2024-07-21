import Image from 'next/image'
import React from 'react'

const product = [
    {
        product_image: "/images/variety/Ratnagiri.jpg",
        comment: "The Alphonso mango is a seasonal fruit harvested from mid-April through the end of June.",
        product_name: "Ratnagiri"
    },
    {
        product_image: "/images/variety/devgad.jpg",
        comment: "this mango is good quality",
        product_name: "Devgad"
    },
    {
        product_image: "/images/variety/Rajapuri.jpg",
        comment: "this mango is good quality",
        product_name: "Rajapuri"
    },
    {
        product_image: "/images/variety/Himsagar.jpg",
        comment: "this mango is good quality",
        product_name: "Himsagar"
    },
    {
        product_image: "/images/variety/kesar.jpg",
        comment: "this mango is good quality",
        product_name: "Kesar"
    },
    {
        product_image: "/images/variety/Raivali.jpg",
        comment: "this mango is good quality",
        product_name: "Raivali"
    },
]

const feedback = () => {
    return (
        <div className='container'>
            <h1 className='center'>Indian Mango variety</h1>
            <div className="feedback-container border-radius">
                {product.map((product, index) => {
                    return (
                        <div key={index} className="feedback-image">
                            <Image src={product.product_image} height={350} width={350} alt='' />
                            <div className="content">
                                <h3>{product.product_name}</h3>
                                <p>{product.comment}</p>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default feedback