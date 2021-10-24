import React from 'react';
import './about.css';
import hanrat from './hanrat.png';
import { Container } from 'react-bootstrap';

const About = () => {
    return(<main>
        <Container>
            <h1 id="custom-h1">About Us!</h1>
            <section>
                <h2>The Problem</h2>
                <p>As college students we want to make use of our time efficently. 
                    Currently, when on campus studnets have to get food at UW dining locations or pick up packages from the front desk
                    they dont know how long it will take to get their food or pick up their packages. There are times when students
                    are unable to eat because the lines are too long and have to attend class. There needs to be a way for studnets 
                    to know if they will be able to get their food or packages at a certain time. Husky Q Up strives to solve this.
                </p>
            </section>
            <section>
                <h2>Our Mission</h2>
                <p>Husky Q Up is the prefect solution to this perpetual issue on campus students face. We strive to provide real time
                    data to users so that they plan accordingly and make the most of their time. No longer will they go to a UW dining locaiton
                    or front desks only to see that the line is too long and are unable to get what they wanted. Husky Q Up is a simple, robust, 
                    secure, and accessible website that fixes studnet worries. 
                </p>
            </section>
            <section>
                <h2>Meet the Team</h2>
                <div id="card-container">
                    <section className="card">
                        <h2>Justin</h2>
                    </section>

                    <section className="card">
                        <img src={hanrat}></img>
                        <h2>Han</h2>
                        <p>front-end god</p>
                        
                    </section>

                    <section className="card">
                        <h2>Caesar</h2>
                        <p>back-end god</p>
                    </section>

                    <section className="card">
                        <h2>Bryce</h2>
                    </section>

                </div>
            </section>

        </Container>
        
    </main>)
}

export default About