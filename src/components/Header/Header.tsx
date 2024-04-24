import cls from "../Header/Header.module.scss";

export const Header = () => {
    return (
        <header className={cls.Header}>
            <h1 className={cls.title}>Cегодняшние заказы</h1>
        </header>
    );
};
