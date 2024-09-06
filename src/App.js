// import UserContextProvider from "./contextApi/usercontextprovider"
// import Profile from "./contextApi/profile"
// import Login from "./contextApi/login"
// function App() {
//   return (
//     <div className="mt-40">
//     <UserContextProvider>
//       <Login />
//       <Profile />
//     </UserContextProvider>
//     </div>
//   );
// }
// export default App



import { useEffect, useState } from "react";
import Card from "./them/Card";
import ThemeBtn from "./them/ThemeBtn";
import { ThemProvider } from "./them/themContext";
function App() {
  const [themMode,setThemmode]=useState("light")
  const lightMode=()=>{
    setThemmode("light")
  }
  const darkMode=()=>{
    setThemmode("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector("html").classList.add(themMode)
  },[themMode])
  return (
    <ThemProvider value={{themMode, lightMode, darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemProvider>
  );
}

export default App;
