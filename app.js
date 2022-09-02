




//// ARTICULOS
const articulosStock = [
    { id: 1 , nombre: " london", tipo:"cinto", color:" rojo" , precio:1200, img: './imagenes/cinto2.jpg'  },
    { id: 2 , nombre: " madrid", tipo:"cartera", color:" rojo croco" , precio:6200  , img: './imagenes/bandolera.jpg'  },
    { id: 3 , nombre: " dallas", tipo:"bandolera", color:" verde ingles" , precio:3200 ,  img: './imagenes/cinto1.jpg'  },
    { id: 4 , nombre: " grecia", tipo:"pulsera", color:" lima" , precio:1200 ,  img: './imagenes/cinto2.jpg'  },
    { id: 5 , nombre: " holly", tipo:"cinto", color:" negro" , precio:1600 , img: './imagenes/cinto2.jpg'  },
    { id: 6 , nombre: " greta", tipo:"cartera", color:" suela croco" , precio:7200 , img: './imagenes/bandoleranaranja.jpg'  }
]







///// ELEMENTOS DEL HTML
const main = document.getElementById('main')
const productosElegidosCarrito =document.getElementById('productosElegidos')

const precioTotal = document.getElementById('productosElegidos')

let  carritoArticulos = []

articulosStock.forEach((item) =>{
    const divArticulos = document.createElement('div')
     divArticulos.classList.add('div-item')
     divArticulos.innerHTML =  `
     <img src=${item.img} class="img" >
    <p> Nombre: ${item.nombre}</p>
    <p> Tipo: ${item.tipo}</p>
    <p> Color:${item.color}</p>
    <p>Precio: ${item.precio}</p>
    <button id="sumar${item.precio}" class="btn1">COMPRAR</button>
    
    `

    main.appendChild(divArticulos)
   
    const botonCompra = document.getElementById(`sumar${item.precio}`) 
    
   botonCompra.addEventListener('click', () =>{
       sumarArticulo(item.id)
      
   })



})

const eliminarArticulo = (itemId) => {
    const articulo = carritoArticulos.find((item) => item.id === itemId)
    const indice = carritoArticulos.indexOf(articulo)
    carritoArticulos.splice(indice,1)

    mostrarCarrito()
  }


const sumarArticulo = (itemId) => {
    const articulo = articulosStock.find((item) => item.id === itemId)
    carritoArticulos.push(articulo)
    console.log(articulo)

    mostrarCarrito()
  }

  
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
          
            eliminarArticulo();
        })

  
  
  
    })
  

}