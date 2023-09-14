import React, { useState } from 'react';
export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const convertToUpperCase = () => {
        let textArea = document.getElementById("textArea");
        if (textArea.selectionStart !== textArea.selectionEnd) {
            let newText = textArea.value.substring(0, textArea.selectionStart);
            newText += textArea.value.substring(textArea.selectionStart, textArea.selectionEnd).toUpperCase();
            newText += textArea.value.substring(textArea.selectionEnd);
            setText(newText);
        }
        else setText(text.toUpperCase());
    }
    const convertToLowerCase = () => {
        let textArea = document.getElementById("textArea");
        if (textArea.selectionStart !== textArea.selectionEnd) {
            let newText = textArea.value.substring(0, textArea.selectionStart);
            newText += textArea.value.substring(textArea.selectionStart, textArea.selectionEnd).toLowerCase();
            newText += textArea.value.substring(textArea.selectionEnd);
            setText(newText);
        }
        else setText(text.toLowerCase());
    }
    const copyText = () => {
        let textArea = document.getElementById("textArea");
        if (textArea.selectionStart !== textArea.selectionEnd) {
            navigator.clipboard.writeText(textArea.value.substring(textArea.selectionStart, textArea.selectionEnd));
        }
        else navigator.clipboard.writeText(text);
    }
    const clearText = () => {
        let textArea = document.getElementById("textArea");
        if (textArea.selectionStart !== textArea.selectionEnd) {
            setText(textArea.value.substring(0, textArea.selectionStart) + textArea.value.substring(textArea.selectionEnd));
        }
        else setText("");
    }
    const convertToBinary = () => {
        function toBinary(i, n) {
            let result = "";
            for (; i < n; i++) {
                let ascii = Number(textArea.value.charCodeAt(i));
                result += ascii.toString(2).padStart(8, '0') + " ";
            }
            return result;
        }
        let textArea = document.getElementById("textArea");
        if (textArea.selectionStart !== textArea.selectionEnd) {
            setText(textArea.value.substring(0, textArea.selectionStart) + " " + toBinary(textArea.selectionStart, textArea.selectionEnd) + textArea.value.substring(textArea.selectionEnd));
        }
        else setText(toBinary(0, textArea.value.length));
    }
    return (
        <>
            <div className="container">
                <div className="mb-4">
                    <label htmlFor="textArea" className="form-label"><h2>{props.heading}</h2></label>
                    <textarea className={`form-control custom-${props.mode}`} id="textArea" rows="12" placeholder="Type here..." value={text} onChange={handleChange}></textarea>
                </div>
                <button className="btn btn-dark mx-1" onClick={convertToUpperCase} disabled={!text.length}>
                    {props.btn1}
                </button>
                <button className="btn btn-dark mx-1" onClick={convertToLowerCase} disabled={!text.length}>
                    {props.btn2}
                </button>
                <button className="btn btn-dark mx-1" onClick={copyText} disabled={!text.length}>
                    {props.btn3}
                </button>
                <button className="btn btn-dark mx-1" onClick={clearText} disabled={!text.length}>
                    {props.btn4}
                </button>
                <button className="btn btn-dark mx-1" onClick={convertToBinary} disabled={!text.length}>
                    {props.btn5}
                </button>
                <h3 className="my-4 mb-3">Your text summary :</h3>
                <div>{text.split(/\s+/g).filter(ele => ele.length).length} words and {text.replace(/\s+/g, "").length} characters</div>
                <h3 className='my-4 mb-3'>Preview :</h3>
                <div>{text.length ? text : "Nothing to preview!"}</div>
            </div>
        </>
    );
}

TextForm.defaultProps = {
    heading: "Enter your text :",
    btn1: "Convert to Uppercase",
    btn2: "Convert to Lowercase",
    btn3: "Copy to Clipboard",
    btn4: "Clear text",
    btn5: "Convert to Binary"
}