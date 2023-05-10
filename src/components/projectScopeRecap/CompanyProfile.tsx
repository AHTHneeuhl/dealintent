import { Typography, Image as Img } from "antd";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import styles from "./CompanyProfile.module.scss";

const CompanyProfile: React.FC = () => {
  return (
    <div className={styles["company-profile"]}>
      <div className={styles.header}>
        <Typography.Title className={styles.title}>
          Company Profile
        </Typography.Title>
        <HiDotsVertical size={20} className={styles["three-dots"]} />
        <div className={styles.options}>
          <Image
            src="/icons/download.png"
            alt="Download"
            width={16}
            height={20}
          />
          |
          <Image src="/icons/hide.png" alt="Hide" width={20} height={20} />|
          <Image src="/icons/delete.png" alt="Delete" width={20} height={20} />
        </div>
      </div>
      <div className={styles.background}>
        <Img
          src="/images/company-profile.png"
          alt="Company Profile"
          preview={false}
          className={styles.image}
        />
        <div className={styles.wework}>
          <Img preview={false} src="/images/wework.png" alt="Wework" />
          <Typography.Text className={styles.subtitle}>
            For all the ways you work, we are here
          </Typography.Text>
        </div>
        <div className={styles.options}>
          <Img
            src="/images/other-options.png"
            alt="Other Options"
            preview={false}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <Img
          src="/images/comment-share.png"
          alt="Comment Share"
          preview={false}
        />
      </div>
    </div>
  );
};

export default CompanyProfile;
