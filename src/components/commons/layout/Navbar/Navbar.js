import React from 'react'

import { Container, Row, Col } from 'emotion-flex'
import { StyledNavbar } from './styled.js'

export default function Navbar() {
  return (
    <StyledNavbar>
      <Container>
        <Row>
          <Col xs={2} sm={2} md={2} lg={2} xl={2}>
            <div className="bag-wrapper">
              <img src="/assets/icons/poke-catch.png" alt="Homepage" />
            </div>
          </Col>
          <Col xs={8} sm={9} md={9} lg={9} xl={9}>
            <div className="logo-wrapper">
              <img src="/assets/icons/pokemon-icon.png" alt="Homepage" />
            </div>
          </Col>
        </Row>
      </Container>
    </StyledNavbar>
  )
}
