import { GetServerSideProps } from 'next'
import { useState } from 'react'
import api from '../../services/api'
import {Ul,Label} from	'../../styles/pages/id'

interface Kits{
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  isDeleted: boolean;

}

interface KitsProps{
  kits: Kits[]
}

 export default function Kits({kits: kitProps = []}:KitsProps) {
  const [kits, setkits] = useState<Kits[]>(kitProps)
  const [name, setName] = useState('')
  async function handleUpdate(id: number){
    await api.put(`/kits/${id}`,{name})
    setkits(oldKits => oldKits.filter(kit => kit.id !== id))
  } 
  return (
    <section>
      <title>kits</title>
      <Label>Informação do kit</Label>
      <Ul>
      {kits.map(kit => (
        <li key={kit.id}>
          <span>Id: {kit.id}</span>
         
          <span>Name: {kit.name}</span>
          <form>
            <label>Deseja alterar o nome do kit?</label>
            <input type="text" placeholder="digite aqui" value={name} onChange={e => setName(e.target.value)}/>
            <button type="submit" onClick={() => handleUpdate(kit.id)} >trocar</button>
          </form>
          
          <span>Data Criação: {kit.created_at}</span>
          
          <span>Data de Update: {kit.updated_at}</span>
          
        </li>
      ))}
      <button></button>
    </Ul>

    </section>
    )
}

export const getServerSideProps: GetServerSideProps = async({params}) => {
  const {id} = params
  // Get external data from the file system, API, DB, etc.
  // const res = await axios.get('http://localhost:4000/kits')
  // const kits = await res.data

  const response = await fetch(`http://localhost:4000/kits/${id}`)
  const data = await response.json()
  

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      kits: data
    }
  }
}



