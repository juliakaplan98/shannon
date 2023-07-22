import Layout from './pages/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>

                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default Main;