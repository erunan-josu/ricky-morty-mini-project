import './style.css'
import { CharacterList } from '../CharacterList/CharacterList'
export const Main = ({ list }) => {
  return (
    <main className="main-container">
      <CharacterList list={list} />
    </main>
  )
}
