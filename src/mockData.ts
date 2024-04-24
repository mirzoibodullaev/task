import ClickIcon from "./assets/click.svg";
import PaymeIcon from "./assets/payme.svg";
import StoreIcon from "./assets/store.svg";
import MoneyIcon from "./assets/money.svg";
import HumanIcon from "./assets/human.svg";
import CreditCardIcon from "./assets/credit-card.svg";
import WalletIcon from "./assets/wallet.svg";
import CarIcon from "./assets/car.svg";

interface Property {
    first: string;
    second: string;
}

interface Items {
    itemName: string;
    quantity: number;
    property?: Property[];
}

type Category = "new" | "workpiece" | "ready" | "ontheaway";

export interface Order {
    id: number;
    price: number;
    category: Category;
    items: Items[];
    time: string;
    Icon: Property[];
}

export const orders: Order[] = [
    {
        id: 321545,
        price: 300560,
        category: "new",
        Icon: [
            {
                first: PaymeIcon,
                second: StoreIcon,
            },
        ],
        items: [
            { itemName: "Пепси 0,5", quantity: 3 },
            {
                itemName: "Гамбургер",
                quantity: 1,
                property: [
                    {
                        first: "С сыром",
                        second: "Без лука",
                    },
                ],
            },
            { itemName: "Лаваш мясной Standart острый", quantity: 2 },
        ],
        time: "15:22",
    },
    {
        id: 321546,
        price: 300560,
        category: "new",
        Icon: [
            {
                first: WalletIcon,
                second: StoreIcon,
            },
        ],
        items: [
            { itemName: "Пепси 0,5", quantity: 3 },
            {
                itemName: "Гамбургер",
                quantity: 1,
                property: [
                    {
                        first: "С сыром",
                        second: "Без лука",
                    },
                ],
            },
            { itemName: "Лаваш мясной Standart острый", quantity: 2 },
        ],
        time: "15:22",
    },
    {
        id: 321547,
        price: 300560,
        category: "new",
        Icon: [
            {
                first: CreditCardIcon,
                second: StoreIcon,
            },
        ],
        items: [
            { itemName: "Пепси 0,5", quantity: 3 },
            {
                itemName: "Гамбургер",
                quantity: 1,
                property: [
                    {
                        first: "С сыром",
                        second: "Без лука",
                    },
                ],
            },
            { itemName: "Лаваш мясной Standart острый", quantity: 2 },
        ],
        time: "15:22",
    },
    {
        id: 321548,
        price: 300560,
        category: "new",
        Icon: [
            {
                first: MoneyIcon,
                second: HumanIcon,
            },
        ],
        items: [
            {
                itemName: "Big Gamburger",
                quantity: 1,
                property: [
                    {
                        first: "С сыром",
                        second: "Без лука",
                    },
                ],
            },
            { itemName: "Пепси 0,5", quantity: 4 },
            { itemName: "Лаваш мясной Standart острый", quantity: 2 },
            {
                itemName: "Дабл Бургер",
                quantity: 1,
                property: [
                    {
                        first: "С сыром",
                        second: "Без лука",
                    },
                ],
            },
        ],
        time: "15:22",
    },
    {
        id: 321549,
        price: 300560,
        category: "new",
        Icon: [
            {
                first: ClickIcon,
                second: StoreIcon,
            },
        ],
        items: [
            { itemName: "Пепси 0,5", quantity: 3 },
            {
                itemName: "Гамбургер",
                quantity: 1,
                property: [
                    {
                        first: "С сыром",
                        second: "Без лука",
                    },
                ],
            },
            { itemName: "Лаваш мясной Standart острый", quantity: 2 },
        ],
        time: "15:22",
    },

    {
        id: 321550,
        price: 300560,
        category: "workpiece",
        Icon: [
            {
                first: CreditCardIcon,
                second: StoreIcon,
            },
        ],
        items: [
            {
                itemName: "Гамбургер",
                quantity: 1,
                property: [
                    {
                        first: "С сыром",
                        second: "Без лука",
                    },
                ],
            },
        ],
        time: "15:22",
    },

    {
        id: 321551,
        price: 300560,
        category: "workpiece",
        Icon: [
            {
                first: CreditCardIcon,
                second: StoreIcon,
            },
        ],
        items: [
            {
                itemName: "Big Gamburger",
                quantity: 1,
                property: [
                    {
                        first: "С сыром",
                        second: "Без лука",
                    },
                ],
            },
            { itemName: "Пепси 0,5", quantity: 4 },
            { itemName: "Лаваш мясной Standart острый", quantity: 2 },
        ],
        time: "15:22",
    },
    {
        id: 321552,
        price: 300560,
        category: "workpiece",
        Icon: [
            {
                first: CreditCardIcon,
                second: CarIcon,
            },
        ],
        items: [
            {
                itemName: "Гамбургер",
                quantity: 1,
                property: [
                    {
                        first: "С сыром",
                        second: "Без лука",
                    },
                ],
            },
        ],
        time: "15:22",
    },

    {
        id: 321553,
        price: 300560,
        category: "ready",
        Icon: [
            {
                first: MoneyIcon,
                second: HumanIcon,
            },
        ],
        items: [{ itemName: "Лаваш мясной Standart острый", quantity: 2 }],
        time: "15:22",
    },
    {
        id: 321554,
        price: 300560,
        category: "ready",
        Icon: [
            {
                first: MoneyIcon,
                second: StoreIcon,
            },
        ],
        items: [
            {
                itemName: "Big Gamburger",
                quantity: 1,
                property: [
                    {
                        first: "С сыром",
                        second: "Без лука",
                    },
                ],
            },
            { itemName: "Пепси 0,5", quantity: 4 },
            { itemName: "Лаваш мясной Standart острый", quantity: 2 },
            {
                itemName: "Дабл Бургер",
                quantity: 1,
                property: [
                    {
                        first: "С сыром",
                        second: "Без лука",
                    },
                ],
            },
        ],
        time: "15:22",
    },
    {
        id: 321555,
        price: 300560,
        category: "ready",
        Icon: [
            {
                first: MoneyIcon,
                second: HumanIcon,
            },
        ],
        items: [{ itemName: "Лаваш мясной Standart острый", quantity: 2 }],
        time: "15:22",
    },
    {
        id: 321556,
        price: 300560,
        category: "ready",
        Icon: [
            {
                first: MoneyIcon,
                second: HumanIcon,
            },
        ],
        items: [{ itemName: "Лаваш мясной Standart острый", quantity: 2 }],
        time: "15:22",
    },

    {
        id: 321557,
        price: 300560,
        category: "ontheaway",
        Icon: [
            {
                first: HumanIcon,
                second: StoreIcon,
            },
        ],
        items: [
            {
                itemName: "Big Gamburger",
                quantity: 1,
                property: [
                    {
                        first: "С сыром",
                        second: "Без лука",
                    },
                ],
            },
            { itemName: "Пепси 0,5", quantity: 4 },
            { itemName: "Лаваш мясной Standart острый", quantity: 2 },
            {
                itemName: "Дабл Бургер",
                quantity: 1,
                property: [
                    {
                        first: "С сыром",
                        second: "Без лука",
                    },
                ],
            },
        ],
        time: "15:22",
    },
];
