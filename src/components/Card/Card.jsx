import './style.css'
export const Card = ({ name, species, status, img, location }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <ul>
        <li>Name: {name}</li>
        <li>Species: {species}</li>
        <li>Status: {status}</li>
        <li>Location: {location.name}</li>
      </ul>
    </div>
  )
}
