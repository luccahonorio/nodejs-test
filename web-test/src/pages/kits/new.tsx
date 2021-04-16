import api from '../../services/api'
import { FormEvent, useState } from 'react'

import {Container,Label} from	'../../styles/pages/New'
import { useRouter } from 'next/router'

export default function New() {
  const router = useRouter()
  const [name, setName] = useState('')

  async function handleCreate(event: FormEvent){
    event.preventDefault()
    await api.post('/kits', { name })
    router.push('/kits')
  }
  return (
    <Container>
      <Label>Coloque um nome para criar</Label>
      <form onSubmit={handleCreate}>
        <label>Name : </label>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
        
        <button type="submit">
          Confirmar
        </button>
      </form>
    </Container>
    )
}