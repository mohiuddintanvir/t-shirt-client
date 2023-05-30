import React from 'react';
import img1 from '../../../img/new/1.jpg'
import img2 from '../../../img/new/2.jpg'
import img3 from '../../../img/new/3.jpg'
import './newsection.css'

const NewSection = () => {
    return (
        <div>
            <section id='new' className='w-100'>
              
                <div className='row p-0 m-0'>
                    <div className='one col-lg-4 col-md-12 col-12 p-0'>
                        <img className='' src={img1} alt="" />
                        <div className='details'>
<h2>Extreme Rare Sneakers</h2>
<button  className='text-uppercase'>Shop Now</button>
                        </div>
                    </div>
                    <div className='one col-lg-4 col-md-12 col-12 p-0'>
                        <img className='' src={img2} alt="" />
                        <div className='details'>
<h2>Awsome Blank Outfit</h2>
<button className='text-uppercase'>Shop Now</button>
                        </div>
                    </div>
                    <div className='one col-lg-4 col-md-12 col-12 p-0'>
                        <img className='' src={img3} alt="" />
                        <div className='details'>
<h2>Sportwear up to 50% off</h2>
<button className='text-uppercase'>Shop Now</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default NewSection;