import './App.css';
import A from './ParentToChild/A';
import AC from './ChildToParent/AC'

function App() {
  return (
    <div className="App">
    <h2 style={{background:"red"}}>Parent To Child</h2>
    <hr />
    <A /><hr/><hr/><hr/>
    <h2 style={{background:"green"}}>Child To Parent</h2>
    <AC />
    </div>
  );
}

export default App;