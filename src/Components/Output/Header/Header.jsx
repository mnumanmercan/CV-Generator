import { useSelector } from "react-redux";

const Header = () => {
  const headerInfo = useSelector((state) => state.form.headerInfo);

  return (
    <div className='cv-container px-8 py-4'>
            <div className='cv-header flex flex-col justify-center items-center'>
              <div className='cv-name text-center'>
                  { headerInfo.name }
              </div>
              <div className='cv-title'>
                { headerInfo.title }
              </div>
              <div className='cv-social flex justify-center'>
                  <ul className='cv-social-list flex justify-center flex-wrap gap-2 *:w-fit *:border-2 *:p-2 *:rounded-md *:min-w-40 *:flex *:justify-center'>
                    <li className='cv-mail'>
                      <span className='cv-social-icon'></span>
                      { headerInfo.email }
                    </li>
                    <li className='cv-phone'>
                      <span className='cv-social-icon'></span>
                      { headerInfo.phone }
                    </li>
                    <li className='cv-portfolio'>
                      <span className='cv-social-icon'></span>
                      { headerInfo.portfolio }
                    </li>
                    <li className='cv-linkedin'>
                      <span className='cv-social-icon'></span>
                      { headerInfo.linkedin }
                    </li>
                    <li className='cv-github'>
                      <span className='cv-social-icon'></span>
                      { headerInfo.github }
                    </li>
                    
                  </ul>
              </div>
            </div>
          </div>
  )
}

export default Header