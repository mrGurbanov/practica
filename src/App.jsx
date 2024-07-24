import { BrowserRouter , Routes , Route } from "react-router-dom";
import { RootLayout , Home } from "./components/_pages/import";

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
