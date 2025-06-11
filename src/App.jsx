import {Ejercicio01} from "./components/Ejercicio"
import {Agragarusuario} from "./components/Agragarusuario"
import {Botonespractica} from "./utils/Botonespractica"
import { Ejercicio2 } from "./components/Ejercicio2"

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-2 text-center alert alert-success">
              hola
            </h1>
          </div>
        </div>
        
        <Ejercicio01/>
        <Agragarusuario/>
        <Botonespractica/>
        <Ejercicio2/>
      </div>
    </>
  )
}

export default App