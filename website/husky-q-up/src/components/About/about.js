import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const About = () => {
    return(<main>
        <h1 id="custom-h1">About Us!</h1>
        <section>
            <h2>Our Mission</h2>
            <p>We strive to blah blah blah</p>
        </section>
        <section>
            <h2>Meet the Team</h2>
            <Container>
                <Row>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                </Row>
            </Container>
        </section>
        
    </main>)
}

export default About