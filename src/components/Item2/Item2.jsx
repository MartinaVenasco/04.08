import './index.css'
import Item1 from '../Item1'

const Item2 =({children})=> {
return (<div className="item2"> <Item1> {children}</Item1> </div>)


}

export default Item2