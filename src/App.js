import Cardlist from './components/Cardlist/Cardlist';
import './App.css';

function App({color}) {
  return (
    <div className="App">
    <div className='cardlist-top'> 
      <Cardlist {...color}/>
    </div></div>
  );
}

export default App;
