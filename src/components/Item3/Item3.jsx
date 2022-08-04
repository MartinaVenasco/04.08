import './index.css'
import Item2 from '../Item2'
const Item3 =({children})=> {
return (<div className="item3"> <Item2> {children} </Item2></div>)


}

export default Item3