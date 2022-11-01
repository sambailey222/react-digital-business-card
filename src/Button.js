import './App.css';

function Button(props) {
    return (
    <a href={props.link} target="_blank">
        <button className={`Btn ${props.className}`}>
        <img src={props.image}/>
        {props.name}</button>
    </a>
    );
}

export default Button;