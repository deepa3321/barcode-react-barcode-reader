import React, { useState } from 'react';
import BarcodeReader from 'react-barcode-reader';
import styles from './Barcode.module.css';

const BarcodeScanner = () => {
  const [result, setResult] = useState('No result');

  const handleError = (err) => {
    console.error(err);
  };

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  return (
    <div className={styles.container}>
      <BarcodeReader
        onError={handleError}
        onScan={handleScan}
        facingMode={'environment'}
      />
      <div className={styles.result}>{result}</div>
    </div>
  );
};

export default BarcodeScanner;
