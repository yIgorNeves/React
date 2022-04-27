const Challenge = () =>{
    const a= 5;
    const b = 15;
    
    return(
        <div>
            <h1>A: {a}</h1>
            <h1>B: {b}</h1>
            <div>
                <button onClick={()=>console.log(a + b)}>Clique aqui para somar.</button>
            </div>
        </div>
    );
};

export default Challenge;