import React from 'react'

export default function About(props) {
    return (
        <>
            <div className={`my-4 alert custom-${props.mode}`} role="alert">
                <center><strong><h3>Provided below is the information about all the buttons in this website.</h3></strong></center>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed custom-${props.mode} ${props.mode==='dark'?"accordion-after-inverter":""}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Convert to Uppercase</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body custom-white">
                            This button will transform the content of the text-box into upper case.The lowercase alphabets will be converted into uppercase and the rest will remain unchanged.If you select a specific area of text then the changes will only affect those selected text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed custom-${props.mode} ${props.mode==='dark'?"accordion-after-inverter":""}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Convert to Lowercase</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body custom-white">
                            This button will transform the content of the text-box into lower case.The uppercase alphabets will be converted into lowercase and the rest will remain unchanged.If you select a specific area of text then the changes will only affect those selected text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed custom-${props.mode} ${props.mode==='dark'?"accordion-after-inverter":""}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Copy to Clipboard</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body custom-white">
                            This button will copy the content of the text-box onto user's clipboard.If you select a specific area of text then only the selected content will be copied to your clipboard.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed custom-${props.mode} ${props.mode==='dark'?"accordion-after-inverter":""}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <strong>Clear text</strong>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body custom-white">
                            This button will clear all the text inside the text-box and will make text-box empty.If you select a specific area of text then this button will only clear the selected part of the text-box while the rest text will remain unchanged.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed custom-${props.mode} ${props.mode==='dark'?"accordion-after-inverter":""}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <strong>Convert to Binary</strong>
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body custom-white">
                            This button will convert all the text in the text-box into binary form.Binary form is the technique of representing data in the form of 0's and 1's.Each character can be represented by 1 byte or 8 bits.After the binary conversion,your text will be converted in the form of 8 binary bits representing a single character and each of these group of 8 bits is seperated by a single space.You can extract your text again by mapping the decimal conversion of these binary bits with correspoding ASCII values.If you select a specific region of text then this button will only convert that area of text into binary bits.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
