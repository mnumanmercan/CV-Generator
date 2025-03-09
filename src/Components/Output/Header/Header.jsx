import { useSelector } from "react-redux";
import { FaGithubSquare, FaLinkedin, FaPhone } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { usePDF } from 'react-to-pdf';


const Header = () => {
  const headerInfo = useSelector((state) => state.form.headerInfo);
  const iconStyles = { fontSize: "1.3em" };

  const { toPDF, targetRef } = usePDF({filename: 'Resume.pdf'});

  return (
    <div className="relative">
    <button className="flex justify-end -top-[50px] right-0 pr-2 absolute border-2 cursor-pointer p-2 rounded-md" onClick={() => toPDF()}>PDF İndir</button>
    <div className='cv-container px-8 py-4 font-mono' ref={targetRef}>
      <div className='cv-header flex flex-col justify-center items-center'>
        <div className='cv-name text-center text-3xl font-bold'>
            { headerInfo.name }
        </div>
        <div className='cv-title text-2xl font-medium'>
          { headerInfo.title }
        </div>
        <div className='cv-social flex justify-center'>
            <ul className='cv-social-list flex justify-center flex-wrap gap-2 *:w-fit *:p-2 *:rounded-md *:min-w-fit *:flex *:justify-center *:gap-2 *:items-center *:first:w-5'>
              <li className='cv-mail'>
                <span className='cv-social-icon'><MdEmail style={iconStyles} /></span>
                { headerInfo.email }
              </li>
              <li className='cv-phone'>
                <span className='cv-social-icon'><FaPhone style={iconStyles}/></span>
                { headerInfo.phone }
              </li>
              <li className='cv-portfolio'>
                <span className='cv-social-icon'><CgWebsite style={iconStyles}/></span>
                { headerInfo.portfolio }
              </li>
              <li className='cv-linkedin'>
                <span className='cv-social-icon'><FaLinkedin style={iconStyles}/></span>
                { headerInfo.linkedin }
              </li>
              <li className='cv-github'>
                <span className='cv-social-icon'><FaGithubSquare style={iconStyles}/></span>
                { headerInfo.github }
              </li>
              
            </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header