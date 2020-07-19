import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ShowImage from './components';

function App() {
  const [customImage, setCustomImage] = useState({ file: null});
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.rect(20, 20, 150, 100);
  ctx.stroke();
  }, [])
  let file;
  const handleChange = (e) => {
    file = e.target.files[0];
    setCustomImage({file: URL.createObjectURL(file)})
    setToggle(true)
  }
  return (
    <div className="App">
      <input type="file" onChange={handleChange}/>
     {/* {toggle && <ShowImage file={customImage} />} */}
     <canvas id="canvas" style={{height: '500px', width: "800px", border: '1px solid red', margin: 'auto'}}/>

     {/* <img id="myImage" src={customImage.file}/>  */}
    </div>
  );
}

export default App;
