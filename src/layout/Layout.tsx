import { FC, PropsWithChildren } from 'react';
import Header from './header/Header';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className="App">
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;