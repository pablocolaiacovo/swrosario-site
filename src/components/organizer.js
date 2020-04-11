import React from "react"

import Image from "react-bootstrap/Image"
import { Avatar } from "theme-ui"

import PersonImage from "../static/images/dan-ROJFuWCsfmA-unsplash.jpg"

const Organizer = () => {
  return (
    <>
      <Avatar src={PersonImage} />
      <p className="text-center">Organizer Name</p>
    </>
  )
}

export default Organizer
