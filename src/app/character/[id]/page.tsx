"use client";
import "./styles.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/api/api";
import { CharacterT } from "@/app/types/RickYMorty";



const CharacterDetailPage = () => {

    const { id } = useParams();
    const [personaje, setPersonaje] = useState<CharacterT | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=>{
        setLoading(true);
        setError("");

        api.get<CharacterT>(`/character/${id}`).then((e)=>{
            setPersonaje(e.data);
        }).catch(()=>{
            setError("No se ha encontrado el personaje");
        }).finally(()=>{
            setLoading(false);
        })
    },[id]);

    if(loading){
        return (
            <div className="DetailPageContainer">
                <h1>Loading...</h1>
            </div>
        )
    }

    if(error || !personaje){
        return (
            <div className="DetailPageContainer">
                <h1>{error || "No hay personaje"}</h1>
                <Link className="BackButton" href="/">Volver</Link>
            </div>
        )
    }

    return (
        <div className="DetailPageContainer">
            <div className="DetailCard">
                <img src={personaje.image} alt={personaje.name}/>
                <div className="DetailInfo">
                    <h1>{personaje.name}</h1>
                    <p>ID: {personaje.id}</p>
                    <p>Genero: {personaje.gender}</p>
                    <p>Estado: {personaje.status}</p>
                    <p>Especie: {personaje.species}</p>
                    <p>Origen: {personaje.origin.name}</p>
                    <p>Location: {personaje.location.name}</p>
                </div>
                <Link className="BackButton" href="/">Volver</Link>
            </div>
        </div>
    )
};

export default CharacterDetailPage;
