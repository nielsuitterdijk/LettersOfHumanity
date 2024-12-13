import { useState } from "react";
import Editor from "./editor/editor";

function App() {
  const [count, setCount] = useState(0);

  return <Editor />;
}

export default App;
