import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './product.css';
import { FaStar } from "react-icons/fa6";
import img1 from './images/milk_1.png';
import img2 from './images/milk_1ss.png';
import img3 from './images/milk_1sss.png';
import img4 from './images/milk_2.png';
import img5 from './images/milk_1-150x150.png'
import img6 from './images/milk_1ss-150x150.png'
import img7 from './images/milk_1sss-150x150.png'
import img8 from './images/milk_2-150x150.png'
import img9 from './images/product_payment_logo.svg'
import img10 from './images/single-product.jpg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaRecycleSolid } from "react-icons/lia";
import { GiFlour } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import ReactImageMagnify from 'react-image-magnify';


const Product = () => {
    const sliderRef = useRef(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        alert(`Added ${quantity} items to cart`);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const scrollNext = () => {
        sliderRef.current.slickNext();
    };

    const scrollPrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleThumbnailClick = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className='main-div'>
            <div className='Product-detail'>
            <div className='product-left'>
                    <div className="Slider">
                    <Slider ref={sliderRef} {...settings}>
    <div className='slid-img'>
        <ReactImageMagnify
            {...{
                smallImage: {
                    alt: 'Image 1',
                    src: img4,
                    width: 600, 
                    height: 400,
                },
                largeImage: {
                    src: img4,
                    width: 1200,
                    height: 800, 
                },
                enlargedImageContainerClassName: 'enlarged-image-container',
                enlargedImageClassName: 'enlarged-image'
            }}
        />
    </div>
    <div className='slid-img'>
        <ReactImageMagnify
            {...{
                smallImage: {
                    alt: 'Image 2',
                    src: img2,
                    width: 600, 
                    height: 400, 
                },
                largeImage: {
                    src: img2,
                    width: 1200, 
                    height: 800, 
                },
                enlargedImageContainerClassName: 'enlarged-image-container',
                enlargedImageClassName: 'enlarged-image'
            }}
        />
    </div>
    <div className='slid-img'>
        <ReactImageMagnify
            {...{
                smallImage: {
                    alt: 'Image 3',
                    src: img3,
                    width: 600, 
                    height: 400, 
                },
                largeImage: {
                    src: img3,
                    width: 1200,
                    height: 800,
                },
                enlargedImageContainerClassName: 'enlarged-image-container',
                enlargedImageClassName: 'enlarged-image'
            }}
        />
    </div>
    <div className='slid-img'>
        <ReactImageMagnify
            {...{
                smallImage: {
                    alt: 'Image 4',
                    src: img1,
                    width: 600,
                    height: 400, 
                },
                largeImage: {
                    src: img1,
                    width: 1200, 
                    height: 800, 
                },
                enlargedImageContainerClassName: 'enlarged-image-container',
                enlargedImageClassName: 'enlarged-image'
            }}
        />
    </div>
</Slider>
                        <button className="prev-button" onClick={scrollPrev}><FaChevronLeft /></button>
                        <button className="next-button" onClick={scrollNext}><FaChevronRight /></button>
                        
</div>
                    <div className="thumbnails">
                        <img className='mini-items' src={img8} alt="Thumbnail 1" onClick={() => handleThumbnailClick(0)} />
                        <img className='mini-items' src={img6} alt="Thumbnail 2" onClick={() => handleThumbnailClick(1)} />
                        <img className='mini-items' src={img7} alt="Thumbnail 3" onClick={() => handleThumbnailClick(2)} />
                        <img className='mini-items' src={img5} alt="Thumbnail 4" onClick={() => handleThumbnailClick(3)} />
                    </div>
                </div>
                {/* Product Right */}
                <div className='Product-right'>
                    <h1>Aptamil Gold+ ProNutra Biotik Stage 1 Infant Formula– 31.7</h1>
                    <div className='reviews'>
                        <FaStar className='yellow' /> <FaStar className='yellow' /> <FaStar className='yellow' /> <FaStar className='black' /> <FaStar className='black' />
                        <a>(customer reviews)</a>
                        <a >Share</a><FaFacebookSquare /><FaXTwitter /><FaWhatsapp />


                    </div>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor.</p>
                    <ul>
                        <li>Pellentesque habitant tristique senectus</li>
                        <li>Turpis egestaVestibulum tortor quam</li>
                        <li>Eugiat vitae ultricies eget tempor</li>
                    </ul>
                    <h2>$20.00 – $47.00</h2>
                    <div className='timer'>
                        <h3>Hurry Up Sale End in:</h3>
                        <div className='box'>6 Day</div>
                        <div className='box'>5 Hour</div>
                        <div className='box'>20 Min</div>
                    </div>
                    <div className='weight'>
                        <h4>Weight:</h4>
                        <p title='350ml'>350ml</p>
                        <p title='500gm'>500gm</p>
                    </div>
                    <div className='btn'>
                        <div className='quntity'>
                            <button onClick={handleDecrement}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrement}>+</button>
                        </div>
                        <button className='cart' onClick={handleAddToCart}><PiShoppingCartDuotone />Add to Cart</button>
                    </div>
                    <div className='whishlist'>
                        <a href="">Add to Wishlist</a><p>|</p><a href=''> Add to Compare</a>

                    </div>
                    <div className='payment'>
                        <h3>Guaranteed Safe Checkout</h3>
                        <img src={img9} alt="" />
                    </div>
                </div>
                <div className='product-end'>
                    <div className='content'>
                        <p> <TbTruckDelivery /> Free worldwide shipping on all orders over $100</p>
                        <p> <GiFlour /> Guranteed 100% Organic from natural farmas</p>
                        <p><LiaRecycleSolid /> 1 Day Returns if you change your mind</p>
                    </div>
                </div>
            </div>
            {/* discription */}
            <div className='items'>
                <button className={activeTab === 'description' ? 'btn-dis active' : 'btn-dis'} onClick={() => handleTabClick('description')}>Description</button>
                <button className={activeTab === 'additional' ? 'btn-dis active' : 'btn-dis'} onClick={() => handleTabClick('additional')}>Additional Information</button>
                <button className={activeTab === 'reviews' ? 'btn-dis active' : 'btn-dis'} onClick={() => handleTabClick('reviews')}>Reviews</button>
            </div>
            {activeTab === 'description' && (<><div className='discription'>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. ibero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.ea commodo consat. Duis aute irure dolor in reprehenderit n volup tate velitesse cillum dolore euy elit ale ruin irure dolor.uis aute irure dolor in reprehenderit n volup tate velit esse cillum,</p>
            </div>
                <div className='img-dis'>
                    <div className='left-img'><img className='image-left' src={img10} alt="img" /></div>
                    <div className='right'>
                        <h2>Premium & Sugar Free Yogurt</h2>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. ibero sit amet quam egestas semperAenean ultricies mi vitae est Mauris placerat eleifend.</p>
                        <li>Pellentesque habitant morbi tristique senectus</li>
                        <li>turpis egestaVestibulum tortor quam</li>
                        <li>eugiat vitae ultricies eget tempor</li>
                        <li>libero amet quam egestas</li>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor.</p>
                    </div>
                </div></>)}
            {activeTab === 'additional' && (
                <div className='additional-information'>
                    <h2>Weight:</h2><p>375ml & 500gm</p>
                </div>
            )}
            {activeTab === 'reviews' && (
                <div className='reviews-content'>
                    <h3>Add a Review</h3>
                    <p>Your email address will not be published. Required fields are marked * </p>
                    <input className='input-rev' type="text" placeholder='Your Review*' />
                    <div className='input-sec'><input type="text" placeholder='Name'/><input type="email" placeholder='Email'/></div>
                    <button>Submit</button>
                </div>
            )}
        </div>
    );
};

export default Product;
