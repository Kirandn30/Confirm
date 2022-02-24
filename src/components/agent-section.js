import React from "react";

let Agent =()=>{
    return(
         <section class="agent-section bg-color-3">
            <div class="auto-container">
                <div class="inner-container bg-color-2">
                    <div class="row clearfix">
                        <div class="col-lg-6 col-md-12 col-sm-12 left-column">
                            <div class="content_block_3">
                                <div class="content-box">
                                    <h3>Emergency call</h3>
                                    <div class="support-box">
                                        <div class="icon-box"><i class="fas fa-phone"></i></div>
                                        <span>Telephone</span>
                                        <h3><a href="tel:11165458856">+(111) 65_458_856</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 right-column">
                            <div class="content_block_4">
                                <div class="content-box">
                                    <h3>Sign up for Email</h3>
                                    <form action="index.html" method="post" class="subscribe-form">
                                        <div class="form-group">
                                            <input type="email" name="email" placeholder="Your Email" required=""/>
                                            <button type="submit" class="theme-btn-one">Submit now<i class="icon-Arrow-Right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agent;