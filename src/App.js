import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      number: '',
      message: ''
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
 }



function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setSubmitting(true);


    const WppApi = await fetch(
        'http://192.95.46.251:3333/sendText',{
          body: JSON.stringify({
            sessionName: "senzap", 
            number: formData.number,
            text: formData.message
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
    )
    const result = await WppApi.json()
    //console.log(result.result)
    if(result.result === 'sucess'){
        return(<div>Err</div>)
    }


    
    setSubmitting(false);
    setFormData({
        reset: true
    })


  }
  const handleChange = event => {
    setFormData({
      name: event.target.name,
      number: event.target.number,
      value: event.target.value,
    });
  }

  return(
    <div className="wrapper">
      <h1>SendZap</h1>
      {submitting &&
       <div>
         Enviando sua mensagem...<br/><br/>
         
         Número: {formData.number}<br/>
         Messagem: {formData.message}
       </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset disabled={submitting}>
          <label>
            <p>Número</p>
            <input name="number" onChange={handleChange} value={formData.number || ''}/>
          </label>
          <label>
            <p>Mensagem</p>
            <input name="message" onChange={handleChange} value={formData.message || ''}/>
          </label>
        </fieldset>
        <button type="submit" disabled={submitting}>Enviar</button>
      </form>
    </div>
  )
}

export default App;
