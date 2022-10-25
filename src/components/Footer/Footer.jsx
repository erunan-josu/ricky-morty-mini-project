import './style.css'
import github from '../../assets/images/github.png'
import linkedin from '../../assets/images/linkedin.png'
export const Footer = () => {
  return (
    <footer>
      <p>2022 © Josu Hernandez</p>
      <ul>
        <li>
          <a href="#" target="_blank">
            <img src={github} alt="github logo" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <img src={linkedin} alt="linkedin logo" />
          </a>
        </li>
      </ul>
    </footer>
  )
}
