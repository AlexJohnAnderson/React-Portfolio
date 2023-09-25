
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
 
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            Contact me   
          </h1>
          <h1>
          Alex Anderson | Lawrence, Kansas | (620)-803-2355 | alex.anderson095439@gmail.com
          </h1>
          </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact