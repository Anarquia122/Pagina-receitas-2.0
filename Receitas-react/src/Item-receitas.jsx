export function ItemReceitas(props) {
    return <div className="container-item-receitas">
        <div>
            <h1>{props.nome}</h1>
            <p>{props.comentario}</p>
            <p>{props.autor}</p>
            <p className="confira">Clique e confira!</p>
        </div>
        <div className="caixa-imagem">
            <img src={props.imagem} alt="" className="imagem-prato" />
        </div>
    </div>
}