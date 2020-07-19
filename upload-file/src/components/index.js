import React, {useState} from 'react';

export default function ShowImage (props) {
  const[myImage, setMyimage] = useState('');
    const {file} = props;
    console.log('==========',file.file)

    const reader = new FileReader();
      // outPut.src= 
      // console.log(URL.createObjectURL(file))
      // console.log("-----------", customImage)
      reader.onload = function () {
      
      setMyimage(file.file);
        
      
        URL.revokeObjectURL(file.file) 
      }

    return <img id="myImage" src={myImage}/>


}