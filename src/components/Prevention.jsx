import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseUser, faHeadSideMask, faUsers, faHandsWash } from "@fortawesome/free-solid-svg-icons";

export default () => {
    return (
        <div id="prevention">
            <h4>How you go take japaa from covid-19</h4>
            <div className="row mt-4">
            <div className="col-md-6 row">
                <div className="col-4">
                    <FontAwesomeIcon icon={faHandsWash} className="text-success"/>
                </div>
                <p className="col-6">Make you dey wash your hand for tap with soap on a steady oh. 
                    Use sanitizer wey alcohol dey inside if water no dey</p>
            </div>
            <div className="col-md-6 row mt-4 mt-md-0">
                <div className="col-4 d-md-block d-none">
                    <FontAwesomeIcon icon={faUsers}  className="text-info"/>
                </div>
                <p className="col-6">Time to dey gum body don pass oh. 
                No dey enter area wey people too pack like sardine. Like market and church</p>
                <div className="col-4 d-md-none d-block">
                    <FontAwesomeIcon icon={faUsers}  className="text-info"/>
                </div>
            </div>
            <div className="col-md-6 row mt-5">
            <div className="col-4 d-md-none d-block">
                    <FontAwesomeIcon icon={faHeadSideMask}  className="text-secondary"/>
                </div>
                <p className="col-6">Make all man dey protect himself oh. Cover nose and mouth.
                No too near person wey dey sick careless.</p>
                <div className="col-4 d-md-block d-none">
                    <FontAwesomeIcon icon={faHeadSideMask}  className="text-secondary"/>
                </div>
            </div>
            <div className="col-md-6 row mt-5">
                <p className="col-6">E go better if everybody dey house until Government don give this covid-19 hard marking finish.</p>
                <div className="col-4">
                    <FontAwesomeIcon icon={faHouseUser}  className="text-primary"/>
                </div>
            </div>
           
            </div>
            <a href="/" className="btn btn-dark mt-5">Home</a>
        </div>
    )
}