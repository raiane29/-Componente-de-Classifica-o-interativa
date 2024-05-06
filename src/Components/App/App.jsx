import Textos from "../Textos/Textos"
import LOGO from '../../../images/star.svg'
import Button from "../Button/Button"
import ButtonFinal from "../ButtonFinal/ButtonFinal"
import './App.css'

const App = () => {
    return(
        <>
        <div className="Caixa">
            <img src={LOGO} />

            <Textos
            h1="How did we do?"
            p="Please let us know how we did with your support requesr.
            All feedback is appreciated to help us improve our offering!
           "/>

        <div className="Buttons">
           <Button/>
           <ButtonFinal/>
        </div>

        </div>
        </>
    )
}

export default App