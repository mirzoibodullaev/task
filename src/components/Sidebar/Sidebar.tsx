import cls from "../Sidebar/Sidebar.module.scss";
import LogoIcon from "../../assets/logo.svg";
import MenuIcon from "../../assets/menu.svg";
import AvatarIcon from "../../assets/avatar.svg";
import SettingsIcon from "../../assets/settings.svg";

export const Sidebar = () => {
    return (
        <aside className={cls.Sidebar}>
            <div className={cls.topContent}>
                <img className={cls.logo} src={LogoIcon} alt="Logo" />
                <img src={MenuIcon} alt="Menu" />
            </div>
            <div className={cls.downContent}>
                <img
                    className={cls.settings}
                    src={SettingsIcon}
                    alt="Settings"
                />
                <img src={AvatarIcon} alt="Avatar" />
            </div>
        </aside>
    );
};
