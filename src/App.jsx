import logo from './logo.svg';
import './App.scss';
import PromoBox from './components/PromoBox';
import data from './mockdata';

function App() {
  return (
    <div className="App">
      <PromoBox items={data}/>
    </div>
  );
}

export default App;
