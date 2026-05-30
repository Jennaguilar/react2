import './Bienvenido.css';

type Props = {
    user: string;
}

function Bienvenido({ user }: Props) {
    return (
        <> 
        <div className="header"> 
            <h1>Bienvenido</h1>
            <h2>{user}</h2>
        </div>
           
        </>
    );
}
export default Bienvenido;
