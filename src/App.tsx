import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ListaProdutos from "./pages/listaProdutos/ListaProdutos";
import DetProduto from "./pages/detProduto/DetProduto";
import Login from "./pages/login/Login"
import AdmProdutos from "./pages/admProdutos/AdmProdutos";

export default function App(){
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<ListaProdutos/>}/>
                <Route path="/detalheProduto" element={<DetProduto/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/admProdutos" element={<AdmProdutos/>} />
                <Route path="*" 
                element={
                    <img className="container-notfound" src="https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif" alt="imagem de não encontrado"/>} />
            </Routes>
            <Footer />
        </>
    )
}