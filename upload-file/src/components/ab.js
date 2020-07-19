import React, {useEffect} from 'react';

export default function Card(title) {
    const [count, setCount] = React.useState(0);
    const [callbackSetup, setCallbackSetup] = React.useState(false);
    function setupConsoleCallback(callback) {
      console.log('Setting up callback');
      setInterval(callback, 3000);
    }
    const clickHandler = () => {
      setCount(count + 1);
    };
    useEffect(() => {
    //   console.log(count);
      if (!callbackSetup) {
        setupConsoleCallback(() => {
          console.log(`Count is: ${count}`);
        });
        setCallbackSetup(true);
      }
    }, [count]);
    return (<div>
        Active count {count} <br/>
        <button onClick={clickHandler}>Increment</button>
      </div>);
  }
//   const el = document.querySelector("#root");
//   ReactDOM.render(<Card title='Example Component' />, el);