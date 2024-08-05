import React, { useState } from "react";
import Parent from "./Parent";

function App() {
  const [user, setUser] = useState({ name: "John Doe" });

  return (
    <div>
      <Parent user={user} setUser={setUser} />
    </div>
  );
}

export default App;
