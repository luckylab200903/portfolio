import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import { Toaster } from "@/components/ui/toaster";
import { NotFound } from "./pages/Notfound";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;