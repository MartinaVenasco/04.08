import './index.css';

const Card = ({color="red"}) => {

  return (<div className='pantone' ><div className="color" style={{ backgroundColor: color }}>
     <h1>Pantone</h1> </div> <h2>{color}</h2></div>
  )
}

export default Card;