import cls from "../Layout/Layout.module.scss";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const Layout = () => {
    return (
        <div className={cls.Layout}>
            <Sidebar />
            <Header />
            <Main />
        </div>
    );
};
