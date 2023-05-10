import items from "@/config/topMenuItems";
import styles from "./TopMenu.module.scss";

const TopMenu = () => {
  return (
    <div className={styles.topMenu}>
      {items.map((item) => (
        <div key={item.key} className={styles.menuItem}>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default TopMenu;
