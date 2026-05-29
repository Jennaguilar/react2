type Props = {
    user: string;
    setUser: (username: string) => void;
}

function Bienvenido({ user, setUser }: Props) {
    const cerrarSesion = () => {
        setUser('');
    }
    
    return (
        <>
            <h1>Bienvenido</h1>
            <h2>{user}</h2>
            <button onClick={cerrarSesion}>Cerrar sesión</button>
        </>
    );

}
export default Bienvenido;
