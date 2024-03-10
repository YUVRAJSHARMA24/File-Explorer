import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
function App() {
  const [explored, setExplored] = useState(explorer);
  return (
    <>
      <Folder explorer={explored} />
    </>
  );
}

export default App;
