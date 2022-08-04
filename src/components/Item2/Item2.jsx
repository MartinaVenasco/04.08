import './index.css'
import Item1 from '../Item1'

const Item2 =({prop})=> {
return (<div className="item2"> <Item1 {...prop}/></div>)


}

export default Item2