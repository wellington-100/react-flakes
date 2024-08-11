
import './App.css';

import Snow from './snow-effect/snow/component';

function App() {

  // let [showChild, setSowChild] = useState(true)

  return (
    <div className="App">
      <Snow quantity={100}/>
{/*       
      {showChild && <Flake 
            size = {randInt(20, 40)}
            color = {randColor()}
            top = {0}                                                             
            left = {randInt(0,100)}
            whenDone = { () => {setSowChild(false)}}
      />} */}

    </div>
  );
}

export default App;
