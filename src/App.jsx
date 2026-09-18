import { BrowserRouter } from "react-router-dom";
import PageWrapper from "./components/layout/PageWrapper.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <AppRoutes />
      </PageWrapper>
    </BrowserRouter>
  );
}
