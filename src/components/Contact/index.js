
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
 
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
            
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          </div>
        <div className="info-map">
          Alex Anderson,
          <br />
          Lawrence, Kansas,
          <br />
          (620)-803-2355
          <br />
          <span>alex.anderson095439@gmail.com</span>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact