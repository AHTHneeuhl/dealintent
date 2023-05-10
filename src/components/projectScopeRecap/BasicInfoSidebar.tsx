import CompanyProfile from "./CompanyProfile";
import styles from "./BasicInfoSidebar.module.scss";

const items = [
  {
    key: "1",
    label: `Overview`,
    children: <CompanyProfile />,
  },
  {
    key: "2",
    label: `Welcome`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: `Product Capabilities`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: "4",
    label: `Customer Success Stories`,
    children: `Content of Tab Pane 4`,
  },
  {
    key: "5",
    label: `File Sharing`,
    children: `Content of Tab Pane 5`,
  },
  {
    key: "6",
    label: `Our Deck`,
    children: `Content of Tab Pane 6`,
  },
];

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
