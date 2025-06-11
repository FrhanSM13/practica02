 import {Iniciarsesion} from "./Iniciarsesion"
 import {Crearcuenta} from "./Crearcuenta"

 export const Botonespractica = () => {
  return (
    <div className="col-12 d-flex flex-column flex-md-row bg-info ">
        <Iniciarsesion/>
        <Crearcuenta/>
    </div>
  )
}

