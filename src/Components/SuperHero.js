import { Card, Container, Row, Col, } from "react-bootstrap";
import antmanImage from "../Assets/images/superhero/antman.jpg";
import avengerImage from "../Assets/images/superhero/avenger.jpg";
import batmanImage from "../Assets/images/superhero/batman.jpg";
import robinhoodImage from "../Assets/images/superhero/robinhood.jpg";
import spidermanImage from "../Assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../Assets/images/superhero/superman.jpg";

const   SuperHero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white ">SUPER HERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Card.Img src={antmanImage} alt="Antman Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Card title</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Card.Img src={avengerImage} alt="Avenger Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Card title</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Card.Img src={batmanImage} alt="Batman Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Card title</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Card.Img src={robinhoodImage} alt="Robinhood Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Card title</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Card.Img src={spidermanImage} alt="Spiderman Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Card title</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Card.Img src={supermanImage} alt="Superman Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Card title</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SuperHero