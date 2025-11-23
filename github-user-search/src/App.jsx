import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">
        GitHub User Search
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Search users by username, location, or repository count
      </p>

      <Search setUser={setUser} />
    </div>
  );
}

export default App;