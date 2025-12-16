import React, { useState } from "react";

function Dummy(props) {
  const [user, setUser] = useState(
    {
      name: "naresh",
      location: "bng",
    },
    {
      name: "ajay",
      location: "bng",
    },
    {
      name: "naresh",
      location: "bng",
    }
  );

  const temp=user;
   temp=temp.map((ele)=>{
    if(ele.name==="ajay"){
      ele.location="mmk"
    }
    return ele;
  })

  console.log(user)
  return <div>Hello {props.name}</div>;
}

export default Dummy;
