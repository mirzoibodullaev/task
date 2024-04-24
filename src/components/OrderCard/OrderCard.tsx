import { Order } from "../../mockData";
import cls from "../OrderCard/OrderCard.module.scss";
import WatchIcon from "../../assets/watch.svg";
import { IoCloseOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";

export const OrderCard = ({
    id,
    items,
    price,
    time,
    Icon,
    category,
}: Order) => {
    return (
        <div className={cls.orderCard}>
            <div className={cls.orderHead}>
                <span className={cls.orderID}>
                    ID: {id} <CiCircleInfo />
                </span>
                <span className={cls.orderPrice}>{price} сум</span>
                {Icon.map((svg, index) => (
                    <div key={index} className={cls.orderIcons}>
                        <img src={svg.first} alt="Icon" />
                        <img src={svg.second} alt="Icon" />
                    </div>
                ))}
            </div>
            {items.map((item) => (
                <div className={cls.items} key={item.itemName}>
                    <span>{item.quantity} x </span>
                    <span>{item.itemName}</span>
                    {item.property &&
                        item.property.map((prop, index) => (
                            <div key={index} className={cls.property}>
                                <span>{`${prop.first},`}</span>
                                <span>{`${prop.second},`}</span>
                            </div>
                        ))}
                </div>
            ))}
            <div className={cls.watch}>
                <img src={WatchIcon} alt="watch" />
                <span>{time}</span>
            </div>
            {category === "new" ? (
                <div className={cls.btns}>
                    <button className={cls.btnSecondary}>
                        {" "}
                        <IoCloseOutline />
                        Отменить
                    </button>
                    <button className={cls.btnPrimary}>
                        {" "}
                        <MdDone />
                        Принять
                    </button>
                </div>
            ) : null}
            {category === "workpiece" ? (
                <>
                    <div className={cls.btns}>
                        <button className={cls.btnReady}>
                            {" "}
                            <MdDone />
                            Готово
                        </button>
                    </div>
                </>
            ) : null}
            {category === "ready" ? (
                <div className={cls.btns}>
                    <button className={cls.btnComplete}> Завершить</button>
                </div>
            ) : null}
        </div>
    );
};
