import { useEffect, useState } from "react";
import { NavbarTeacher } from "./NavbarTeacher";
import { NavbarStudent } from "./NavbarStudent";

import * as React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { LoginButton } from "./LoginButton";



export const Navbar = ({user}) => {
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    if(!user){
      setLoading(true);
    }else {
      setLoading(false);
    }
  }, [user])

  let userStatus = null;

  if(user === "logged out"){
    userStatus = <LoginButton/>;
  }else if (user === "null"){
    userStatus = "";
  }else if (user && user.role === "student"){
    userStatus = <NavbarStudent/>;
  }else if (user && user.role === "teacher"){
    userStatus = <NavbarTeacher/>;
  }

  const component = {

  }

  return (
    <Container
      sx={{
        textAlign: "right",
        borderBottom: 1,
        maxWidth: 11 / 12,
        display: "flex",
        justifyContent: "space-between",
        mb: 5
      }}
    >
      <Typography sx={{ fontSize: 60, fontWeight: "bold" }}>sensAI</Typography>
      {userStatus}
      
    </Container>
  );


};




// if(loading){
//   return <p>loading...</p>
// }else if(user.role === "teacher"){
//   return <NavbarTeacher/>
// }else if(user.role === "student"){
//   return <NavbarStudent/>
// }else {

// }