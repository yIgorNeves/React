import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return (
        <div>
            {/* Isso é um comentario - usar esse tipo nas funçõies que nao vai para o HTML*/}
            <h1>Meu primeito componente.</h1>
            <p className="teste"> Meu texto.</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;