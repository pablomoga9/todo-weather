import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import ProductItem from './ProductItem'
import data from './products.json'
import Button from '@mui/material/Button';

export class ProductList extends Component {

  constructor(props) {
    super(props)

    this.image = React.createRef(); // referencia a la URL imágen
    this.suggestion = React.createRef(); // referencia a la sugerencia

    this.state = {
      products: data, // precarga de [] de productos,
      suggestion: ""
    }
    //this.paintProducts = this.paintProducts.bind(this);

  }

  // paintProducts () {return this.state.products.map(product=><ProductItem data={product}/>)} 
  paintProducts = () => this.state.products.map((product, i) => <ProductItem data={product} key={uuidv4()} delete={() => this.deleteProduct(i)} />)

  deleteProducts = () => this.setState({ products: [] });
  resetProducts = () => this.setState({ products: data }); //recarga inicial

  deleteProduct = (i) => {
    //filter
    const remainingProducts = this.state.products.filter((product, j) => i !== j);
    this.setState({ products: remainingProducts });
  }

  addProduct = (event) => {
    event.preventDefault();
    // const name = prompt("Introduce nombre");
    // const info = prompt("Introduce info del producto");
    // const price = prompt("Introduce precio");

    const name = event.target.name.value;
    const info = event.target.info.value;
    const price = event.target.price.value;

    const image = this.image.current.value;//Leer campo por referencia
    alert(image);

    const newProduct = { name, info, price, image };
    this.setState({ products: [...this.state.products, newProduct] }); // [{},{},{}] ---> [{},{},{},{newProduct}]
  }

  sendMessage = () => {
    // código para enviar los datos al back 
    //... fetch POST al back
    //...
    alert("Sugerencia enviada: " + this.state.suggestion);

    // Vaciar input + state
    this.suggestion.current.value = "";
    this.setState({ suggestion: "" });
  }
  handleChange = () => {
    const suggestion = this.suggestion.current.value; //Leer campo por referencia
    this.setState({ suggestion });
  }

  render() {

    // const products = [
    //   {name:"Tigre de Bengala",info:"botella Moet con Bengala",price:20},
    //   {name:"Corona party",info:"Cubo de 5 coronitas",price:10},
    //   {info:"Botella de absenta con agua",price:40}
    // ]
    return (
      <section className="product-list">
        <h1>Añadir producto</h1>
        <form onSubmit={this.addProduct}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="info">Info:</label>
          <input type="text" id="info" name="info" />
          <label htmlFor="price">Precio:</label>
          <input type="number" id="price" name="price" />
          <label htmlFor="image">URL imágen:</label>
          <input type="url" id="image" name="image" ref={this.image} />
          <Button variant="contained" type="submit" value="Añadir" >Añadir</Button>
        </form>

        <h1>Productos para la fiesta</h1>
        {this.paintProducts()}

        {this.state.products.length ?
          <Button variant="contained" onClick={this.deleteProducts}>Borrar productos</Button>
          : ""}

        <Button variant="contained" onClick={this.addProduct}>Añadir producto</Button>
        <Button variant="contained" onClick={this.resetProducts}>Recargar productos</Button>

        {/* {products.map(product=><ProductItem data={product}/>)} */}

        {/* <ProductItem data={products[0]}/>
            <ProductItem data={products[1]}/>
            <ProductItem data={products[2]}/> */}

        {/* <ProductItem name={"Tigre de Bengala"} info={"botella Moet con Bengala"} price={20}/>
            <ProductItem name={"Corona party"} info={"Cubo de 5 coronitas"} price={10}/>
            <ProductItem info={"Botella de absenta con agua"} price={40}/> */}
        <div>
          <h1>Tus sugerencias</h1>
          <input type="text" ref={this.suggestion} onChange={this.handleChange} />
          {this.state.suggestion ? <Button variant="contained" onClick={this.sendMessage}>Enviar</Button> : ""}
        </div>
      </section>
    )
  }
}

export default ProductList