import React, { useState, useEffect } from 'react'

const EditProdutoForm = props => {
  const [ produto, setProduto ] = useState(props.currentProduto)

  useEffect(
    () => {
      setProduto(props.currentProduto)
    },
    [ props ]
  )


  const handleInputChange = event => {
    const { name, value } = event.target

    setProduto({ ...produto, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateProduto(produto.id, produto)
      }}
    >
      <label>Name do Produto</label>
      <input type="text" name="name" value={produto.name} onChange={handleInputChange} />
      <label>Preço</label>
      <input type="number"  required name="preco" value={produto.preco} onChange={handleInputChange} />
      <label>Quantidade Estoque</label>
      <input type="number"  required name="qtdEstoque" value={produto.qtdEstoque} onChange={handleInputChange} />
    
      <button>Atualizar Produto</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancelar
      </button>
    </form>
  )
}

export default EditProdutoForm
