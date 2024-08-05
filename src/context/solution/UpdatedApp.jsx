import React from "react";
import { UserProvider } from "./UserContext";
import Parent from "./Parent";

function App() {
  return (
    <UserProvider>
      <div>
        <Parent />
      </div>
    </UserProvider>
  );
}

export default App;
