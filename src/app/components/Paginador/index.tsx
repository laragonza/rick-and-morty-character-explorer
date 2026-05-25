import "./styles.css";

const Paginador = ({next,prev,page,totalPages,setPage}: {
    next: boolean,
    prev: boolean,
    page: number,
    totalPages: number,
    setPage: (page: number) => void
}) => {

    const paginas: number[] = [];

    for(let i = 1; i <= 3; i++){
        if(i <= totalPages && !paginas.includes(i)){
            paginas.push(i);
        }
    }

    if(!paginas.includes(page)){
        paginas.push(page);
    }

    for(let i = totalPages - 2; i <= totalPages; i++){
        if(i > 0 && !paginas.includes(i)){
            paginas.push(i);
        }
    }

    paginas.sort((a,b)=>a-b);

    return(
        <div className="PaginadorContainer">
            {prev && page > 1 && <div className="arrowContainer" onClick={()=>{
                setPage(page-1);
            }}><p>{"<"}</p></div>}
            {paginas.map((e)=>(
                <div
                    key={e}
                    className={page === e ? "pageContainer selectedPage" : "pageContainer"}
                    onClick={()=>{
                        setPage(e);
                    }}
                >
                    <p>{e}</p>
                </div>
            ))}
            {next && page < totalPages && <div className="arrowContainer" onClick={()=>{
                setPage(page+1);
            }}><p>{">"}</p></div>}
        </div>
    )
}


export default Paginador;
