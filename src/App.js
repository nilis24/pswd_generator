import { React, useState } from 'react';

const PswdGen = (n) => {
  let pswd = [];

  let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", 
  "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", 
  "V", "W", "X", "Y", "Z", "!", "@", "$", "%", "&", "/", "*", "+", "?", "¿", "<", ">", 
  "^", "[", "]", "}", "{", "^", "0","1", "2", "3", "4", "5", "6", "7", "8", "9"]

  for(let i = 0; i < n; i++) {
      pswd.push(characters[Math.round(Math.random()* (characters.length - 1))])
  }

  let pswd_joined = pswd.join('');

  return pswd_joined;
}

const App = () => {

  const [state, setState] = useState({
    number: 5,
    pswd: ''
  });

  const updateNumber = (e) => {
    setState(previousState => {
      return { ...previousState, number: e.target.value }
    });
  }

  const updatePswd = (e) => {
    setState(previousState => {
      return { ...previousState, pswd: PswdGen(state.number) }
    });
  }

  const copyPswd = () => {
    navigator.clipboard.writeText(state.pswd)
    alert("Password copied to clipboard!")
  }

  return(
    <div className='container'>
      <div className='mt-5 bg-white rounded shadow p-3'>

        <h1 className='text-center'>PASSWORD GENERATOR</h1>

        <div className="mb-3">
          <label for="pswd_length" className="form-label">Password length:</label>
          <input type="range" className="form-range" min="5" max="50" id="pswd_length" defaultValue={5} onChange={updateNumber}/>
        </div>

        <div className='text-center mt-3 fw-bold'>
          <span>length of your password: {state.number} characters</span>
        </div>

        <div class="d-flex justify-content-center mt-3">
          <button class="btn btn-primary" onClick={updatePswd}>Generate</button>
          <button class="btn btn-light ms-3" onClick={copyPswd}>Copy password</button>
        </div>
        
      </div>

      <div className='text-center mt-5 fs-4 fw-bold'>
        <span>{state.pswd}</span>
      </div>
    </div>
  )
}

export default App;