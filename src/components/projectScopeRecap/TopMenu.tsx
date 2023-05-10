import styles from "./TopMenu.module.scss";

const items = [
  {
    key: "1",
    label: `Basic Info`,
  },
  {
    key: "2",
    label: `Files`,
  },
  {
    key: "3",
    label: `Mutual Action Plan`,
  },
  {
    key: "4",
    label: `Contact`,
  },
  {
    key: "5",
    label: `Internal Actions`,
  },
];

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
