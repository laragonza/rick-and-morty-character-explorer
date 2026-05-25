import Link from "next/link";
import { CharacterT } from "@/app/types/RickYMorty";
import "./styles.css";



const CharacterChulangano = ({personaje}: {personaje: CharacterT}) => {
    return (
        <Link href={`/character/${personaje.id}`} className="ContainerChulangano">
            <img src={personaje.image} alt={personaje.name}/>
            <div className="InfoContainer">
                <h2>{personaje.name}</h2>
                <p>Estado: {personaje.status}</p>
                <p>Genero: {personaje.gender}</p>
            </div>
        </Link>
    )
};

export default CharacterChulangano;
