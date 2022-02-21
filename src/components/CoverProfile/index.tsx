import React from 'react'
import { Container } from './styles'
import CoverJpg from '../../assets/images/cover-profile.jpeg'
import { Button } from '../Button'

interface ICoverProfileProps {
  name?: string
}

export function CoverProfile({ name }: ICoverProfileProps) {
  console.log(name)

  return (
    <Container file={CoverJpg}>
      {name ? (
        <h1>{name}</h1>
      ) : (
        <div>
          <Button title={'Editar capa'} handleAction={() => {}} />
        </div>
      )}
    </Container>
  )
}
