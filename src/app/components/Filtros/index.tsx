"use client";
import "./styles.css";



const Filtros = ({status, setStatus, gender, setGender, name, setName, buscar}: {
    status: string,
    setStatus: (status: string) => void,
    gender: string,
    setGender: (gender: string) => void,
    name: string,
    setName: (name: string) => void,
    buscar: () => void
}) => {

    const cambiarStatus = () => {
        if(status === "Dead"){
            setStatus("Alive");
        }else if(status === "Alive"){
            setStatus("unknown");
        }else{
            setStatus("Dead");
        }
    };

    const cambiarGender = () => {
        if(gender === "Female"){
            setGender("Male");
        }else if(gender === "Male"){
            setGender("Genderless");
        }else if(gender === "Genderless"){
            setGender("unknown");
        }else{
            setGender("Female");
        }
    };

    return (
        <div className="FiltrosContainer">
            <button onClick={cambiarStatus}>
                Estado: {status || "sin filtro"}
            </button>
            <button onClick={cambiarGender}>
                Genero: {gender || "sin filtro"}
            </button>
            <div className="NameFilterContainer">
                <input
                    value={name}
                    placeholder="Nombre del personaje"
                    onChange={(e)=>setName(e.target.value)}
                    onKeyDown={(e)=>{
                        if(e.key === "Enter"){
                            buscar();
                        }
                    }}
                />
                <button onClick={()=>{
                    buscar();
                }}>Buscar</button>
            </div>
        </div>
    )
};

export default Filtros;
