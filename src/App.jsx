import Requirements from "./components/Requirements"
import "./style/style.css"
import Nav from "./components/Nav"
import ChangeReq from "./components/ChangeReq"
import IterReq from "./components/IterReq"
import InputInteresados from "./components/InputInteresados"

const App = () => {
    return (
        <>
        <Nav />
        <Requirements />
        <p><strong>Cambios en requerimientos globales</strong></p>
        <ChangeReq />
        <InputInteresados />
        <IterReq />
        </>
    )
    }
    
export default App;

