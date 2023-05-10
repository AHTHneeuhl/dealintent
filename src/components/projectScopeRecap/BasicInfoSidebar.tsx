import items from "@/config/sidebarMenuItems";
import styles from "./BasicInfoSidebar.module.scss";

const BasicInfoSidebar: React.FC = () => {
  return (
    <div className={styles.sidebarMenu}>
      {items.map((item) => (
        <div key={item.key} className={styles.menuItem}>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default BasicInfoSidebar;
