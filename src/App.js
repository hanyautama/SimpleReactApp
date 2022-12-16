import "./styles.css";
import { useRef, useState } from 'react';

export default function App() {
  const inputRef = useRef(null);
  const [hasil, setHasil] = useState('');

  //const [inputRef, setInputRef] = useState('');
  const handleChange = (event) => {
     console.log(event.target.value);
     //event.target.value.replace(/\.|,/g,'')
     //console.log(inputRef.current.value.replace(/\.|,/g,''))
     var corrected = inputRef.current.value.replace(/\.|,/g,'');
     inputRef.current.value = corrected;
  };

  function konversiArrayToNumber(arr) {
    let result = ""
    for (var el of arr) {
        result += el
    }
    return result
  }

  function handleInput() {
    //please put your logic here
    //setHasil(inputRef.current.value);
    //variabel antara
    var var1 = inputRef.current.value;

    //kasus khusus w regex
    var ret = var1.replace(/\.|,/g,'')
    //console.log(ret)

    //pecah digit ke array->reverse->digit
    const arrOfDigits = Array.from(String(ret), Number);
    arrOfDigits.reverse();
    var revHasil = Number(konversiArrayToNumber(arrOfDigits));
    
    //selisih absolut
    setHasil(Math.abs(revHasil - ret));

    //console.log(var1)
    //console.log(arrOfDigits)
    //console.log(revHasil)
    //console.log(selisih)
  }

  return (
    <div className="App">
      <div>
        Number: <input ref={inputRef} onChange={handleChange} />
        <button onClick={handleInput}>Submit</button>
      </div>
      <div >Result: {hasil} </div>
    </div>
  );
}
