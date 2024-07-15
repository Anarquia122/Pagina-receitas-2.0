import { avancar, voltar } from "./botoes";

let intervalId = null;

const slide = {
    init: () => {

        document.getElementById('radio1').checked = true;

        const btnRadio1 = document.getElementById("btn-radio1");
        const btnRadio2 = document.getElementById("btn-radio2");

        if (btnRadio1) {
            btnRadio1.addEventListener("click", () => slide.radioClicked("radio1"));
        }
        if (btnRadio2) {
            btnRadio2.addEventListener("click", () => slide.radioClicked("radio2"));
        }

        slide.startInterval();

    },

    startInterval: () => {
        if (intervalId) {
            clearInterval(intervalId);
        }


        intervalId = setInterval(() => {
            avancar();
        }, 5000);
    },

    avancarImg: () => {
        avancar();
        slide.startInterval();
    },

    voltarImg: () => {
        voltar();
        slide.startInterval();
    },

    radioClicked: (radioId) => {
        const radioBtn = document.getElementById(radioId);
        const imagens = document.querySelectorAll(".imagem-carrossel");
        if (radioBtn) {
            radioBtn.checked = true;

            //const imagens = document.querySelectorAll(".imagem-carrossel");
            const imagemSelecionada = document.querySelector(".selecionada");
            imagemSelecionada.classList.remove("selecionada");
        }

        const index = parseInt(radioId.replace('radio', '')) -1;
        if (index >= 0 && index < imagens.length) {
            imagens[index].classList.add("selecionada");
        }

        slide.startInterval();
    }
};

export default slide;