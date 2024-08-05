import React from "react";

function GrandChild({ user, setUser }) {
  const handleChangeName = () => {
    setUser({ name: "Jane Doe" });
  };

  return (
    <div>
      <h1>GrandChild Component</h1>
      <p>User Name: {user.name}</p>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
}

export default GrandChild;
