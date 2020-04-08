import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";

export default () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <a href="/" className="navbar-brand"><FontAwesomeIcon icon={faChessKnight} /> Mafo</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mynav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/checkstatus">Check your status oh!</a>
                    </li>
                    <li className="nav-item">
                       <a href="/prevention">Japaa from covid-19</a> 
                    </li>
                    <li className="nav-item">
                        <a target="_blank" href="https://covid19.ncdc.gov.ng/statecontacts.php">Follow people wey sabi the matter talk</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}