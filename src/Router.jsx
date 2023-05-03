import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home/index';
import { About } from "./pages/About";
import { DefaultLayout } from "./Layouts/DefaultLayout";

export function Router(){
    return (
      <Routes>
        <Route path="/" element ={<DefaultLayout/>}>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
        </Route>
      </Routes>


    );
}