import { Toaster } from "@/components/ui/toaster"
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
// Add page imports here
import Home from './pages/Home';
import Lavadoras from './pages/Lavadoras';
import LavadoraDetalle from './pages/LavadoraDetalle';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/lavadoras" element={<Lavadoras />} />
                    <Route path="/lavadoras/:id" element={<LavadoraDetalle />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
            <Toaster />
        </>
    )
}

export default App
