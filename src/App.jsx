import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Menu";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Expense from "./pages/Expense";
import Income from "./pages/Income";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

const { Content } = Layout;

// 👇 Layout wrapper bana lo
function MainLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

      <Layout>
        <AppHeader />

        <Content style={{ margin: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/income" element={<Income />} />
          </Routes>
        </Content>

        <AppFooter />
      </Layout>
    </Layout>
  );
}

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;