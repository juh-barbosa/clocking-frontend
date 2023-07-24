import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";

export default function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Login/>} path="/"/>
                <Route element={<Menu/>} path="/menu" />
            </Routes>
        </BrowserRouter>
    )
}