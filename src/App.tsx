import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import fundoPng from "./assets/fundo.png";
import logoIconDark from "./assets/Logo_IconDark.svg";

function App() {
  return (
    <BrowserRouter>
      <main
        className="
          min-h-screen
          flex items-center
          justify-center md:justify-end
          px-4 py-6 md:px-10 md:py-8
          bg-cover bg-center bg-no-repeat
        "
        style={{ backgroundImage: `url(${fundoPng})` }}
      >
        {/* Lado direito – painel com logo, abas e formulários */}
        <div className="w-full max-w-md bg-slate-50 rounded-3xl shadow-2xl px-6 py-7 md:px-8 md:py-8 flex flex-col gap-6">
          <header className="flex justify-center items-center gap-3">
            <img src={logoIconDark} alt="Logo HelpDesk" className="h-9 w-9" />
            <span className="text-blue-800 font-bold text-lg">
              HelpDesk
            </span>
          </header>

          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
