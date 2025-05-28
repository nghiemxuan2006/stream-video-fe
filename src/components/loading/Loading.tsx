import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { PropsWithChildren } from 'react';

interface ILoading {
    isLoading: boolean
}

export default function Loading({ isLoading, children }: PropsWithChildren<ILoading>) {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    return (
        <Spin indicator={antIcon} spinning={isLoading}>
            {children}
        </Spin>
    );
}
