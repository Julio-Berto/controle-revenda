import './App.css'
import Header from './components/Header'
import SummaryCard from './components/SummaryCard'
import ProductCard from './components/ProductCard'
import { useState } from 'react'

function App() {


  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Produto 1', valorCompra: 100, valorVenda: 150, status: 'disponível', quantidade: 10 },
    { id: 2, nome: 'Produto 2', valorCompra: 200, valorVenda: 250, status: 'disponível', quantidade: 5 }
  ]);

  //estados
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorCompra, setValorCompra] = useState('');
  const [valorVenda, setValorVenda] = useState('');
  const [status, setStatus] = useState('disponível');
  const [quantidade, setQuantidade] = useState('');

  //outros dados e funções
  const novoId = produtos.length + 1;
  const novoProduto = { id: novoId, nome: nomeProduto, valorCompra: Number(valorCompra), valorVenda: Number(valorVenda), status: status, quantidade: Number(quantidade) };


  function adicionarProduto() {
    if (nomeProduto.trim() === '' || valorCompra === '' || valorVenda === '' || quantidade === '') {
      alert('Por favor, preencha todos os campos antes de adicionar o produto.');
      return;
    }
    if (Number(valorCompra) <= 0 || Number(valorVenda) <= 0 || Number(quantidade) <= 0 || !Number.isInteger(Number(quantidade))) {
      alert('Por favor, insira valores válidos para compra, venda e quantidade.');
      return;
    }
    setProdutos([...produtos, novoProduto]);

    // Limpar os campos após adicionar o produto
    setNomeProduto('');
    setValorCompra('');
    setValorVenda('');
    setStatus('disponível');
    setQuantidade('');
  }

  const totalInvestido = produtos.reduce((acc, produto) => acc + (produto.valorCompra * produto.quantidade), 0);
  const totalVendido = produtos.reduce((acc, produto) => {
    return acc + (
      produto.status === 'Vendido'
        ?
        produto.valorVenda * produto.quantidade
        : 0
    )
  }, 0);
  const lucro = produtos.reduce((acc, produto) => {
    return acc + (
      produto.status === 'Vendido'
        ?
        (produto.valorVenda - produto.valorCompra) * produto.quantidade
        : 0
    )
  }, 0);
  const estoque = produtos.reduce((acc, produto) => {
    return acc + (
      produto.status === 'disponível'
        ?
        produto.quantidade
        : 0
    )
  }, 0);


  function marcarComoVendido(id) {
    const produtosAtualizados = produtos.map((produto) => {
      if (produto.id === id) {
        return { ...produto, status: 'Vendido' };
      }
      return produto;
    });
    setProdutos(produtosAtualizados);
  }
  return (
    <>

      <input type="text" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} placeholder="Nome do Produto" className="border p-2 rounded m-4" />

      <input type="number" value={valorCompra} onChange={(e) => setValorCompra(e.target.value)} placeholder="Valor de Compra" className="border p-2 rounded m-4" />

      <input type="number" value={valorVenda} onChange={(e) => setValorVenda(e.target.value)} placeholder="Valor de Venda" className="border p-2 rounded m-4" />

      <select value={status} onChange={(e) => setStatus(e.target.value)} className="border p-2 rounded m-4">
        <option value="disponível">Disponível</option>
        <option value="Vendido">Vendido</option>
      </select>

      <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} placeholder="Quantidade" className="border p-2 rounded m-4" />


      <Header titulo="Controle de Revenda" />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <SummaryCard titulo="Total investido" valor={`R$ ${totalInvestido.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
        <SummaryCard titulo="Total vendido" valor={`R$ ${totalVendido.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
        <SummaryCard titulo="Lucro" valor={`R$ ${lucro.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
        <SummaryCard titulo="Estoque" valor={estoque} />
      </section>

      <section>
        {
          produtos.map((produto) => (
            <ProductCard key={produto.id}
              produto={produto}
              onVender={marcarComoVendido}
            />

          )
          )}

      </section >

      <button onClick={adicionarProduto} className="bg-blue-500 text-white p-2 rounded m-4" >Adicionar Produto</button>
    </>
  )
}

export default App
