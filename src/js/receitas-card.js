// imagens de lanches
import bolinhoArrozImg from '../assets/lanches/bolinho-arroz.jpg';
import pamonhaFritaImg from '../assets/lanches/pamonha-frita.jpg';
import paoQueijoImg from '../assets/lanches/pao-queijo.jpg';
import boloFubaImg from '../assets/lanches/bolo-fuba.jpg';

// imagens de pratos
import salpicaoImg from '../assets/pratos/salpicao.jpg';
import feijaoTropeiroImg from '../assets/pratos/feijao-tropeiro.jpg';

// imagens de sobremesas
import coberturaChocolateImg from '../assets/sobremesas/cobertura-chocolate.jpg';
import sorveteImg from '../assets/sobremesas/sorvete.jpg';

// lanches

const bolinhoArrozCartaz = {
    nome: "Bolinho de Arroz",
    imagem: bolinhoArrozImg,
    comentario: "Uma ótima opção de lanche.",
    autor: "Autor: Eurides"
};

const pamonhaFritaCartaz = {
    nome: "Pamonha Frita",
    imagem: pamonhaFritaImg,
    comentario: "Melhor prato de festa junina.",
    autor: "Autor: Italo"
};

const paoQueijoCartaz = {
    nome: "Pão de Queijo",
    imagem: paoQueijoImg,
    comentario: "Uma ótima opção de lanche.",
    autor: "Autor: Tânia"
};

const boloFubaCartaz = {
    nome: "Bolo de Fubá",
    imagem: boloFubaImg,
    comentario: "Ótima opção para um lanche.",
    autor: "Autor: Marcia"
}

// pratos

const salpicaoCartaz = {
    nome: "Salpicão",
    imagem: salpicaoImg,
    comentario: "Ótimo para um almoço em família.",
    autor: "Autor: Regina"
};

const feijaoTropeiroCartaz = {
    nome: "Feijão Tropeiro",
    imagem: feijaoTropeiroImg,
    comentario: "O melhor tipo de feijão.",
    autor: "Autor: Claudivino"
}

// sobremesas

const coberturaChocolateCartaz = {
    nome: "Calda de Chocolate",
    imagem: coberturaChocolateImg,
    comentario: "Perfeito para um bolo.",
    autor: "Autor: Italo"
};

const sorveteCartaz = {
    nome: "Sorvete",
    imagem: sorveteImg,
    comentario: "Faça seu próprio sorvete.",
    autor: "Autor: Italo"
};

export const pratos = [ salpicaoCartaz, feijaoTropeiroCartaz ];

export const lanches = [ bolinhoArrozCartaz, pamonhaFritaCartaz, paoQueijoCartaz, boloFubaCartaz ];

export const sobremesas = [ coberturaChocolateCartaz, sorveteCartaz ];
