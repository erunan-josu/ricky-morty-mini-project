import './style.css'
import { Card } from '../Card/Card'
export const CharacterList = ({ list }) => {
  return (
    <ul className="character-list">
      {list.map((item) => {
        const { name, image, id, species, type, status, location } = item
        return (
          <Card
            key={id}
            img={image}
            name={name}
            species={species}
            status={status}
            location={location}
          />
        )
      })}
    </ul>
  )
}
