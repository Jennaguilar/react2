import {useState} from 'react';
import './Login.css';

interface LoginProps {
    setUser?: (username: string) => void;
}

const users = [
    {username: 'Agus', password: '123'},
    {username: 'user', password: 'user123'},
]

function Login({setUser}: LoginProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const validandoDatos = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === '' || password === '') {
            setError(true);
            setErrorMessage('Por favor, complete todos los campos');
            return;
        }

        const user = users.find(
            (u)=> u.username === username && u.password === password 
        );
        if(user){
            setError(false);
            setUser && setUser(username);
        }
        else {
            setError(true);
            setErrorMessage('Usuario o contraseña incorrectos');
        }
        setUsername('');
        setPassword('');

    };
    return (
        <>
        <div className="container">
                <h1>Iniciar sesión</h1>
            <form action="" onSubmit={validandoDatos}>
                <input
                    type= "text"
                    placeholder= 'Usuario'
                    value ={username}
                    onChange ={(x)=> setUsername(x.target.value)}
                    name="username"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(x) => setPassword(x.target.value)}
                    name="password"
                />
                <button type="submit">Ingresar</button>
                {error && <p style={{color: 'red'}}>{errorMessage}</p>}
            </form>
        </div>
        
        </>
    );

}

export default Login;