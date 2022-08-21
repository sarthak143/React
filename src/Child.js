function Child(props) {
    const childHandler = (event) => {
        props.ParentCallback(event.target.value);

    };

    return (<div>
        <p>{props.s}</p>
        <input onChange={childHandler}></input>
        {/* <button onClick={onTrigger}>Click me</button> */}
    </div>);
}

export default Child;