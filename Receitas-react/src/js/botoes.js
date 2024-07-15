
let imagemAtual = 0;
let radioAtual = 0;
let isAdvancing = false;

export function avancar() {
    if (isAdvancing) return;
    isAdvancing = true;

    const imagens = document.querySelectorAll(".imagem-carrossel");
    const imagemSelecionada = document.querySelector(".selecionada");
    imagemSelecionada.classList.remove("selecionada");

    let radio = document.getElementById('radio' + radioAtual);
    if (radio) {
        radio.checked = false;
    }

    imagemAtual ++;
    if (imagemAtual > imagens.length - 1) {
        imagemAtual = 0;
        imagens[imagemAtual].classList.add("selecionada");
    } else {
        imagens[imagemAtual].classList.add("selecionada");
    }

    radioAtual = imagemAtual + 1;
    radio = document.getElementById('radio' + radioAtual);
    if (radio) {
        radio.checked = true;
    }

    isAdvancing = false;
}

export function voltar() {
    if (isAdvancing) return;
    isAdvancing = true;

    const imagens = document.querySelectorAll(".imagem-carrossel");
    const imagemSelecionada = document.querySelector(".selecionada");
    imagemSelecionada.classList.remove("selecionada");

    let radio = document.getElementById('radio' + radioAtual);
    if (radio) {
        radio.checked = false;
    }

    imagemAtual --;
    if (imagemAtual < 0) {
        imagemAtual = imagens.length -1;
        imagens[imagemAtual].classList.add("selecionada");
    } else {
        imagens[imagemAtual].classList.add("selecionada");
    }

    radioAtual = imagemAtual + 1;
    radio = document.getElementById('radio' + radioAtual);
    if (radio) {
        radio.checked = true;
    }

    isAdvancing = false;
}