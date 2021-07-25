import React from 'react'

const ProdutoTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Preço</th>
        <th>Quantidade Estoque</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {props.produtos.length > 0 ? (
        props.produtos.map(produto => (
          <tr key={produto.id}>
            <td>{produto.name}</td>
            <td>{produto.preco}</td>
            <td>{produto.qtdEstoque}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(produto)
                }}
                className="button muted-button"
              >
                Editar
              </button>
              <button
                onClick={() => props.deleteProduto(produto.id)}
                className="button muted-button"
              >
                Deletar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Nenhum Produto</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ProdutoTable
