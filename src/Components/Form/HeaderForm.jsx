import { updateField } from '@/features/form/formSlice';
import { useDispatch, useSelector } from 'react-redux';

const HeaderForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);

  const handleChange = (e) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  };

  return (
    <div className='form-header border-2 px-8 py-4 flex flex-col gap-3'>
      <div>
        <label className='w-32'>Full Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
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