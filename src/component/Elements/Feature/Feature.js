import React, { useEffect, useState } from 'react';
import './feature.css'
import { AiFillStar } from "react-icons/ai";
import BookingModal from './BookingModal';


const Feature = () => {
    const [feature, setFeature] = useState([])

    useEffect(() => {
        fetch('https://tshirt-website-server.vercel.app/tshirt')
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])

    console.log(feature)

    return (
        <div>
            <section id="feature" className='my-5 pb-5'>
                <div className='container text-center mt-5 py-5'>
                    <h3>Our Feature</h3>
                    <hr className='mx-auto' />
                    <p>Here you can check out our new products with fair price on rymo </p>
                </div>
                <div className='row mx-auto container-fluid'>
                    {
                        feature.map(features => <div className='product text-center col-lg-3 col-md-4 col-12'>
                            <img className='img-fluid mb-3' src={features.img} alt="" />
                            <div className='star'>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <h5>{features.name}</h5>
                            <h4 className="p-price">TK.{features.price}</h4>
                           
                            <button type="button" class="btn buy-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Buy Now
                            </button>
                        </div>)
                    }
                </div>
<BookingModal></BookingModal>
            </section>
        </div>
    );
};

export default Feature;