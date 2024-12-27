'use client'

import {AntdRegistry} from "@ant-design/nextjs-registry";
import {ConfigProvider, ThemeConfig} from "antd";

interface Props {
    children: React.ReactNode;
}

const theme: ThemeConfig = {
    components: {},
};

// # Component
export default function AntdConfigProvider({children}: Props) {
    return (
        <AntdRegistry>
            <ConfigProvider theme={theme}>
                {children}
            </ConfigProvider>
        </AntdRegistry>
    );
}
