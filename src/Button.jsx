const Button = (props) => {
    const { text, clickHendler } = props;

    return (
        <button onClick={clickHendler}>{text}</button>
    )
}

export default Button;