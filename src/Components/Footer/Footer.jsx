import React from "react"

// component

//styling
import './Footer.css'


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="part-1">
                    <div className="left">
                        <a href="#" className="item">Login</a>
                        <a href="#" className="item">Register</a>
                        <a href="/gamelist" className="item">Game List</a>
                    </div>
                    <div className="right">
                        <a href="#"><img src="asset/icon/facebook.svg" alt="facebook" /></a>
                        <a href="#"><img src="asset/icon/twitter.svg" alt="twitter" /></a>
                        <a href="#"><img src="asset/icon/youtube.svg" alt="youtube" /></a>
                        <a href="#"><img src="asset/icon/twitch.svg" alt="twitch" /></a>
                    </div>
                </div>
                <hr className="hr" />
                <div className="part-2">
                    <div className="left">
                        <p>&copy; 2021 Game Center, Inc. All Rights Reserved</p>
                    </div>
                    <div className="right">
                        <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Services</a> | <a href="#">Code of Conduct</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer