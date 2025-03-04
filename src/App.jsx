import LoanForm from "./components/LoanForm";
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
      
      <LoanForm />
      
    </div>
    
  )
}