import React from 'react'
import { ICDiscord, ICFacebook, ICGithub, ICInstagram, ICTelegram, LogoSaut } from '../../../assets'
import './footer.scss'   
const Icon = ({img,link}) => {
    return(
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" link={link} />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoSaut} alt="Logo"/>
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTelegram} />
                    <Icon img={ICGithub} />
                    <Icon img={ICDiscord} />
                </div>
            </div>
            <div className="copyright">
                <p>Built with ❤️ MongoDB, ExpressJS, ReactJS, NodeJS</p>
            </div>
        </div>
    )
}

export default Footer
