import React, { useState } from 'react';

function Example() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  const [count, setCount] = useState(0);

  const dude = () => {
    alert('HEY MAN!')
  }
  
  function dudettes(){
    alert('HEY WOMAN')
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Here
      </button>
    </div>
  );
}

export default Example