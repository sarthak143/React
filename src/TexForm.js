import { useState } from "react";

function TextForm() {

    const [Text, setText] = useState('efew');

    function OnChangeHandler(event) {
        setText(event.target.value);
    }
    function toUppercase() {
        const newText = Text.toUpperCase();
        setText(newText);
    }

    return (
        <>

            <h1>Word counter</h1>
            <div className="mb-3">
                <label htmlFor="text1" className="form-label">Example textarea</label>
                <textarea className="form-control" maxlength="256" value={Text} onChange={OnChangeHandler} id="text1" rows="3"></textarea>
            </div>
            <button onClick={toUppercase}> to uppercase</button>
            <p> {Text.length ? Text.split(' ').length : 0} words and {256 - Text.length}characters left</p>
            <p> {0.004 * Text.split(' ').length} minute read</p>
            <p>{Text}</p>
        </>
    );
}

export default TextForm;