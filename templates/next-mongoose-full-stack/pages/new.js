import Form from "src/components/From"


const newCharacter = () => {
  const charaForm = {
    name: '',
    description: '',
    image: '',
    school: '',
    anime: false,
  }

  return <Form formId="new-chara-form" charaForm={charaForm} />
}

export default newCharacter
