/** @jsx jsx */

import React from "react"
import { jsx } from "theme-ui"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Organizer from "./organizer"

const OrganizersContainer = () => {
  return (
    <Container className="my-2">
      <hr sx={{ color: "slate" }} />
      <h2 className="text-right">
        Quienes Somos
        <i className="fas fa-circle ml-1" sx={{ color: "muted" }}></i>
      </h2>
      <h3>¿Qué es Startup Weekend?</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus ex
        non scelerisque dapibus. In vestibulum ullamcorper hendrerit. Phasellus
        ante mauris, venenatis eget risus ac, aliquet varius arcu. Curabitur
        metus lorem, ultricies at porttitor vitae, tempus eu est. In id magna at
        nibh interdum dictum. Phasellus molestie purus lacus, id facilisis nibh
        luctus quis. Sed eu laoreet orci. Ut non enim orci.
      </p>
      <h3 className="w-100">El Equipo de Startup Weekend Rosario</h3>
      <Row>
        <Col md="3" sm="6">
          <Organizer />
        </Col>
        <Col md="3" sm="6">
          <Organizer />
        </Col>
        <Col md="3" sm="6">
          <Organizer />
        </Col>
        <Col md="3" sm="6">
          <Organizer />
        </Col>
        <Col md="3" sm="6">
          <Organizer />
        </Col>
        <Col md="3" sm="6">
          <Organizer />
        </Col>
        <Col md="3" sm="6">
          <Organizer />
        </Col>
        <Col md="3" sm="6">
          <Organizer />
        </Col>
      </Row>
    </Container>
  )
}

export default OrganizersContainer
