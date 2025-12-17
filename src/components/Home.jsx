import React, { useEffect, useState } from "react";

function Home() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUserData(res));
  }, []);

  const handleSearch=(e)=>{
    const filterData=userData.filter((user)=>user.name.includes(e.target.value.toLowerCase()))
    console.log(filterData);
  }
  return (
    <>

    <input type="text"  placeholder="Search..." onChange={handleSearch}/>
      <table>
        <tr>
          <th>SN</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
        </tr>

        {userData.map((user,ind) => {
          return (
            <tr key={user.id}>
              <td>{ind+1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>

            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Home;
