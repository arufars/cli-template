import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dbConnect from 'src/lib/dbConnect'
import Character from 'src/model/character'


const CharacterPage = ({ character }) => {
  const router = useRouter()
  const [message, setMessage] = useState('')

  const deleteCharacter = async () => {
    const characterId = router.query.id
    try {
      await fetch(`/api/characters/${characterId}`, {
        method: 'DELETE',
      })
      router.push('/')
      setMessage('Character deleted')
    } catch (error) {
      console.log(error)
      setMessage('Failed to delete characters')
    }
  }

  return (
    <div key={character._id}>
      <div className="card">
        <img
          src={character.image}
          width={500}
          height={500}
          style={{ objectFit: 'cover' }}
        />
        <h5 className="pet-name">{character.name}</h5>
        <div className="btn-container">
          <Link href={`/${character._id}/edit`}>
            <button className="btn edit">Edit</button>
          </Link>
          <button className="btn delete" onClick={deleteCharacter}>
            Delete
          </button>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}

export default CharacterPage

export async function getServerSideProps({ params }) {
  await dbConnect()

  const character = await Character.findById(params.id).lean()
  character._id = character._id.toString()

  return { props: { character } }
}
