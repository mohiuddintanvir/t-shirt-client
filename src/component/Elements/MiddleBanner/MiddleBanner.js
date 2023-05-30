import React from 'react';
import "./middlebanner.css"

const MiddleBanner = () => {
    return (
        <div>
            <section id="banner" className='my-5 py-5'>
                <div className="container" >
                    <h4>MIS Season's sale</h4>
                    <h1>Farewell T-shirt collection <br />
                        UP TO 20% OFF
                    </h1>
                    <button className='text-uppercase'>Shop now</button>
                </div>
            </section>
        </div>
    );
};

export default MiddleBanner;