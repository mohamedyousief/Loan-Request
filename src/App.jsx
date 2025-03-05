import LoanForm from "./components/LoanForm";
import { StyleCon } from "./contexts/StylesContext";
export default function App() {
  return (
    <div className="container" style={
      {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0d002d",
      }
    }>
      <StyleCon.Provider value={{
        styleDiv: {
        display: "flex",
        gap:"5px",
        width: "600px",
        marginTop: "20px",
        padding: "10px",
        alignItems:"center"
    },
    styleInput:{
        width: "85%",
        outline: "none",
        border: "none",
        padding: "10px",
        fontSize:"17px"
    },
    styleLable :{
        color: "white",
        fontSize: "20px",
        width: "15%"
    }
      }}>
        <LoanForm />
      </StyleCon.Provider>
      
    </div>
    
  )
}