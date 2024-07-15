import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import './css/menu.css'
import './css/receitas.css'

import livroReceitas from './assets/carrossel/livro-receitas.jpg';
import mesaPosta from './assets/carrossel/mesa-posta.jpg';
import logo from './assets/logos/receitas-logo.png';
import seta from './assets/carrossel/seta.png';
import slide from './js/slide';
import mostrarReceita from './js/mostrarReceita'

import { Navegacao } from './Navegacao';
import { ItemReceitas } from './Item-receitas';
import { Receitas } from './Receitas'
import { pratos, sobremesas, lanches } from './js/receitas-card';
import { receitasLanches, receitasPratos, receitasSobremesas } from './js/receitas'

function App() {
  const [count, setCount] = useState(0);

  const paginasMenu = [pratos, sobremesas, lanches];
  const receitas = [receitasPratos, receitasSobremesas, receitasLanches];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  useEffect(() => {
    slide.init();
    mostrarReceita.init();
  }, [])

  return (
    <>
      <div className="page-content">
        <header className='navegation'>
          <div className="logos">
            <img className='logo-receitas' src={logo} alt="Logo da pagina Receitas Juliano's" />
            <a className='nome-pagina' href="#slide">Receitas Juliano's</a>
          </div>
          <div className="navegation-links">
            <a href="#slide">Início</a>
            <a href="#receitas">Receitas</a>
          </div>
        </header>

        <section id='slide' className="slider">
          <div className="carrossel">
            <input type="radio" name='btn-radio' id='radio1' />
            <input type="radio" name='btn-radio' id='radio2' />

            <div className="imagens">
              <button id='btn-voltar' onClick={slide.voltarImg} className='btn-seta btn-voltar'> <img src={seta} alt="seta de voltar" /> </button>
              <img className="imagem-carrossel selecionada" src={livroReceitas} alt="" />
              <img className='imagem-carrossel' src={mesaPosta} alt="" />
              <button id='btn-avancar' onClick={slide.avancarImg} className='btn-seta'> <img src={seta} alt="seta de avançar" /> </button>
            </div>

            <div className="nav-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
            </div>

            <div className="nav-manual">
              <label htmlFor="radio1" id='btn-radio1' className='manual-btn'></label>
              <label htmlFor="radio2" id='btn-radio2' className='manual-btn'></label>
            </div>
          </div>
        </section>
        <section id="receitas">
          <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />
          <div className="menu">
            {paginasMenu[paginaSelecionada].map((item, index) => <ItemReceitas key={index} nome={item.nome} comentario={item.comentario} autor={item.autor} imagem={item.imagem} />)}
          </div>
        </section>
      </div>
      <div className="container-receitas">
        {receitas[paginaSelecionada].map((item, index) => <Receitas key={index} nome={item.nome} ingredientes={item.ingredientes} preparo={item.preparo} imagem={item.imagem} />)}
      </div>
    </>
  )
}

export default App
