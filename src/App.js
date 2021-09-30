import './App.css';

function App() {
  const handleSubmit = event => {
    event.preventDefault()
    let message = `*Nome:* ${event.target.name.value}\n
*Número:* wa.me/55${event.target.numc.value}\n
*Destino:* ${event.target.dest.value}\n
*Local:* ${event.target.loc.value}`
    const res = fetch(
      'http://192.95.46.251:3333/sendText',{
        body: JSON.stringify({
          sessionName: "senzap", 
          number: '55' + event.target.num.value,
          text: message
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )
  }

  return (
    <div className="wrapper">
      <h1>Taxi</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Número (APENAS EM TESTES)</p>
            <input id="num" number="number"></input>
          </label>
          <label>
            <p>Nome:</p>
            <input id="name"></input>
          </label>
          <label>
            <p>Número:</p>
            <input id="numc"></input>
          </label>
          <label>
            <p>Destino:</p>
            <input id="dest"></input>
          </label>
          <label>
            <p>Onde está:</p>
            <input id="loc"></input>
          </label>
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
