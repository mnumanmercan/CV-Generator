import { useState } from 'react'

const HeaderForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className='form-header border-2 px-8 py-4 flex flex-col gap-3'>
      <div>
        <label className='w-32'>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className='border-2 rounded-sm'
        />
      </div>
      <div>
        <label className='w-32'>Title: </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className='border-2 rounded-sm'
        />
      </div>
    </div>
  )
}

export default HeaderForm