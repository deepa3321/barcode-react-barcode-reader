import React from 'react';
import './App.css';
import BarcodeScanner from './Barcode-scan/index';

function App() {
  return (
    <div className="App">
        <h1>Barcode Scanner App</h1>
      <main>
        <BarcodeScanner />
      </main>
    </div>
  );
}

export default App;
