import React from 'react';
import './managementteam.css'
import { AiFillStar } from "react-icons/ai";
import img1 from '../../../img/design/1.jpg'
import img2 from '../../../img/design/2.jpg'
import img3 from '../../../img/design/3.jpg'
import img4 from '../../../img/design/4.jpg'

const ManagementTeam = () => {
    const featurelist=[
        {
            name:'sport Boots',
            price:999 ,
            img:img1

        },
        {
            name:'Formal Boots',
            price:999,
           img:img2

        },
        {
            name:'Smart Bag',
            price:999,
             img:img3

        },
        {
            name:'Baggy Cap',
            price:999,
            img:img4

        },
    ]
    return (
        <div>
            <section id="feature" className='my-5 pb-5'>
                <div className='container text-center mt-5 py-5'>
                    <h3>Our Designs</h3>
                    <hr className='mx-auto' />
                    <p>Here you can Modify your t-shirts with Our amazing design </p>
                </div>
                <div className='row mx-auto container-fluid'>
                  {
                    featurelist.map(feature=>  <div className='products text-center col-lg-3 col-md-4 col-12'>
                    <img className='img-fluid mb-3' src={feature.img} alt="" />
                   
                    <h5>{feature.name}</h5>
                    <h4 className="p-price">TK.{feature.price}</h4>
                    <button className="buy-btn">Use</button>
                </div>)
                  }
                </div>

            </section>
        </div>
    );
};

export default ManagementTeam;