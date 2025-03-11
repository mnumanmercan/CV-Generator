import Header from './Header/Header'
import Summary from './Summary/Summary'

const Wrapper = () => {
  return (
    <div className='cv-wrapper border-1 border-gray-800 rounded-b-sm'>
      <Header />
      <hr />
      <Summary />
    </div>
  )
}

export default Wrapper