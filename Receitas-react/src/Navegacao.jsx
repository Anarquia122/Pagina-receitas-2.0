import mostrarReceita from "./js/mostrarReceita"

export function Navegacao (props) {
    const mudarPagina = (index) => {
        props.atualizarPaginaSelecionada(index);
        setTimeout(() => {
            mostrarReceita.init();
        }, 0)
    }
    return <div className="nave-filtro">
        <input type="radio" name="opcao-pagina" id="pagina-0" onClick={() => mudarPagina(0)} defaultChecked />
        <label htmlFor="pagina-0">Pratos Principais</label>

        <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => mudarPagina(1)} />
        <label htmlFor="pagina-1">Sobremesas</label>

        <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => mudarPagina(2)} />
        <label htmlFor="pagina-2">Lanches</label>
    </div>
}