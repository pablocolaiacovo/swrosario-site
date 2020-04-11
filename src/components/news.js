/** @jsx jsx */

import React from "react"
import { jsx } from "theme-ui"
import { useStaticQuery } from "gatsby"

import Card from "react-bootstrap/Card"
import { Button } from "theme-ui"

import NewsImage from "../static/images/roman-kraft-_Zua2hyvTBk-unsplash.jpg"

const News = ({ title }) => {
  return (
    <Card>
      <Card.Img variant="top" src={NewsImage} />
      <Card.Body className="text-center">
        <Card.Title className="text-left">{title}</Card.Title>
        <Button variant="primary">Ver Mas</Button>
      </Card.Body>
    </Card>
  )
}

export default News
