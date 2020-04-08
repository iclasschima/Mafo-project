import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab)

export default () => {
    return (
        <nav className="navbar-dark bg-dark navbar" id="footer">
            <div className="navbar-text">
                <FontAwesomeIcon icon={faCopyright} />
                <span> 2020 All na for una, my people!</span> 
            </div>
            <ul className="nav">
                <li className="nav-item" id="firstChild">
                    <a href="#" className="nav-link">Follow @iclasschima </a>
                </li>
                <li className="nav-item">
                    <a target="_blank" href="https://web.facebook.com/iClassChima" className="nav-link"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                </li>
                <li className="nav-item">
                    <a target="_blank" href="https://twitter.com/__iClass" className="nav-link"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                </li>
                <li className="nav-item">
                    <a target="_blank" href="https://www.linkedin.com/in/iclasschima" className="nav-link"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                </li>
            </ul>
           
        </nav>
    ) 
}