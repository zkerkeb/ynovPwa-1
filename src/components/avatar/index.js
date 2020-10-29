import React from 'react'
import styled from 'styled-components'

const Avatar = props => {
  return <AvatarHarryPotter width={100} src={props.url}></AvatarHarryPotter>
}

const AvatarHarryPotter = styled.img`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.width}px`};
  border-radius: ${props => `${props.width / 2}px`};
`

export default Avatar
