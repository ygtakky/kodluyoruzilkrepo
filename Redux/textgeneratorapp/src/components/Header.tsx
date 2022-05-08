import TextInput from './TextInput'

type Props = {}

function Header({}: Props) {
  return (
    <div className='app__header'>
    <h1 style={{textAlign: "center"}}>React sample text generator app</h1>
    <div className='divider'></div>
    <TextInput />
    </div>
  )
}

export default Header