import { orders } from "../../mockData";
import { OrderCard } from "../OrderCard/OrderCard";
import cls from "../OrderDesk/OrderDesk.module.scss";

export const OrderDesk = () => {
    return (
        <div className={cls.Orders}>
            <div className={cls.orderDesk}>
                <div className={cls.statusNew}>
                    <span>НОВЫЙ (2)</span>
                </div>
                <div className={cls.orderCards}>
                    {orders
                        .filter((order) => order.category === "new")
                        .map((order) => (
                            <div key={order.id}>
                                <OrderCard {...order} />
                            </div>
                        ))}
                </div>
            </div>
            <div className={cls.orderDesk}>
                <div className={cls.statusWorkPiece}>
                    <span>ЗАГОТОВКА (3)</span>
                </div>
                <div className={cls.orderCards}>
                    {orders
                        .filter((order) => order.category === "workpiece")
                        .map((order) => (
                            <div key={order.id}>
                                <OrderCard {...order} />
                            </div>
                        ))}
                </div>
            </div>
            <div className={cls.orderDesk}>
                <div className={cls.statusReady}>
                    <span>ГОТОВ (4)</span>
                </div>
                <div className={cls.orderCards}>
                    {orders
                        .filter((order) => order.category === "ready")
                        .map((order) => (
                            <div key={order.id}>
                                <OrderCard {...order} />
                            </div>
                        ))}
                </div>
            </div>
            <div className={cls.orderDesk}>
                <div className={cls.statusOntheAway}>
                    <span>КУРЬЕР В ПУТИ (1)</span>
                </div>
                <div className={cls.orderCards}>
                    {orders
                        .filter((order) => order.category === "ontheaway")
                        .map((order) => (
                            <div key={order.id}>
                                <OrderCard {...order} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
