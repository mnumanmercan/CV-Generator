import { updateField } from '@/features/form/formSlice';
import { useDispatch, useSelector } from 'react-redux';

const HeaderForm = () => {
  const dispatch = useDispatch();
  const headerInfo = useSelector((state) => state.form.headerInfo);

  const handleChange = (e) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  };

  return (
    <div className='form-header border-2 px-8 py-4 flex flex-col gap-3'>
      { headerInfo && Object.entries(headerInfo).map(([key, value]) => (
        <div key={key}> 
          <label className='w-32'>{ key }</label>
          <input
            type="text"
            name={key}
            value={value}
            onChange={handleChange}
            className='border-2 rounded-sm'
          />
        </div>
    ))}
    </div>
  )
}

export default HeaderForm