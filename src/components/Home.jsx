import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "../styles/home.css";

function Home() {
  const [searchData, setSearchData] = useState([]);

  const fetchUserData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    );
  };

  const {
    isPending,
    isError,
    data: users = [],
    error,
  } = useQuery({ queryKey: ["users"], queryFn: fetchUserData });

  const handleSearch = (e) => {
    const filterData = users.filter((user) =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchData(filterData);
  };

  useEffect(() => {
    setSearchData(users);
  }, [users]);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        className="search-input"
      />

      <table className="user-table">
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {searchData.length > 0 ? (
            searchData.map((user, ind) => (
              <tr key={user.id}>
                <td>{ind + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-data">
                No user found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
