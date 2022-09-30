import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import dbConnect from "@src/lib/dbConnect"
import Waifu from "@src/model/Waifu"

// allows you to view waifu card info and edit it and delete it
const WaifuPage = ({ waifu }) => {
  const router = useRouter()
  const [message, setMessage] = useState("")

  const deleteWaifu = async () => {
    const waifuId = router.query.id
    try {
      await fetch(`/api/chara/${waifuId}`, {
        method: "DELETE",
      })
      router.push("/")
    } catch (error) {
      setMessage("Failed to delete the waifu.")
    }
  }

  return (
    <div key={waifu._id}>
      <div className='card'>
        <img
          src={waifu.image}
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
        />
        <h5 className='pet-name'>{waifu.name}</h5>
        <div className='btn-container'>
          <Link href={`/${waifu._id}/edit`}>
            <button className='btn edit'>Edit</button>
          </Link>
          <button className='btn delete' onClick={deleteWaifu}>
            Delete
          </button>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}

export default WaifuPage

export async function getServerSideProps({ params }) {
  await dbConnect()

  // find the waifu by its id
  const result = await Waifu.findById(params.id).lean()
  result._id = result._id.toString()

  return { props: { waifu: result } }
}
