import { useState, useEffect } from 'react'; // importing hooks

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users'); // putting req for data
  const [items, setItems] = useState([]) // getting response array

  useEffect(() => {
    // useEffect will fetch different resources as they change
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json(); // got response, changed it to json
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchItems();

  },[reqType]) // [] is dependencies

  return (
    <div className="App">
      <Form // creating component
        reqType={reqType} // passing value to form
        setReqType={setReqType}
      />
      
    </div>
  );
}

export default App;
