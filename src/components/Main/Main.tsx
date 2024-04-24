import { OrderDesk } from "../OrderDesk/OrderDesk";
import cls from "../Main/Main.module.scss";
export const Main = () => {
    return (
        <main className={cls.Main}>
            <OrderDesk />
        </main>
    );
};
