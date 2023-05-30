import React from 'react';
import img1 from "../../../img/brand/1.png"
import img2 from "../../../img/brand/2.png"
import img3 from "../../../img/brand/3.png"
import img4 from "../../../img/brand/4.png"
import img5 from "../../../img/brand/5.png"
import img6 from "../../../img/brand/6.png"

const Brands = () => {
    return (
        <div>
            <section id="brand" className='container'>

                 <div className='row m-0 py-5'>
                <img className='img-fluid col-lg-2 col-md-4 col-6' src={img1} alt="" />
                <img className='img-fluid col-lg-2 col-md-4 col-6' src={img2} alt="" />
                <img className='img-fluid col-lg-2 col-md-4 col-6' src={img3} alt="" />
                <img className='img-fluid col-lg-2 col-md-4 col-6' src={img4} alt="" />
                <img className='img-fluid col-lg-2 col-md-4 col-6' src={img5} alt="" />
                <img className='img-fluid col-lg-2 col-md-4 col-6' src={img6} alt="" />
                </div>
            </section>
           

            
        </div>
    );
};

export default Brands;