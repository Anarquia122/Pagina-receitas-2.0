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

const bolinhoArroz = {
    nome: "Bolinho de Arroz",
    imagem: bolinhoArrozImg,
    ingredientes: [
        "2 xícaras de chá com arroz cozido",
        "1/2 xícara de chá com leite",
        "1 colher de sopa com fermento em pó",
        "1/2 xícara de chá com farinha de trigo",
        "óleo para fritar",
        "1/2 xícara de chá com queijo ralado",
        "2 colheres de sopa com cheiro-verde picado",
        "1/2 xícara de chá com amido de milho",
        "3 ovos"
    ],
    preparo: "Em um recipiente, misture todos os ingredientes até criar uma massa firme e encorpada. Molde os bolinhos e frite-os no óleo quente, até que fiquem dourados. Por fim, escorra sobre papel absorvente."
};

const pamonhaFrita = {
    nome: "Pamonha Frita",
    imagem: pamonhaFritaImg,
    ingredientes: [
        "12 espigas de milho verde",
        "1/2 colher de sopa com tempero (alho e sal)"
    ],
    preparo: "Rale os milhos para que ele vire uma massa. Adicione o tempero, misture bem e deixe descansar por 1 hora. Em uma frigideira, adicione 4 colheres de óleo, coloque 1 colher bem cheia de pamonha e espalhe com um garfo ou uma colher. Frite de um lado e de outro, como um bife. Então, espere esfriar e aproveite."
};

const paoQueijo = {
    nome: "Pão de Queijo",
    imagem: paoQueijoImg,
    ingredientes: [
        "1 copo de água",
        "1 copo de óleo no vinco",
        "1 pitada de sal",
        "3 copos de polvilho",
        "1 copo e meio de queijo"
        ],
    preparo: "Colocar a água, o óleo e sal para ferver em seguida escaldar o polvilho. Deixe esfriar, pode colocar o queijo em seguida acrescentar os ovos e misture bem. Depois unte a mão com óleo e molde a massa em formato redondo e leve ao forno em temperatura média poe 40 minutos."
};

const boloFuba = {
    nome: "Bolo de fubá",
    imagem: boloFubaImg,
    ingredientes: [
        "2 xícaras de fubá",
        "2 xícaras de açúcar",
        "1 colher de chá com sal",
        "1 colher de fermento em pó",
        "2 xícaras de leite",
        "1 xícara de óleo",
        "1 colher de erva doce",
        "4 ovos (claras em neve)"
    ],
    preparo: "Mistura o fubá e o açúcar já na panela, depois o óleo e mistura, coloca o leite por último e cozinhe até soltar da panela. Deixe esfriar e coloque as gemas, bata as claras em neve. Pode bater um pouco na batedeira e misturar delicadamente a clara em neve com o fermento. Por fim misture o açúcar com a canela e jogue por cima."
};

// pratos

const salpicao = {
    nome: "Salpicão",
    imagem: salpicaoImg,
    ingredientes: [
        "500g de peito de frango desfiado",
        "2 cenouras",
        "1 lata de milho verde",
        "250g de maionese",
        "1 caixa de creme de leite",
        "1 cebola pequena ralada",
        "2 dentes de alho",
        "batata palha"
    ],
    preparo: "Refogar o frango com cebola, alho e sal. Após, acrescente a cenoura ralada, milho verde, maionese e creme de leite. Mexa bem até que tudo fique homogêneo. Coloque em uma refratária coloque batata palha e pronto."
};

const feijaoTropeiro = {
    nome: "Feijão Tropeiro",
    imagem: feijaoTropeiroImg,
    ingredientes: [
        "1kg de feijão",
        "250g de bacon",
        "1kg de linguiça de porco",
        "500g de linguiça calabresa",
        "3 bananas terra",
        "farinha de mandioca",
        "cebola",
        "alho",
        "cheiro verde",
        "sal"
    ],
    preparo: "Cozinhe o Feijão. Frite o bacon até dourar. Retire o bacon, frite a linguiça de porco, depois, a calabresa. Reserve. Frite a banana e, em outra panela, frite a cebola e o alho, refogue a linguiça e o bacon, acrescente sal, misture o feijão e as bananas, apague o fogo e acrescente aos poucos a farinha de mandioca, mexa tudo muito bem e está pronto."
};

// sobremesas

const coberturaChocolate = {
    nome: "Calda de Chocolate",
    imagem: coberturaChocolateImg,
    ingredientes: [
        "3 colheres de chocolate em pó",
        "1 caixa de leite condensado",
        "1 colher de manteiga",
        "leite"
    ],
    preparo: "Em uma panela adicione o leite condensado e o leite, a quantidade é igual a metade da caixa do leite condensado, adicione a manteiga e o chocolate em pó e mexa por 2 minutos em fogo alto e mais 13 minutos em fogo médio. Após esse tempo deixe esfriar um pouco e aproveite."
};

const sorvete = {
    nome: "Sorvete",
    imagem: sorveteImg,
    ingredientes: [
        "2 caixas de creme de leite",
        "1 caixa de leite condensado",
        "sabor de sua preferência"
    ],
    preparo: "Em uma batedeira coloque todo o creme de leite e deixe bater até dobrar a quantidade. Após isso, vai acrescentando o leite condensado enquanto continua batendo o creme de leite. Coloque o sabor de sua preferência (chocolate em pó por exemplo) e deixe bater por mais um tempo. por fim coloque a mistura em uma vasilha e leve ao congelador por cerca de 6 horas ou até tomar consistência."
};

export const receitasPratos = [ salpicao, feijaoTropeiro ];

export const receitasSobremesas = [ coberturaChocolate, sorvete ];

export const receitasLanches = [ bolinhoArroz, pamonhaFrita, paoQueijo, boloFuba ];