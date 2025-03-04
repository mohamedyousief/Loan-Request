function PopUp({ issub ,closePopup }) {
    console.log(issub)
    return (
      <div onClick={closePopup} style={{
          width: "100%",
          height: "100vh",
          background: "#80808085",
          backdropFilter:"blur(7px)",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems:"center"
    }}>
      <h1 style={{
              color: issub==="the form has been submitted successfully" ? "green" : "red",
              background: "white",
              padding:"20px 40px"
          }}>
              {issub}
        </h1>
    </div>
  )
}

export default PopUp
