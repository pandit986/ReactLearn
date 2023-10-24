import { useEffect, useState } from "react";
import { ThemProvider } from "./context/them";
import ThemeBtn from "./components/ThemButton";
import Card from "./components/Card";

export default function App() {
  const [themMode, setThemMode] = useState("light");
  const lightTheme = () => {
    setThemMode("light");
  };

  const darkTheme = () => {
    setThemMode("dark");
  };

  useEffect(() => {
    //cleaning
    document.querySelector("html").classList.remove("light", "dark");
    //add
    document.querySelector("html").classList.add(themMode);
  }, [themMode]);

  return (
    <ThemProvider value={{ themMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          <ThemeBtn></ThemeBtn>
          <div className="w-full max-w-sm mx-auto"></div>
          <Card></Card>
        </div>
      </div>
    </ThemProvider>
  );
}
