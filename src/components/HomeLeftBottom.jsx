import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeadSideMask, faStethoscope, faViruses } from "@fortawesome/free-solid-svg-icons";

export default ({world}) => {
    
    return (
        <React.Fragment>
             <h4 id="marginTop">The full world mata</h4>
            <div className="row py-3 pl-4">
                <div className="col-md-4 mb-md-0 mb-3">
                    <div className="boards p-2 pl-3 row m-auto">
                        <div className="col-3 icon m-auto">
                            <FontAwesomeIcon icon={faHeadSideMask}/>
                        </div>
                        <div className="col-9 pt-2 m-auto">
                        <h4>{world.TotalConfirmed}
                                <span 
                                    className={world.NewConfirmed > 0 ? "text-danger" : "text-success"}
                                >
                                    {world.NewConfirmed > 0 ? "+" : world.NewConfirmed < 0 ? "-" : ""} {world.NewConfirmed}
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
                        <h4>{world.TotalRecovered}
                            <span 
                                className={world.NewRecovered > 0 ? "text-success" : "text-danger"}
                            >
                                {world.NewRecovered > 0 ? "+" : world.NewRecovered < 0 ? "-" : ""} {world.NewRecovered}
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
                        <h4>{world.TotalDeaths}
                            <span 
                                className={world.NewDeaths > 0 ? "text-danger" : "text-success"}
                            >
                                {world.NewDeaths > 0 ? "+" : world.NewDeaths < 0 ? "-" : ""} {world.NewDeaths}
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