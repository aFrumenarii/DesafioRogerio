import { useState } from 'react';
import { CSVLink } from 'react-csv';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    idade: '',
    email: '',
  });

  const [data, setData] = useState([]);

  
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      username: inputs.username,
      idade: inputs.idade,
      email: inputs.email,
    };

    const updatedData = [...data, newData];
    setData(updatedData);

    setInputs({
      username: '',
      idade: '',
      email: '',
    });
  };

  const csvHeaders = [
    { label: 'Username', key: 'username' },
    { label: 'Idade', key: 'idade' },
    { label: 'Email', key: 'email' },
  ];

  const csvReport = (
    <CSVLink
      data={data}
      headers={csvHeaders}
      filename={'dados.csv'}
    >
      Download CSV
    </CSVLink>
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" name="username" value={inputs.username} onChange={handleChange} />
        <input type="text" placeholder="idade" name="idade" value={inputs.idade} onChange={handleChange} />
        <input type="text" placeholder="email" name="email" value={inputs.email} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
      {data.length > 0 && csvReport}
    </>
  );
}

export default App;
