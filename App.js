import React, { useEffect, useState } from 'react';
import { database } from './firebaseInit';
import { ref, onValue, set } from 'firebase/database';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = ref(database, 'your-data-path');
    onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      setData(value);
    });
  }, []);

  const handleButtonClick = () => {
    const dataRef = ref(database, 'your-data-path');
    set(dataRef, { example: 'new data' });
  };

  return (
    <div>
      <h1>Firebase Realtime Database</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleButtonClick}>Update Data</button>
    </div>
  );
};

export default App;
