import React from "react"
import "@fortawesome/fontawesome-free/scss/fontawesome.scss"
import "@fortawesome/fontawesome-free/scss/brands.scss"

const Footer = ({}) => {
  return (
    <footer className="bg-dark py-3">
      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled mb-2 text-center text-md-left">
              <li className="mb-0">
                <a
                  href="https://drive.google.com/drive/folders/1j4Bv6K8VD0e8UTLtW6JITAN_fcfhDKpZ"
                  target="_blank"
                  class="text-white"
                >
                  Kit de prensa
                </a>
              </li>
              <li className="mb-0">
                <a
                  href="https://goo.gl/forms/FcaELBy7KDrITkap2"
                  target="_blank"
                  class="text-white"
                >
                  Newsletter
                </a>
              </li>
              <li className="mb-0">
                <a href="mailto:rosario@startupweekend.org" class="text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="nav justify-content-around justify-content-md-end text-white">
              <li className="nav-item social-icon m-1">
                <i class="fab fa-instagram fa-3x"></i>
              </li>
              <li className="nav-item social-icon m-1">
                <i class="fab fa-twitter fa-3x"></i>
              </li>
              <li className="nav-item social-icon m-1">
                <i class="fab fa-facebook-square fa-3x"></i>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
