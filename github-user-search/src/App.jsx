import { useState } from "react";
import Search from "./components/Search";

function App() {
    const [user, setUser] = useState(null);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
                GitHub User Search
            </h1>

            <Search setUser={setUser} />
        </div>
    );
}

export default App;