import React from "react";

let Title=()=>{
    return(
        <section className="page-title-two">
            <div className="title-box centred bg-color-2">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{backgroundImage:"url(public/assets/images/shape/shape-70.png)"}}></div>
                    <div className="pattern-2" style={{backgroundImage:"url(public/assets/images/shape/shape-71.png)"}}></div>
                </div>
                <div className="auto-container">
                    <div className="title">
                        <h1>Book Appointment</h1>
                    </div>
                </div>
            </div>
            <div className="lower-content">
                <div className="auto-container">
                    <ul className="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Book Appointment</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Title;