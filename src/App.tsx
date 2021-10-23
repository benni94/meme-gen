
import './App.css';
import { Header } from './components/Header/Header';
import { MemeGenerator } from './sites/MemeGenerator/MemeGenerator';

function App() {
  return (
    <div >
     <Header />
     <div style={{maxWidth:'700px', margin:'0 auto'}}>
     <MemeGenerator />
     </div>
    </div>
  );
}

export default App;