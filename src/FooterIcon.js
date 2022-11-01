import './App.css';

function FooterIcon(props) {
    return (
    <a href={props.link} target="_blank">
        <img src={props.image}/>
    </a>
    );
}

export default FooterIcon;