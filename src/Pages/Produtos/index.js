import React,{useState} from 'react'
import AddProdutoForm from '../../Components/FormProduto/AddProdutoForm'
import EditProdutoForm from '../../Components/FormProduto/EditProdutoForm'
import ProdutoTable from '../../Components/Tables/ProdutoTable'

// import './Produtos.css'

const Produtos = () => {
	// Data
	const produtosData = [
		{ id: 1, name: 'Tania', preco: 23.5, qtdEstoque: 60 },
		{ id: 2, name: 'Craig', preco: 23.5, qtdEstoque: 60  },
		{ id: 3, name: 'Ben', preco: 23.5, qtdEstoque: 60  },
	]

	const initialFormState = { id: null, name: '', preco: null, qtdEstoque: null  }

	// Setting state
	const [ produtos, setProdutos ] = useState(produtosData)
	const [ currentProduto, setCurrentProduto ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addProduto = produto => {
		produto.id = produtos.length + 1;

		localStorage.setItem('@welcome-app/produtos', JSON.stringify({ id: produto.id, name: produto.name, preco: produto.preco, qtdEstoque: produto.qtdEstoque  }) );
		setProdutos([ ...produtos, produto ])
	}

	const deleteProduto = id => {
		setEditing(false)
		localStorage.removeItem('@welcome-app/username',JSON.stringify(produtos.filter(produto => produto.id !== id)) );
		setProdutos(produtos.filter(produto => produto.id !== id))
	}

	const updateProduto = (id, updatedProduto) => {
		setEditing(false)

		setProdutos(produtos.map(produto => (produto.id === id ? updatedProduto : produto)))
	}

	const editRow = produto => {
		setEditing(true)

		setCurrentProduto({ id: produto.id, name: produto.name, preco: produto.preco, qtdEstoque: produto.qtdEstoque  })
	}

  return (
    <div className="gridArea">
			<div className='cntConteudo'>
      	<div >
					{editing ? (
						<>
							<h2>Editar Produto</h2>
							<EditProdutoForm
								editing={editing}
								setEditing={setEditing}
								currentProduto={currentProduto}
								updateProduto={updateProduto}
							/>
						</>
					) : (
						<>
							<h2>Adicionar Produto</h2>
							<AddProdutoForm addProduto={addProduto} />
						</>
					)}
				</div>
				<div className="">
					<h2>Lista de Produtos</h2>
					<ProdutoTable produtos={produtos} editRow={editRow} deleteProduto={deleteProduto} />
				</div>
				</div>
				<br />
				<br />
    </div>
  )
}

export default Produtos
