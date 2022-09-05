




const articulosStock = [
    { id: 1 , nombre: " london", tipo:"cinto", color:" rojo" , precio:1200, img: './imagenes/cinto2.jpg'  },
    { id: 2 , nombre: " madrid", tipo:"cartera", color:" rojo croco" , precio:6200  , img: './imagenes/bandolera.jpg'  },
    { id: 3 , nombre: " dallas", tipo:"bandolera", color:" verde ingles" , precio:3200 ,  img: './imagenes/cinto1.jpg'  },
    { id: 4 , nombre: " grecia", tipo:"pulsera", color:" lima" , precio:1200 ,  img: './imagenes/cinto2.jpg'  },
    { id: 5 , nombre: " holly", tipo:"cinto", color:" negro" , precio:1600 , img: './imagenes/cinto2.jpg'  },
    { id: 6 , nombre: " greta", tipo:"cartera", color:" suela croco" , precio:7200 , img: './imagenes/bandoleranaranja.jpg' }
    


]

let  carritoArticulos = [];

///// ELEMENTOS DEL HTML
const main = document.getElementById('main');
const productosElegidosCarrito =document.getElementById('productosElegidos');

const precioTotal = document.getElementById('productosElegidos')


 // RECORREMOS LAS CARDS DE LOS ARTICULOS Y LAS CREAMOS
articulosStock.forEach((item) =>{
    const divArticulos = document.createElement('div')
     divArticulos.classList.add('div-item')
     divArticulos.innerHTML =  `
     <img src=${item.img} class="img" >
    <p> Nombre: ${item.nombre}</p>
    <p> Tipo: ${item.tipo}</p>
    <p> Color:${item.color}</p>
    <p>Precio: ${item.precio}</p>
    <button id="sumar${item.id}" class="btn1">COMPRAR</button>
    
    `

    main.appendChild(divArticulos)
   
  const botonCompra = document.getElementById(`sumar${item.id}`) 
    
   botonCompra.addEventListener('click', () =>{
       sumarArticulo(item.id)
      
   })



})

const eliminarArticulo = (prodId) => {

   const articulosEliminar = articulosStock.filter(prod =>prodId == prod.id)
   console.log(articulosEliminar)
 
  }

// 
const sumarArticulo = (itemId) => {
    const articulo = articulosStock.find((item) => item.id === itemId)
    carritoArticulos.push(articulo)
    console.log(carritoArticulos)


    mostrarCarrito()
  }

  // Recorre el carrito para mostrar los elementos seleccionados
const mostrarCarrito = () => {
   
    carritoArticulos.forEach((prod) =>{
        const divArticulosCarrito = document.createElement('div')
         divArticulosCarrito.classList.add('carrito-final')
         divArticulosCarrito.innerHTML =  `
        
        <li> Nombre: ${prod.nombre} </li>
        <li> Tipo: ${prod.tipo}</li>
        <li> Color:${prod.color}</li>
        <li> Precio: ${prod.precio}</li>
      
        <button id="eliminar(${prod.id})" class="btn">ELIMINAR </button>
        `


        productosElegidosCarrito.appendChild(divArticulosCarrito)
   
        const botonEliminarElemento = document.getElementById(`eliminar(${prod.id})`) 
        botonEliminarElemento.addEventListener('click', () =>{
            eliminarArticulo(prod.id)
           divArticulosCarrito.innerHTML=" " 
           

          
          
        })

  
  
  
    })
  

}