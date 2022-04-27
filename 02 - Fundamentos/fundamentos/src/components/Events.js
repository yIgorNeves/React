const Events = () =>{
    const handleMyEvent = (e) =>{
        console.log(e);
        console.log("Ativou Evento.");
    };

const renderSomething = (x) =>{
    if (x){
        return <h1>Renderizando isso!</h1>
    } else {
        return <h1>Também posso renderizar isso!</h1>
    }
};

return(
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique Aqui!</button>
        </div>
        <div>
            {/*essa função é executada quando clicar no botão */}
            <button onClick={()=>console.log("Clicou no outro botão")}>Clique aqui tambem!</button>
            {/*essa é uma pratica ruim pois complica o codigo html e torna a aplicação pesada
            nesse caso o ideal é melhor usar função separada tipo o handleMyEvent */}
            <button onClick={()=>{
                if(true){
                    console.log("Isso não deveria existir =)");
                }
            }}>Clique aqui, por favor.</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
);

};

export default Events;