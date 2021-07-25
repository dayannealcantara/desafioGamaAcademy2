import React, { useState } from 'react'

const AddProdutoForm = props => {
	const initialFormState = { id: null, name: '', preco: null, qtdEstoque: null }
	const [ produto, setProduto ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setProduto({ ...produto, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!produto.name || !produto.preco ||!produto.qtdEstoque) return

				props.addProduto(produto)
				setProduto(initialFormState)
			}}
		>
		 <label>Name do Produto</label>
      <input type="text" name="name" value={produto.name} onChange={handleInputChange} />
      <label>Preço</label>
      <input type="number"  required name="preco" value={produto.preco} onChange={handleInputChange} />
      <label>Quantidade Estoque</label>
      <input type="number"  required name="qtdEstoque" value={produto.qtdEstoque} onChange={handleInputChange} />
			<button>Adicionar Produto</button>
		</form>
	)
}

export default AddProdutoForm
