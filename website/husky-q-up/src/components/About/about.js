import React from 'react';
import './about.css';
import hanrat from './hanrat.png';
import { Container } from 'react-bootstrap';

const About = () => {
    return(<main>
        <Container>
            <h1 id="custom-h1">About Us!</h1>
            <section>
                <h2>Our Mission</h2>
                <p>We strive to blah blah blah</p>
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