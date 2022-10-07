import Requirements from "./components/Requirements"
import "./style/style.css"
import Nav from "./components/Nav"
import ChangeReq from "./components/ChangeReq"
import IterReq from "./components/IterReq"
import InputInteresados from "./components/InputInteresados"
import InputRiesgo from "./components/InputRiesgo"
import nivelRiesgo from "./assets/nivelRiesgo.jpg"
import Image from 'react-bootstrap/Image'

const App = () => {
    return (
        <>
        <Nav />
        <Requirements />
        <p><strong>Cambios en requerimientos globales</strong></p>
        <ChangeReq />
        <p><strong>Gestión de interesados</strong></p>
        <p><strong>¿Hubo cambios en el documento de registro de interesados del proyecto?</strong></p>
        <InputInteresados />
        <p><strong>Gestión de riesgos</strong></p>
        <p><strong>¿Hubo cambios en el documento de gestión de riesgos del proyecto?</strong></p>
        <InputRiesgo />
        <center>
        <Image
        style={{ marginTop: "30px" }}
        width={600}
        alt="171x180"
        src={nivelRiesgo}
      /></center>
        <IterReq />
        </>
    )
    }
    
export default App;

