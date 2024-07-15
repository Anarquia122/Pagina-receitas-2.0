import mostrarReceita from "./js/mostrarReceita"

export function Receitas(props) {
    return <div className="bloco-receitas">
        <div className="fechar">
            <button onClick={mostrarReceita.fechar} className="btn-fechar bi bi-x-circle "></button>
        </div>
        <div className="conteudo">
            <img src={props.imagem} alt="" />
            <div className="texto">
                <h1>{props.nome}</h1>
                <h3>Ingredientes</h3>
                <ul>
                    {props.ingredientes.map((element, index) => {
                        return <li key={index}>{element}</li>
                    })}
                </ul>
                <h3>Modo de preparo</h3>
                <p>{props.preparo}</p>
            </div>
        </div>
    </div>
}