import { useContext } from "react";
import { InputContext } from "../contexts/InpContext";
import { StyleCon } from "../contexts/StylesContext";
const InputComp = () => {
    const inputData = useContext(InputContext)
    const styleContext = useContext(StyleCon)
    
    const styleDive = {
        display: "flex",
        gap: "5px",
        width: "600px",
        marginTop: "20px",
        padding: "10px",
        alignItems: "center"
    };
    

    return (
        <div style={styleDive}>
            <label htmlFor="" style={styleContext.styleLable}>
                {inputData.inpName}
            </label>
            <input type="text" value={inputData.inpVal} onChange={(event) => {
                inputData.inpHandel(event.target.value)
            }} style={styleContext.styleInput} />
        </div>
    );
}

export default InputComp
