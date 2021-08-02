import './App.css';
import './Data.csv'
import InputBar from './components/InputBar';
import UploadForm from './components/UploadForm';
import 'bootstrap/dist/css/bootstrap.min.css';

// var data = './Data.csv';
// function csvToJSON(csv) {
//     var lines = csv.split("\n");
//     var result = [];
//     var headers;
//     headers = lines[0].split(",");

//     for (var i = 1; i < lines.length; i++) {
//         var obj = {};

//         if(lines[i] === undefined || lines[i].trim() === "") {
//             continue;
//         }

//         var words = lines[i].split(",");
//         for(var j = 0; j < words.length; j++) {
//             obj[headers[j].trim()] = words[j];
//         }

//         result.push(obj);
//     }
//     console.log(result);
// }

function App() {
  return (
    <>
      <UploadForm />
      <InputBar />
    </>
  );
}

export default App;
