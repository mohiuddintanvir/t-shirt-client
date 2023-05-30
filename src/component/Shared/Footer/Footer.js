import React from 'react';
import logo from '../../../img/logo2.png'
import { Link } from 'react-router-dom';
import img1 from '../../../img/insta/1.jpg'
import img2 from '../../../img/insta/2.jpg'
import img3 from '../../../img/insta/3.jpg'
import img4 from '../../../img/insta/4.jpg'
import img5 from '../../../img/payment.png'
import { AiFillFacebook,AiFillTwitterCircle,AiFillLinkedin} from "react-icons/ai";
import './footer.css'

const Footer = () => {

    const imglist = [
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
        }
    ]
    return (
        <div>
            <footer className='mt-5 py-5'>
                <div className='row container mx-auto pt-5'>
                    <div className='footer-one col-lg-3 col-md-6 col-12 '>
                        <img src={logo} alt="" />
                        <p className='pt-3'>Fringilla urna prottitor rhoncus dolor purus luctus venenatis lectus magna fringilla diam meacenas ultricies mi eget maris</p>
                    </div>
                    <div className='footer-one col-lg-3 col-md-6 col-12'>
                        <h5 className='pb-2'>Featured</h5>
                        <ul className='text-uppercase list-unstyled'>
                            <li><a href='#'>Man</a></li>
                            <li><Link>Woman</Link></li>
                            <li><Link>Children</Link></li>
                            <li><Link>Boy</Link></li>
                            <li><Link>Girl</Link></li>
                            <li><Link>Cloth</Link></li>
                        </ul>
                    </div>
                    <div className='footer-one col-lg-3 col-md-6 col-12'>
                        <h5 className='pb-2'>Contact Us</h5>
                        <div>
                            <h6 className='text-uppercase'>Address</h6>
                            <p>123 street name, City,Bangladesh</p>
                        </div>
                        <div>
                            <h6 className='text-uppercase'>Phone</h6>
                            <p>+880 16789034567</p>
                        </div>
                        <div>
                            <h6 className='text-uppercase'>Email</h6>
                            <p>Hello @gmail.com</p>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className='footer-one col-lg-3 col-md-6 col-12'>
                        <h5 className='pb-2'>Instagram</h5>
                        <div className='row'>
                            {
                                imglist.map(img =>
                                    <img className='img-fluid w-25 h-100 m-2' src={img.img} alt="" />
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className='copyright mt-5'>
                    <div className="row container mx-auto">
                        <div className='col-lg-3 col-md-6 col-12'>
                            <img src={img5} alt="" />
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 text-nowrap'>
                            <p>rymo eCommerce @ 2023. All Rights Reserved</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <a href='#'><AiFillFacebook/></a>
                            <a href='#'><AiFillTwitterCircle/></a>
                            <a href='#'><AiFillLinkedin/></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;