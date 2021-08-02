import './App.css';
import './Data.csv'
import UploadForm from './components/UploadForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactFileReader from 'react-file-reader';
import { React, useState } from 'react';



function App() {
  
  const [count, setCount] = useState(0);

  function sum(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);

      }
    }
    return sum;
  }

  const getShannon = (dict) => {
    let total = sum(dict);
    let shannon = 0;
    for (var el in dict) {
      if (dict.hasOwnProperty(el)) {
        let p = dict[el] / total;
        shannon += p * Math.log(p);
      }
    }
    return shannon;
  }

  const counts = { "white_male": 0, "white_female": 0 };

  const handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function (e) {
      let str = reader.result;
      let result = str.split(",");
      console.log(result);
      for (let i = 0; i < result.length; i++) {
        if (result[i] === "Male") {
          if (result[i + 1] === "White") setCount(count + 1);
        }
      }
    }
    reader.readAsText(files[0]);
  }
  console.log(count);
  return (
    <>
      <UploadForm />
      <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
        <button className='btn'>Upload</button>
      </ReactFileReader>
    </>
  )
}

//getShannon(data);
export default App;
