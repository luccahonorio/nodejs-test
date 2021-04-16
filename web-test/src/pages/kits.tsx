import { GetServerSideProps } from 'next'
import { FormEvent, useState } from 'react'
import {FiPlus, FiTrash2} from 'react-icons/fi'
import api from '../services/api'
import {Link, Ul,  Span} from	'../styles/pages/Kits'

interface Kits{
  id: number;
  name: string;
}

interface KitsProps{
  kits: Kits[]
}

export default function Kits({kits: kitProps = []}:KitsProps) {
  const [kits, setkits] = useState<Kits[]>(kitProps)
  async function handleDelete(id: number){
    await api.delete(`/kits/${id}`)
    setkits(oldKits => oldKits.filter(kit => kit.id !== id))
  } 
  return (
    <section>
      <title>Kits</title>
      <Span> Esses são todos os kits cadastrados</Span>
      <Ul>
      {kits.map(kit => (

          <li key={kit.id}>
            <a href ={`/kits/${kit.id}`}>
              {kit.name}
            </a>
            <button onClick={() => handleDelete(kit.id)}>
              <FiTrash2 size={32} color="#FFFFFF" />
            </button>
            
          </li>
      ))}
      
    </Ul>
    
    <Link href= {`http://localhost:3000/kits/new`}>
      <FiPlus size={32} color="#4c8cdc" />
    </Link>
    </section>
    )
}

export const getServerSideProps: GetServerSideProps = async() => {
  // Get external data from the file system, API, DB, etc.
  // const res = await axios.get('http://localhost:4000/kits')
  // const kits = await res.data

  const response = await api.get('http://localhost:4000/kits')
  const data = await response.data

  const kits = data.filter(kit => kit.isDeleted !== true)
  
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      kits: kits
    }
  }
}

