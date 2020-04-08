import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeadSideMask, faStethoscope, faViruses } from "@fortawesome/free-solid-svg-icons";



export default ({nigeria}) => {

    return (
        <React.Fragment>
            <h4>Naija mata</h4>
            <div className="row py-3 pl-4 mb-md-0 mb-3">
                <div className="col-md-4 mb-md-0 mb-2">
                    <div className="boards p-2 pl-3 row m-auto">
                        <div className="col-3 icon m-auto">
                            <FontAwesomeIcon icon={faHeadSideMask}/>
                        </div>
                        <div className="col-9 pt-2 m-auto">
                            <h4>{nigeria.TotalConfirmed}
                                <span 
                                    className={nigeria.NewConfirmed > 0 ? "text-danger" : "text-success"}
                                >
                                    {nigeria.NewConfirmed > 0 ? "+" : nigeria.NewConfirmed < 0 ? "-" : ""} {nigeria.NewConfirmed}
                                </span>
                            </h4>
                            <span>People wey dey hospital</span>
                        </div>
                    </div>   
                </div>
                <div className="col-md-4 mb-md-0 mb-3">
                    <div className="boards p-2 pl-3 row m-auto">
                        <div id="icon2" className="col-3 icon m-auto">
                            <FontAwesomeIcon icon={faStethoscope}/>
                        </div>
                        <div className="col-9 pt-2 m-auto">
                        <h4>{nigeria.TotalRecovered}
                            <span 
                                className={nigeria.NewRecovered > 0 ? "text-success" : "text-danger"}
                            >
                                {nigeria.NewRecovered > 0 ? "+" : nigeria.NewRecovered < 0 ? "-" : ""} {nigeria.NewRecovered}
                            </span>
                        </h4>
                            <span>People wey don well</span>
                        </div>
                    </div>   
                </div>
                <div className="col-md-4">
                    <div className="boards p-2 pl-3 row m-auto">
                        <div id="icon3" className="col-3 icon m-auto">
                            <FontAwesomeIcon icon={faViruses}/>
                        </div>
                        <div className="col-9 pt-2 m-auto">
                        <h4>{nigeria.TotalDeaths}
                            <span 
                                className={nigeria.NewDeaths > 0 ? "text-danger" : "text-success"}
                            >
                                {nigeria.NewDeaths > 0 ? "+" : nigeria.NewDeaths < 0 ? "-" : ""} {nigeria.NewDeaths}
                            </span>
                        </h4>
                            <span>People wey don die</span>
                        </div>
                    </div>   
                </div>
            </div>
        </React.Fragment>
    )
}