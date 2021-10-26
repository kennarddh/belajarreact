import React from "react"

// component
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

//styling
import './Home.css'


const Home = () => {
    return (
        <>
            <Navbar />
            <section className="home-header">
                <img src="asset/image/background-landing-page-1.jpg" alt="Background" />
                <div className="body">
                    <img src="asset/image/joystick.png" alt="Joystick" className="joystick" />
                    <div className="text">
                        <h1>Play Together with Your Friends</h1>
                        <p>Multiplayer games never be the same</p>
                    </div>
                </div>
            </section>
            <section className="play-now-home">
                <div className="image-wrap">
                    <div className="image">
                        <img src="asset/image/video-image.jpg" alt="video" className="video" />
                        <img src="asset/image/button-play.png" alt="play" className="play" />
                    </div>
                </div>
                <div className="body">
                    <h3>Play Now</h3>
                    <pre>
This is true social gaming. Play games together on one screen.
Use your Android and iPhone devices as the controllers.
No installs required, you can play right now!
                    </pre>
                </div>
            </section>
            <div className="background-2" style={{
                background: 'url(asset/image/background-landing-page-3.jpg)'
            }}>
                <section className="special-offers">
                    <h3>Special Offers</h3>
                    <div className="body">
                        <div className="card">
                            <img src="asset/image/background-card-1.png" className="back" alt="card" />
                            <div className="body">
                                <img src="asset/image/icosahedron.png" className="image" alt="icosahedron" />
                                <p className="text">Get new black diamond when invite new users to play!</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="asset/image/background-card-1.png" className="back" alt="card" />
                            <div className="body">
                                <img src="asset/image/card-with-rules.png" className="image" alt="card-with-rules" />
                                <p className="text">Increase your chance to get mana faster in this month</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="enjoy">
                    <img src="asset/image/decoration-1.png" alt="decoration" className="decoration" />
                    <div className="body">
                        <h3>Enjoy Together</h3>
                        <img src="asset/image/vector-1.png" className="vector" alt="vector" />
                        <form action="" method="get" className="subscribe">
                            <input type="email" className="email" name="email" placeholder="Your email address" />
                            <button type="submit" className="button">Subscribe</button>
                        </form>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Home