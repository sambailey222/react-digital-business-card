import './App.css';

function Info(props) {
    return (
        <div className="Info">
            <h3 className="info--title">{props.title}</h3>
            <p className="info--text">{props.text}</p>
        </div>
    );
}

export default Info;