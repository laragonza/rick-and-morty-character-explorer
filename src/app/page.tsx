"use client";
import "./style.css";
import { useEffect, useState } from "react";
import { ResultCharactersT } from "./types/RickYMorty";
import api from "@/api/api";
import CharacterChulangano from "./components/CharacterChulangano";
import Filtros from "./components/Filtros";
import Paginador from "./components/Paginador";



const CharactersPage = () => {

    const [resultCharacters, setResultCharacters] = useState<ResultCharactersT | null>(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [name, setName] = useState("");
    const [finalName, setFinalName] = useState("");

    const fetchCharacters = () => {
        try{
            let url = `/character?page=${page}`;

            if(status){
                url = url + `&status=${status}`;
            }

            if(gender){
                url = url + `&gender=${gender}`;
            }

            if(finalName){
                url = url + `&name=${finalName}`;
            }

            api.get(url).then((e)=>{
                const {data} : {data: ResultCharactersT} = e;
                setResultCharacters(data);
            }).catch(()=>{
                setResultCharacters(null);
            }).finally(()=>{
                setLoading(false);
            })
        }catch(e){
            alert(String(e));
        }
    }

    useEffect(()=>{
        setLoading(true);
        fetchCharacters();
    },[page,status,gender,finalName]);

    if(loading){
        return(<h1>Loading...</h1>)
    }

    return (
        <div className="ContainerCharacters">
            <Filtros
                status={status}
                setStatus={(e)=>{
                    setPage(1);
                    setStatus(e);
                }}
                gender={gender}
                setGender={(e)=>{
                    setPage(1);
                    setGender(e);
                }}
                name={name}
                setName={setName}
                buscar={()=>{
                    setPage(1);
                    setFinalName(name);
                }}
            />
            {!resultCharacters && <h1>No hay resultados</h1>}
            {resultCharacters && resultCharacters.results.map((e)=>(<CharacterChulangano key={e.id} personaje={e}/>))}
            {resultCharacters && <Paginador next={!!resultCharacters.info.next} prev={!!resultCharacters.info.prev} page={page} totalPages={resultCharacters.info.pages} setPage={(e)=>{
                setPage(e);
            }}/>}
        </div>
    )
};

export default CharactersPage;
