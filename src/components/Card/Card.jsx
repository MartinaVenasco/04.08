import './index.css';
import data from '../../api/api.js';

const Card = () => {

  return (<div  className='pantone' ><div className="color"  style={{ backgroundColor: data }}>
     <h1>Pantone</h1> </div> <h2>#65464</h2> </div>
  )
}

export default Card;