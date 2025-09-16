import { Link } from 'react-router-dom';
import './Pokemon.css';

function Pokemon({ name, image , id }) {
  return (
    <div className="pokemon">
    <Link to= {`/pokemon/${id}` }>
    <h3 className='pokemon-name'>{name}</h3>
      <img className ="pokemon-image" src={image} alt={name} />
      </Link>
    </div>
  );
}

export default Pokemon;
