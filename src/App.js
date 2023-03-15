import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {

  const [dat, setDat] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setDat(res.data))
      // .then((res)=>{
      //   console.log(res.data)
      // })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return (
    <div className="App">
      <h1>Hello Axios</h1>
      {error !== " " && <h1>{error}</h1>}
      <table border="1">
        <tr>
          <td>ID</td>
          <td>NAME</td>
          <td>BODY</td>
          <td>EMAIL</td>
        </tr>
        {
          dat.map((e) => {
            const { id, name, body, email } = e;
            return <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{body}</td>
              <td>{email}</td>
            </tr>
          }).slice(0, 10)
        }
      </table>
    </div>
  );
}

export default App;
