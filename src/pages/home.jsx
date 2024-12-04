import './styles/home.css';
import banner from '../assets/top-banner.jpg';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

function Home() {
    const images = [
        '/images/welding.jpeg',
        '/images/iron.jpeg',
        '/images/auto.jpeg',
    ];

    return (
        <div className="home page">

            <Slide
            autoplay={false}
            onChange={function noRefCheck(){}}
            onStartChange={function noRefCheck(){}}
            >
                <div className="each-slide-effect">
                    <div style={{ backgroundImage: 'url(/images/welder.jpg)' }}>
                        <span>Weekley Specials</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ backgroundImage: 'url(/images/smith.jpg)' }}>
                        <span>New Releases</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ backgroundImage: 'url(/images/auto2.jpg)' }}>
                        <span>Best Sellers</span>
                    </div>
                </div>
            </Slide>

            <div className="section-2">
                <div className="info">
                    <div className='for-him-text'>
                        <h3>Gifts For Him</h3>
                        <Link className='btn btn-lg btn-light' to="/catalog">
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className='for-her'>
                    <div className="for-her-text">
                        <h3>Gifts For Her</h3>
                        <Link className='btn btn-lg btn-light' to='/catalog'>
                            Shop Now
                        </Link>
                    </div>
                </div>
                
            </div>


            <div className="relative">
                <img className="main-img" src='/images/shop.jpg' alt=""></img>

                <div className="over-img">
                    <h3>Check Out Our Story</h3>
                    <Link className='btn btn-lg btn-light'>About Us</Link>
                </div>
            </div>

        </div>
    );
}

export default Home;
