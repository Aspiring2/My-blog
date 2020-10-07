import React, { Component } from "react";
import { Container, Tab, Nav, Col, Row } from "react-bootstrap";

export default class Projects extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Disign</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programminng</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libreries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey="first">
                  <img width='500px' src="https://img77.uenicdn.com/image/upload/v1542103419/category/shutterstock_365367170.jpg" />
                  <p>
                  The industry of web development and a type of design that deals with designing web user interfaces for websites or web applications.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img width='500px' src="https://www.pronline.ru/ri/7607/Miezhdunarodnyi-siervis-poiska-i-analitiki-vakansii-Adzuna-proviel-issliedovaniie-iazykov-proghrammirovaniia-vostriebovannykh-na-rynkie-truda-i-zarplat-proghrammistov-v-Rossii_1.jpg" />
                  <p>
                    A curated collection of all the best Figma templates for web
                    and desktop, landing pages and great web resources you can
                    use in your next desktop project.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img width='500px' src="https://sterhluki.ru/wp-content/uploads/2019/09/c40c4e7dd14cc7c0712b8496af6f093c.jpg" />
                  <p>
                    A curated collection of all the best Figma templates for web
                    and desktop, landing pages and great web resources you can
                    use in your next desktop project.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img width='500px' src="https://im0-tub-ru.yandex.net/i?id=4c86ab458f35f1e29619322545eecaeb&n=13" />
                  <p>
                    A curated collection of all the best Figma templates for web
                    and desktop, landing pages and great web resources you can
                    use in your next desktop project.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img width='500px' src="https://orenburzhie.ru/wp-content/uploads/2020/08/UQdo-NLJXRs.jpg" />
                  <p>
                    A curated collection of all the best Figma templates for web
                    and desktop, landing pages and great web resources you can
                    use in your next desktop project.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
