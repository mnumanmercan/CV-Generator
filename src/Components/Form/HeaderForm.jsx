import { updateField } from '@/features/form/formSlice';
import { useDispatch, useSelector } from 'react-redux';

const HeaderForm = () => {
  const dispatch = useDispatch();
  const headerInfo = useSelector((state) => state.form.headerInfo);

  const handleChange = (e) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  };

  return (
    <div className='form-header px-8 py-4 flex flex-col gap-3 flex-wrap -mx-3 mb-6'>
      { headerInfo && Object.entries(headerInfo).map(([key, value]) => (
        <div key={key} className="w-full px-3 mb-6 md:mb-0"> 
          <label className='block uppercase tracking-wide text-gray-700 text-md font-bold mb-2'>{ key }</label>
          <input
            type="text"
            name={key}
            value={value}
            onChange={handleChange}
            className='appearance-none block w-full bg-gray-200 text-gray-700 border shadow-md rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
          />
        </div>
    ))}
    </div>
  )
}

export default HeaderForm