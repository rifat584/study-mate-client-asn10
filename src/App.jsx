import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const handleTheme = ()=>{
    
  }
  return (
    <>
      <button className="btn btn-primary" onClick={handleTheme}>Toggle Theme</button>
    </>
  );
}

export default App;
