import { useState } from 'react';
import { useRouter } from 'next/router';
import { mutate } from 'swr';

const Form = ({ formId, charaForm, forNewChara = true }) => {
  const router = useRouter();
  const contentType = 'application/json';
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    name: charaForm.name,
    description: charaForm.description,
    image: charaForm.image,
    school: charaForm.school,
    anime: charaForm.anime,
  });

  // The put method is used to update a resource database mongoDB
  const putData = async form => {
    const { id } = router.query;
    try {
      const res = await fetch(`/api/characters/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      });
      // If the response is not 200, it will throw an error
      if (!res.ok) {
        // throw new Error('An error occurred while updating the data');
        throw new Error(res.status);
      }

      const { data } = await res.json();

      mutate(`/api/characters/${id}`, data, false);
      setMessage('Success! Data updated');
      router.push('/');
    } catch (err) {
      setMessage('Error updating data');
    }
  };

  // The post method is used to create a resource database mongoDB
  const postData = async form => {
    try {
      const rest = await fetch('/api/characters', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      });

      // throw new Error('An error occurred while creating the data');
      if (!rest.ok) {
        throw new Error(rest.status);
      }
      router.push('/');
    } catch (err) {
      setMessage('Error creating data');
    }
  };

  const handleChange = async e => {
    const target = e.target;
    const value = target.name === 'anime' ? target.checked : target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {};
    if (!form.name) err.name = 'Name is required';
    if (!form.description) err.description = 'Description is required';
    if (!form.image) err.image = 'Image is required';
    if (!form.school) err.school = 'School is required';
    return err;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const err = formValidate();

    if (Object.keys(err).length === 0) {
      forNewChara ? postData(form) : putData(form);
    } else {
      setErrors({err});
    }
  };

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          maxLength="20"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          maxLength="100"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="image">Image</label>
        <input
          type="text"
          maxLength="200"
          name="image"
          value={form.image}
          onChange={handleChange}
          required
        />

        <label htmlFor="school">School</label>
        <input
          type="text"
          maxLength="200"
          name="school"
          value={form.school}
          onChange={handleChange}
          required
        />
        <label htmlFor="anime">anime</label>
        <input
          type={"checkbox"}
          maxLength="200"
          name="anime"
          checked={form.anime}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
};

export default Form;