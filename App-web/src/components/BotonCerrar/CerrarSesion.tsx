type Props = {
    setUser: (username: string) => void;
}

function CerrarSesion({ setUser }: Props) {
    const cerrarSesion = () => {
        setUser('');
    }
    return(
        <button onClick={cerrarSesion}>Cerrar sesión</button>
    )
}
export default CerrarSesion;