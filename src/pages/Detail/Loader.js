import React from 'react'
import { StyledLoader } from './styled'

export default function Loader() {
  const getLoaderDetail = () => {
    let content = [];

    for (let i = 0; i < 60; i++) {
      content.push(<div className="item-detail" key={i} />)
    }

    return content;
  }

  return (
    <StyledLoader>
      <div className="main-img"/>
      {getLoaderDetail()}
    </StyledLoader>
  )
}
