import Header from './Components/Header';
import api from './api/users';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    api.create({
      baseURL: 'https://localhost:44322'
    });const fetchUsers = async () => {
      try{
        const response = await api.get('/api/user');
        setUsers(response.data);
      }catch (err){

      }
    }
  }, [])


  return (
    <div className="container">
          <Header />
          <Posts />
          <Comments />
          <Users />
    </div>
  );
}

export default App;
