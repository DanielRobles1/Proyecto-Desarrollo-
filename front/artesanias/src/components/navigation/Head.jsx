import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; 
import 'daisyui/dist/full.css'; 

const Head = () => {
  return (
    <div className="navbar bg-base-100 w-full">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/">Artesanías de Oaxaca</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="nav-link" to="/gg">Nosotros</Link>
          </li>
          <li>
            <Link className="nav-link" to="#">Tendencias</Link>
          </li>
          <li className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost">
              Dropdown
            </div>
            <ul className="dropdown-content menu p-2 bg-base-100 rounded-box w-52">
              <li><Link className="dropdown-item" to="/regispro">Agregar producto</Link></li>
              <li><Link className="dropdown-item" to="#">Productos</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="#">Eliminar Producto</Link></li>
            </ul>
          </li>
          <li>
            <Link className="nav-link" to="/login">Iniciar Sesión</Link>
          </li>
          <li>
            <Link className="nav-link" to="/register">Registrarse</Link>
          </li>
        </ul>
        
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <Link className="btn btn-primary btn-block" to="/cart">Ver carrito</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className="justify-between" to="/profile">
                Perfil
                <span className="badge">Nuevo</span>
              </Link>
            </li>
            <li><Link to="/settings">Configuraciones</Link></li>
            <li><Link to="/logout">Cerrar sesión</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Head;