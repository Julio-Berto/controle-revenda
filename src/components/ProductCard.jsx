function ProductCard({ produto, onVender }) {
    const formatarMoeda = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const produtoLucro = produto.valorVenda - produto.valorCompra;
    return (
        <div className="bg-white shadow-md rounded-lg p-4" >
            <h2 className="text-lg font-semibold">{produto.nome}</h2>
            <p>Valor de Compra: {formatarMoeda.format(produto.valorCompra)}</p>
            <p>Valor de Venda: {formatarMoeda.format(produto.valorVenda)}</p>
            <p>Status: {produto.status}</p>
            <p>Quantidade: {produto.quantidade}</p>
            <p>Lucro previsto: {formatarMoeda.format(produtoLucro)}</p>
            <button onClick={() => onVender(produto.id)} className="bg-green-500 text-white p-2 rounded m-2" disabled={produto.status === 'Vendido'}>Marcar como Vendido</button>
        </div >
    )
}

export default ProductCard