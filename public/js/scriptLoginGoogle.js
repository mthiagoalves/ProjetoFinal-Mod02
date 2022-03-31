function handleCredentialResponse(response) {
   const data = jwt_decode(response.credential);
   console.log(data)
   
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "67327565473-0bndb94b61j0v1f3v0fvogea6j1u3tba.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "filled_black", 
        size: "large",
        type:"standard",    
        shape:"pill",
        text:"$ {button.text}",
        locale:"en-US",
        logo_alignment:"left" }  
    );

    google.accounts.id.prompt(); 

  }

//   module.exports = {handleCredentialResponse}