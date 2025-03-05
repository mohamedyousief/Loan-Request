import { useState , useEffect ,useContext } from "react";
import PopUp from "./PopUp";
import InputComp from "./InputComp";
import { InputContext } from "../contexts/InpContext";
import { StyleCon } from "../contexts/StylesContext";


const LoanForm = () => {
  const styleContext = useContext(StyleCon);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    ageD: "",
    isEmpeloyee: false,
    salarey:""
  });

  const [isFill, setIsFill] = useState(false);

  const [clickSubmit, setClickSubmit] = useState(false);
    
  const [massege,setMassege] = useState("the form has been submitted successfully")

  const handelNameInput = (event) => {
    setFormData({...formData,name:event })
  }
 
  
  const handelPhoneNumber = (event) => {
    setFormData({...formData,number:event})
    }
    
  
  const handelAgeInput = (event) => {
    setFormData({...formData,ageD:event })
  }

  const handelISEmp = () => {
    setFormData({...formData,isEmpeloyee:!formData.isEmpeloyee})
  }

  const handleSelectChange = (event) => {
    setFormData({...formData,salarey:event.target.value })
  };

  const handelButtonSubmit = (e) => {
      e.preventDefault()
      handelData()
      setClickSubmit(true)
    
    }

    const closePopup = () => {
        setClickSubmit(false);
    };
    
    const handelData = () => {
        if (formData.name.length < 3) setMassege( "the name is too short");
        else if (+formData.ageD < 18 || +formData.ageD > 100) setMassege ("the age not in the range");
        else if (formData.number.length < 8) setMassege("the number is un correct");
        else setMassege("the form has been submitted successfully")
    }

  useEffect(() => {
    if (formData.name && formData.ageD && formData.number && formData.salarey) {
      setIsFill(true)
    }
    else {
      setIsFill(false)
    }
  }, [formData])
    
  return (
    <>
      <form  style={
        {
          padding: "30px",
          display: "flex",
          alignItems  : "center",
          flexDirection: 'column',
          background:"#2c00a0"
        }
      }>
        <h1 style={
          {
            marginBottom: "20px",
            color:"white"
          }
        }>
          Requesting a Loan
        </h1>
        <hr style={{width:"97%"}}/>
        
        <InputContext.Provider value={{
            inpName:"name",
            inpVal:formData.name,
            inpHandel:handelNameInput
        }}>
            <InputComp />
        </InputContext.Provider>
        

        <InputContext.Provider value={{
            inpName:"phone number",
            inpVal:formData.number,
            inpHandel:handelPhoneNumber
        }}>
            <InputComp />
        </InputContext.Provider>

        <InputContext.Provider value={{
            inpName:"age",
            inpVal:formData.ageD,
            inpHandel:handelAgeInput
        }}>
            <InputComp />
        </InputContext.Provider>

        <div style={{
          ...styleContext.styleDiv,
          justifyContent: "center",
          flexDirection:"column"
        }}>
          <label htmlFor="" style={{
            ...styleContext.styleLable,
            width: "152px",
            margin:"auto"
          }}>
            are you empeloyee
          </label>
          <input type="checkbox" checked={formData.isEmpeloyee} onChange={handelISEmp} />
        </div>

        <div style={styleContext.styleDiv}>
          <label htmlFor="" style={styleContext.styleLable}>
            salary :
          </label>
          <select style={styleContext.styleInput} value={formData.salarey} onChange={handleSelectChange}>
            <option value="" >-- select --</option>
            <option value="1000" >1000</option>
            <option value="1500" >1500</option>
            <option value="2000" >2000</option>
            <option value="3000" >3000</option>
          </select>
        </div>

        <button style={{
          outline: "none",
          border: "none",
          padding: "10px 30px",
          color: "white",
          background: isFill ? "#b20b3b" : "gray",
          borderRadius: "10px",
          fontSize: "15px",
          marginTop: "20px",
          cursor: isFill ? "pointer" : "not-allowed"
        }} disabled={!isFill} onClick={handelButtonSubmit}>
          submit
        </button>

        </form>
        
          {clickSubmit ? <PopUp issub={massege} closePopup={ closePopup} /> : ""}

  </>
  )
}

export default LoanForm
