import React from 'react'

import Avatar from '../avatar'
import Name from '../name'

import styled from 'styled-components'

const CharacterRow = props => {
  return (
    <CharacterContainer>
      <Avatar url={props.url}></Avatar>
      <Name name={props.name}></Name>
    </CharacterContainer>
  )
}

const CharacterContainer = styled.div`
  background-color: ${props => props.theme.primary};
`

export default CharacterRow
