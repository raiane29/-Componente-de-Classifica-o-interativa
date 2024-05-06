import './Textos.css'

const Textos = ({h1, p}) =>{
    return(
        <div>
            <h1 className="H1">{h1}</h1>
            <p>{p}</p>
        </div>
    )
}

export default Textos