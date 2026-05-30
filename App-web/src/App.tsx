import Login from './components/Login/Login';
import Bienvenido from './components/Bienvenido/Bienvenido';
import { useState } from 'react';
import './App.css'
import Header from './components/header/Header';

function App() {
  const [user, setUser] = useState('');

  return (
    <>
    
    {
      user.length === 0
      ? <Login setUser={setUser}/>
      :(
      <>
      <Header setUser={setUser} />
      <Bienvenido user={user}/>
      </>
      )
    }
    </>
  )
}

export default App
