"use client";

// # Component
import { Layout } from "antd";
import OverView from "@/components/overview/OverView";
import Sidebar from "@/components/layouts/Sidebar";

const { Content } = Layout;

export default function HomePage() {
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout className="h-screen overflow-auto">
        <Content
          style={{
            padding: 0,
          }}
        >
          <OverView />
        </Content>
      </Layout>
    </Layout>
  );
}
