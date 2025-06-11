export const Ejercicio2 = () => {
  // logica de componente
  // variable / constante
  // hooks
  // funciones 
  const nombreProducto = 'Smart TV 90´';

  function agregarAlCarrito (){
    console.log ('El producto ',nombreProducto, ' se agrego al carrito ')
  }

  function eliminarDelCarrito (){
    console.log ('El producto ', nombreProducto, 'Se elimino del carrito' )
  }
    return (
    <>
      <div className="row mt-4">
        <div className="col-12">
            <h2 className="h4 mt-4">
                Ejercicio2 - boton y funciones
                <hr />
            </h2>
        </div>
        <button onClick={agregarAlCarrito} className="w-25 btn btn-primary">
            <i className="bi bi-archive">
                <span className="ms-2">
                    Agregar Ariculo
                </span>
            </i>
        </button>

        <button onClick={eliminarDelCarrito} className="w-25 btn btn-danger">
            <i class="bi bi-trash">
                <span className="ms-2">
                    Eliminar Articulo
                </span>
            </i>
        </button>
      </div>
    </>
  )
}

