import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Clientes from '../../assets/imagens/customer.png'
import Produtos from '../../assets/imagens/product.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
    
      <ul className='menuList'>
     
          <Link to='/'>
          <img src={Clientes} alt="" />
          <p>Clientes</p> </Link>
          <Link to='/produtos'>
          <img src={Produtos} alt="" />
          <p>Produtos</p> </Link>
       
        
      </ul>
  
  
      
    </div>
  )
}

export default Sidebar
