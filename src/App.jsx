import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Menu";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Expense from "./pages/Expense";
import Income from "./pages/Income";
import Login from "./pages/Login";
import Register from "./pages/Registration";

const { Content } = Layout;

// Layout
function MainLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      <Layout>
        {/* Header */}
        <AppHeader />

        {/* Content */}
        <Content style={{ margin: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/income" element={<Income />} />
          </Routes>
        </Content>

        {/* Footer */}
        <AppFooter />
      </Layout>
    </Layout>
  );
}

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Private Routes */}
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