/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import News from "./news"

const NewsContainer = () => {
  return (
    <Container className="my-2">
      <h2>
        <i className="fas fa-circle mr-1" sx={{ color: "muted" }}></i>Noticias
      </h2>
      <Row>
        <Col md="4" sm="6" className="mb-1 mb-sm-0">
          <News title="Lorem Ipsom Dolor" />
        </Col>
        <Col md="4" sm="6" className="mb-1 mb-sm-0">
          <News title="Lorem Ipsom Dolor" />
        </Col>
        <Col md="4" sm="6" className="mb-1 mb-sm-0">
          <News title="Lorem Ipsom Dolor" />
        </Col>
      </Row>
    </Container>
  )
}

export default NewsContainer
