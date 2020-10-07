import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Media,
  ListGroupItem,
  Card,
  ListGroup,
} from "react-bootstrap";

export default class Articles extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md-9>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://im0-tub-ru.yandex.net/i?id=321d06960e59b289376a192b67dd25db&n=13"
              />
              <Media.Body>
                <h5>JavaScript</h5>
                <p>
                  JavaScript — мультипарадигменный язык программирования.
                  Поддерживает объектно-ориентированный, императивный и
                  функциональный стили.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://im0-tub-ru.yandex.net/i?id=ef4429d2fe384ea4e093b8e34330793d&ref=rim&n=33&w=150&h=150"
              />
              <Media.Body>
                <h5>React</h5>
                <p>
                  React components implement a render() method that takes input
                  data and returns what to display. This example uses an
                  XML-like syntax called JSX. Input data that is passed into the
                  component can be accessed by render() via this.props. JSX is
                  optional and not required to use React. Try the Babel REPL to
                  see the raw JavaScript code produced by the JSX compilation
                  step.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://im0-tub-ru.yandex.net/i?id=ab60a8533eb600a73d022944977c6b89&n=13&exp=1"
              />
              <Media.Body>
                <h5>SASS</h5>
                <p>
                  Модуль, включенный в Haml. Sass - это метаязык на основе CSS,
                  предназначенный для увеличения уровня абстракции CSS-кода и
                  упрощения файлов каскадных таблиц стилей.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md-3>
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroupItem>JS</ListGroupItem>
                <ListGroupItem>React</ListGroupItem>
                <ListGroupItem>SASS</ListGroupItem>
              </ListGroup>
            </Card>
            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Sidw widget</Card.Title>
                <Card.Text>
                  Модуль, включенный в Haml. Sass - это метаязык на основе CSS,
                  предназначенный для увеличения уровня абстракции CSS-кода и
                  упрощения файлов каскадных таблиц стилей.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
