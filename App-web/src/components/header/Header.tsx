import './Header.css';
import CerrarSesion from '../BotonCerrar/CerrarSesion';

type Props = {
    setUser: (username: string) => void;
}

function Header({ setUser }: Props) {
    return (
        <>
        <header className= "header-container">
            <div className="logo">
                <h1>Mi Aplicación</h1>
            </div>
            <nav>
                <ul className= "nav-links">
                    <li><a href="#about">Acerca de</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li><CerrarSesion setUser={setUser}/></li>
                </ul>
            </nav>
        </header>
        </>   
    );
}

export default Header;