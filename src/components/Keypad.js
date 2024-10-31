// Code Keypad Component Here

function Keypad (){
    function onchange(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={onchange}></input>
        </div>
    )
}

export default Keypad;