import dbConnect from 'src/lib/dbConnect'
import Character from 'src/model/character'
import Link from 'next/link'

const Waifu = ({ characters }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '90%',
        margin: 'auto',
        padding: '2rem 0',
      }}
    >
      {characters.map((character) => (
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
              <div>
                <Link href={`/[id]/edit`} as={`/${character._id}/edit`}>
                  <a className="btn edit">Edit</a>
                </Link>
                <Link href="/[id]" as={`/${character._id}`}>
                  <a className="btn view">View</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Waifu

export async function getServerSideProps() {
  await dbConnect()

  // find all the data in our database
  const result = await Character.find({}).select('-__v -createdAt -updatedAt')
  const charas = result.map((doc) => {
    const chara = doc.toObject()
    chara._id = chara._id.toString()

    return chara
  })

  return {
    props: {
      characters: charas,
    },
  }
}
