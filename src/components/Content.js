import React from "react";

let Content=()=>{
    return(
        <section className="confirm-section centred bg-color-3">
            <div className="pattern">
                <div className="pattern-1" style={{backgroundImage:"url(assets/images/shape/shape-85.png)"}}></div>
                <div className="pattern-2" style={{backgroundImage:"url(assets/images/shape/shape-86.png)"}}></div>
            </div>
            <div className="auto-container">
                <div className="inner-box">
                    <div className="content-box">
                        <div className="icon-box">
                            <i className="icon-Check-mark-2"></i>
                        </div>
                        <h3>Thanks for your booking!</h3>
                        <p>You'll receive an email confirmation shortly at</p>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Content;