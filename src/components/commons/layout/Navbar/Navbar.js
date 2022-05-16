import React from 'react'
import { Container, Row, Col } from 'emotion-flex'
import { StyledNavbar } from './styled.js'

export default function Navbar() {
  return (
    <StyledNavbar>
      <Container>
        <Row>
          <Col xs={2} sm={2} md={2} lg={2} xl={2}>
            <div className="logo-wrapper">
              Logo
            </div>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <div className="bag-wrapper">
              Bag
            </div>
          </Col>
        </Row>
      </Container>
    </StyledNavbar>
  )
}
