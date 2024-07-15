
const mostrarReceita = {
    init: () => {
        const cartoes = document.querySelectorAll(".container-item-receitas");
        const receitas = document.querySelectorAll(".bloco-receitas");

        const pageContent = document.querySelector(".page-content");
        // const overlay = document.createElement("div");
        // overlay.classList.add("overlay");
        // document.body.appendChild(overlay);

        cartoes.forEach((cartao, indice) => {
            cartao.addEventListener('click', () => {
                receitas[indice].classList.add("mostrar");
                pageContent.classList.add("body-blur");
                //overlay.classList.add("mostrar");
            })
        })

        // overlay.addEventListener('click', () => {
        //     mostrarReceita.fechar();
        // })
    },

    fechar: () => {
        let receitaSelecionada = document.querySelector(".mostrar");
        if (receitaSelecionada) {
            receitaSelecionada.classList.remove("mostrar");
            document.querySelector(".page-content").classList.remove("body-blur");
            //document.querySelector(".overlay").classList.remove("mostrar");
        }
    }
}

export default mostrarReceita;