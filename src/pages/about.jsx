import "./styles/about.css";
import { useState } from "react";


function About(){

    const [visibleEmail, setVisibleEmail] = useState(false);

    function showEmail(){
        setVisibleEmail(true);
    }

    return(
        <div clasName="about">
            <h3>About Us</h3>
            <div className="box">
                <h2>Damian Savage</h2>
                {visibleEmail ? <h5>damian.savage@sdgku.edu</h5> : <label>Click the button to see my email</label>}
                <br></br>
                {
                    !visibleEmail
                        ? <button onClick={showEmail} className=""btn btn-outline-primary>Show Email</button>
                        : null
                }
            </div>
        </div>
    );
}


export default About;