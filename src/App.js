import Header from './Components/Header';
import api from './api/users';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try{
        const response = await api.get('/api/user');
        setUsers(response.data);
      }catch (err){
        if (err.response){
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        }else{
          console.log(`Error: $(err.message)`);
        }
      }
    }

    fetchUsers();
  }, [])


  return (
    <div className="container">
          <Header />


    </div>
  );
}

export default App;
