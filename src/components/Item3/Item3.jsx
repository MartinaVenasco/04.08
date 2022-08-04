import './index.css'
import Item2 from '../Item2'
const Item3 =({prop})=> {
return (<div className="item3"> <Item2 {...prop}/></div>)


}

export default Item3