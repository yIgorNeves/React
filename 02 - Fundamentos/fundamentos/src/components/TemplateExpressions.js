const TemplateExpressions = () =>{

    const name = "Igor"
    const data = {
        age: 25,
        job: "Desempregadado",
    }

    return(
        <div>
            <h1>Olá meu nome é {name}, tudo bem com você?</h1>
            <p>Eu atuo como: {data.job}</p>
            <p>Tenho {data.age} anos</p>

            <p>{console.log("JSX REACT")}</p>
        </div>
    );

};

export default TemplateExpressions