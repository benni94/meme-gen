
import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/TextMove/Footer/Footer';
import { MemeGenerator } from './sites/MemeGenerator/MemeGenerator';

type IAppProps = {

}

const App: React.FC<IAppProps> = () => {
  return (
    <div>
      <Header />
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <MemeGenerator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
