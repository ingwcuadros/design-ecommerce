import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
// Add page imports here
import Home from './pages/Home';
import Lavadoras from './pages/Lavadoras';
import LavadoraDetalle from './pages/LavadoraDetalle';

function App() {
    return (
        <>
            <Router>
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
