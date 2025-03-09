import FormWrapper from './Components/Form/FormWrapper'
import Wrapper from './Components/Output/Wrapper'

function App() {
  return (
    <>
      <div className='flex gap-7'>
        <FormWrapper />
        <div className='middle-line border-zinc-800'> </div>
        <Wrapper />
      </div>
    </>
  )
}

export default App
