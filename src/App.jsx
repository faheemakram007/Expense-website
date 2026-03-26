import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Menu";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Expense from "./pages/Expense";
import Income from "./pages/Income";

const { Content } = Layout;

function App() {
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

export default App;