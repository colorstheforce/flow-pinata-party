import logo from './logo.svg';
import './App.css';
import {AuthCluster} from './AuthCluster';
import TokenData from './TokenData';

function App() {
  return (
    <div className="App">
      <AuthCluster />
      <TokenData />
    </div>
  );
}

export default App;
