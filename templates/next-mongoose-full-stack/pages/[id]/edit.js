import { useRouter } from 'next/router'
import useSWR from 'swr'
import Form from 'src/components/From'

const fetcher = url => fetch(url).then(res => res.json()).then(json => json.data);

const EditCharacter = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: waifu, error } = useSWR(
    id ? `/api/characters/${id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load</div>
  if (!waifu) return <div>Loading...</div>

  const charaForm = {
    name: waifu.name,
    description: waifu.description,
    image: waifu.image,
    school: waifu.school,
    anime: waifu.anime,
  }

  return (
    <Form formId="edit-chara-form" charaForm={charaForm} forNewChara={false} />
  )
}

export default EditCharacter