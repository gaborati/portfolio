import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "/Users/gaborattila/Desktop/portfolio/personal-portfolio2-frontend/src/assets/img/php.svg"
import meter2 from "/Users/gaborattila/Desktop/portfolio/personal-portfolio2-frontend/src/assets/img/java.svg"
import meter3 from "/Users/gaborattila/Desktop/portfolio/personal-portfolio2-frontend/src/assets/img/javascript.svg"
import meter4 from "/Users/gaborattila/Desktop/portfolio/personal-portfolio2-frontend/src/assets/img/mongoDB.svg"
import meter5 from "/Users/gaborattila/Desktop/portfolio/personal-portfolio2-frontend/src/assets/img/mysql.svg"
import meter6 from "/Users/gaborattila/Desktop/portfolio/personal-portfolio2-frontend/src/assets/img/react.svg"
import meter7 from "/Users/gaborattila/Desktop/portfolio/personal-portfolio2-frontend/src/assets/img/linux.svg"
import colorSharp from "/Users/gaborattila/Desktop/portfolio/personal-portfolio2-frontend/src/assets/img/color-sharp.png"
export const Skill = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem
                                Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true}
                                      className="owl-carousel owl-theme skill-slider">

                                <div className="item">
                                    <img src={meter1} alt="Image"/>

                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>

                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"/>

                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image"/>

                                </div>
                                <div className="item">
                                    <img src={meter5} alt="Image"/>

                                </div>
                                <div className="item">
                                    <img src={meter6} alt="Image"/>

                                </div>
                                <div className="item">
                                    <img src={meter7} alt="Image"/>

                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image"/>
        </section>
    )
}