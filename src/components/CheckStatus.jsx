import React, {useRef} from "react";

export default () => {

    const cough = useRef(null)
    const cold = useRef(null)
    const weak = useRef(null)
    const body = useRef(null)
    const breath = useRef(null)
    const travel = useRef(null)
    const person = useRef(null)
    const locationHistory = useRef(null)
    const head = useRef(null)
    const throat = useRef(null)
    const shit = useRef(null)
    const fever = useRef(null)
    
    const handleSubmit = () => {
        let result = Number(cough.current.value) + Number(cold.current.value) + Number(weak.current.value)
                        + Number(body.current.value) + Number(breath.current.value) + Number(travel.current.value)
                        + Number(person.current.value) + Number(locationHistory.current.value) + Number(head.current.value)
                        + Number(throat.current.value) + Number(shit.current.value) + Number(fever.current.value)

        console.log(result)
        if (result < 3) {
            alert("Mafo, maybe na stress just dey do you. Rest but make you still dey put eye for your body oh.")
        } else if (result < 6) {
            alert("Mafo, just dey drink water wella and clean up. Still dey put eye for your body oh.")
        } else {
            alert("Mafo my padi, make you go see doctor, so e go fit put eye and mouth for your matter.")
        }
    }

    return (
        <div className="container">
            <h4>Oya ansa dem question asap</h4>
            <ol className="row mb-5">
                <div className="col-md-5">
                    <li>
                        You get cough?
                        <select ref={cough}>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </li>

                    <li>
                        Cold dey catch you?
                        <select ref={cold}>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </li>
                    <li>
                        You tire well well
                        <select ref={weak}>
                            <option value="0">No</option>
                            <option value="2">Yes</option>
                        </select>
                    </li>
                    <li>
                        Throat dey pain you? 
                        <select ref={throat}>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </li>
                    <li>
                        Body dey pain you?
                        <select ref={body}>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </li>

                    <li>
                        Headache dey worry you?
                        <select ref={head}>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </li>
                </div>
                <div className="col-md-7">
                    <li>
                    You don dey shit-shit abi you dey purge?
                        <select ref={shit}>
                           <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </li>
                    

                    <li>
                        You dey get fever?
                        <select ref={fever}>
                           <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </li>
                    <li>
                        E dey hard you to breath wella?
                        <select ref={breath}>
                           <option value="0">No</option>
                            <option value="2">Yes</option>
                        </select>
                    </li>
                    <li>
                        E never pass 14 days wey you travel last?
                        <select ref={travel}>
                           <option value="0">No</option>
                            <option value="3">Yes</option>
                        </select>
                    </li>
                    <li>
                        You don dey any location wey dem talk say person get COVID-19 before?
                        <select ref={locationHistory}>
                           <option value="0">No</option>
                            <option value="3">Yes</option>
                        </select>
                    </li>
                    <li>
                        You don dey with person wey get COVID19 abi you dey help person wey get am?
                        <select ref={person}>
                            <option value="0">No</option>
                            <option value="3">Yes</option>
                        </select>
                    </li>
                </div>
            </ol>
            <div className="row">
                <div className="col-6">
                    <a href="/" className="btn btn-dark">Home</a>
                </div>
                <div className="col-6">
                    <button onClick={handleSubmit} className="btn btn-dark">Show result</button>
                </div>
            </div>
        </div>
    )
}