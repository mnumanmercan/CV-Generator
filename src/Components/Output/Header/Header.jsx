import { useSelector } from "react-redux";

const Header = () => {
  const formData = useSelector((state) => state.form.formData);

  return (
    <div className='cv-container px-8 py-4'>
            <div className='cv-header flex flex-col justify-center items-center'>
              <div className='cv-name text-center'>
                  { formData.name }
              </div>
              <div className='cv-title'>
                { formData.title }
              </div>
              <div className='cv-social flex justify-center'>
                  <ul className='cv-social-list flex justify-center flex-wrap gap-2 *:w-fit *:border-2 *:p-2 *:rounded-md '>
                    <li className='cv-mail'>
                      <span className='cv-social-icon'></span>
                      numan.mercan24@gmail.com
                    </li>
                    <li className='cv-phone'>
                      <span className='cv-social-icon'></span>
                      537 357 8505
                    </li>
                    <li className='cv-portfolio'>
                      <span className='cv-social-icon'></span>
                      mnmercan.com
                    </li>
                    <li className='cv-linkedin'>
                      <span className='cv-social-icon'></span>
                      mnmercan
                    </li>
                    <li className='cv-github'>
                      <span className='cv-social-icon'></span>
                      mnumanmercan
                    </li>
                  </ul>
              </div>
            </div>
          </div>
  )
}

export default Header