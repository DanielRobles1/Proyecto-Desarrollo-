import React, { Component } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; 
import 'daisyui/dist/full.css'; 

export default class Agregarp extends Component {
  state = {
    productos: [],
    nuevoProducto: {
      name: '',
      precio: '',
      descripcion: '',
      imagen: '', // campo para la URL de la imagen
    },
  };

  async componentDidMount() {
    await this.fetchProductos();
  }

  fetchProductos = async () => {
    const res = await axios.get('http://localhost:4000/api/producto');
    this.setState({ productos: res.data });
    console.log(this.state.productos);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      nuevoProducto: {
        ...prevState.nuevoProducto,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/producto', this.state.nuevoProducto);
      this.setState({ 
        nuevoProducto: { name: '', precio: '', descripcion: '', imagen: '' } // Resetear formulario
      });
      await this.fetchProductos(); // Obtener la lista actualizada de productos
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  };

  render() {
    return (
      <div className="container mt-5" style={{
        backgroundImage: "url('https://img.freepik.com/fotos-premium/fondo-acuarela-color-transiciones-color-suaves-ilustracion-fondos-carteles-diseno-creativo_888684-8000.jpg?w=2000')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        color: 'black'
      }}>
        <h1 className="mb-4 text-center" style={{ fontSize: '2.5rem', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)' }}>Agregar Producto</h1>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label style={{ fontSize: '1.2rem', fontWeight: '600' }}>Nombre:</label>
                <input
                    type="text"
                    className="form-control shadow-sm"
                    name="name"
                    value={this.state.nuevoProducto.name}
                    onChange={this.handleChange}
                    required
                    style={{
                        borderRadius: '5px',
                        border: '1px solid #007bff',
                        transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#0056b3'}
                    onBlur={(e) => e.target.style.borderColor = '#007bff'}
                />
            </div>
            <div className="form-group">
                <label style={{ fontSize: '1.2rem', fontWeight: '600' }}>Precio:</label>
                <input
                    type="number"
                    className="form-control shadow-sm"
                    name="precio"
                    value={this.state.nuevoProducto.precio}
                    onChange={this.handleChange}
                    required
                    style={{
                        borderRadius: '5px',
                        border: '1px solid #007bff',
                        transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#0056b3'}
                    onBlur={(e) => e.target.style.borderColor = '#007bff'}
                />
            </div>
            <div className="form-group">
                <label style={{ fontSize: '1.2rem', fontWeight: '600' }}>Descripción:</label>
                <textarea
                    className="form-control shadow-sm"
                    name="descripcion"
                    value={this.state.nuevoProducto.descripcion}
                    onChange={this.handleChange}
                    required
                    style={{
                        borderRadius: '5px',
                        border: '1px solid #007bff',
                        transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#0056b3'}
                    onBlur={(e) => e.target.style.borderColor = '#007bff'}
                />
            </div>
            <div className="form-group">
                <label style={{ fontSize: '1.2rem', fontWeight: '600' }}>URL de la Imagen:</label>
                <input
                    type="text"
                    className="form-control shadow-sm"
                    name="imagen"
                    value={this.state.nuevoProducto.imagen}
                    onChange={this.handleChange}
                    required
                    style={{
                        borderRadius: '5px',
                        border: '1px solid #007bff',
                        transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#0056b3'}
                    onBlur={(e) => e.target.style.borderColor = '#007bff'}
                />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-3" style={{ fontSize: '1.2rem', fontWeight: '600' }}>Agregar Producto</button>
        </form>
        
        <h2 className="mt-5 text-center" style={{ fontSize: '2rem', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)' }}>Lista de Productos</h2>
        
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th>Imagen</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.productos.map((producto) => (
                <tr key={producto._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>{producto.name}</td>
                  <td>${producto.precio}</td>
                  <td>{producto.descripcion}</td>
                  <td>
                    <img
                      src={producto.imagen}
                      alt={producto.name}
                      style={{ width: '50px', height: '50px', borderRadius: '5px' }}
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/50"; }}
                    />
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Detalles</button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th>Imagen</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
