import "./styles/about.css";
import { useState } from "react";


function About(){
    const [visibleEmail, setVisibleEmail] = useState(false);

    function showEmail(){
        setVisibleEmail(true);
    }
    
    return(
        <div className="about page">
            <img className="top-img" src="/images/engine3.jpg" alt="" />
            <div className="box">
                <h2>Who We Are</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cupiditate rem ut aliquid architecto aliquam, earum quo temporibus libero accusamus? Aperiam illum unde culpa blanditiis amet, ad adipisci ut modi ex. Quidem officiis aliquid amet sunt maiores, maxime commodi ducimus blanditiis ab excepturi error reiciendis architecto deserunt praesentium! Saepe, fuga vel deleniti sequi asperiores vitae neque nihil ad voluptatem animi!</p>
                <h2>What We Do</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quasi adipisci hic voluptas in minima non veniam ea earum? Maxime inventore fugit nihil, provident voluptates commodi placeat repudiandae, quia cumque voluptate tempora minus, nostrum vel odio consectetur fugiat! Hic quas nobis quam, obcaecati quidem nam nihil quo perspiciatis voluptas? Explicabo consectetur quo architecto sint veniam, a beatae eveniet dolorem dolores magnam autem distinctio ipsam sit placeat sunt! Labore nobis cumque possimus, ratione cum eligendi explicabo quas distinctio maxime ipsa. Amet, soluta sequi reiciendis placeat pariatur facere officia vitae dignissimos id cum quia at dolor possimus suscipit debitis incidunt eaque quod.</p>
            </div>
            <div className="bot-pics">
                <img src="/images/bike.jpg" alt="" />
                <img src="/images/bwworker.jpg" alt="" />
                <img src="/images/dirtyhands.webp" alt="" />
            </div>

        </div>
    );
}

export default About;

// {visibleEmail ? <h5>damian.savage@sdgku.edu</h5> : <label>Click the button to see my email</label>}
// <br/>
// {
//     !visibleEmail
//         ? <button onClick={showEmail} className="btn btn-outline-primary">Show Email</button>
//         : null
// }