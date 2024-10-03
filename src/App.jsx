import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appWrite/auth";
import { login, logout } from "./store/AuthSlice";
import { Header,Footer } from "./components";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const ThemeMode = useSelector((state) => state.theme.themeMode)
  console.log(ThemeMode)
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  });

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove('light', 'dark');
    html.classList.add(ThemeMode);
  }, [ThemeMode]);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap dark:text-white dark:bg-[#121212]">
      <div className="w-full block font-Manrope">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      </div>
    </div>
  ) : (
    <div>Please Login</div>
  );
}

export default App;
