import Form from "../components/From";



const newChara = () => {
  const charaForm = {
    name: "",
    description: "",
    image: "",
    school: "",
  };

  return <Form formId="new-chara-form" charaForm={charaForm} />;
};

export default newChara;
