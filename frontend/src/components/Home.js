import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return(
        <>
        <section className="home  text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="d-none d-lg-inline-block">Sarfraz<span>Coding</span>School</h1>
                        <p className="d-none d-lg-inline-block">
                        Sarfraz Coding School is an innovative and dynamic learning platform designed to equip students with the most in-demand coding skills. <br/> 
                        Our mission is to empower aspiring developers, from beginners to advanced learners, with practical and hands-on training in web development,<br/>
                        mobile app creation, data science, and more. We offer a supportive, interactive environment led by industry-expert instructors, ensuring that <br/> 
                        every student receives personalized guidance and feedback.
                        </p><br/>
                        <Link className="btn btn-lg" to="/courses"><span>All Courses</span></Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}