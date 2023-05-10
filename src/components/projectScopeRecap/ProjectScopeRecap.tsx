"use client";

import { Tabs, TabsProps, Typography } from "antd";
import styles from "./ProjectScopeRecap.module.scss";
import BasicInfoSidebar from "./BasicInfoSidebar";
import TopMenu from "./TopMenu";
import CompanyProfile from "./CompanyProfile";

const onChange = (key: string) => {
  console.log(key);
};

const ProjectScopeRecap = () => {
  return (
    <section className={styles["project-scope-recap"]}>
      <div className={styles.header}>
        <Typography.Title className={styles.title}>
          Project Scope Recap
        </Typography.Title>
        <div className={styles["mutual-action-plan"]}>
          <div className={styles.info}>
            <Typography.Text className={styles.heading}>
              Mutual Action Plan
            </Typography.Text>
            <Typography.Text className={styles.percent}>3%</Typography.Text>
          </div>
          <div className={styles.progress}>
            {Array.from({ length: 17 }).map((_, i) => (
              <div key={i} className={styles.item} />
            ))}
          </div>
        </div>
      </div>
      <TopMenu />
      <div className={styles.content}>
        <BasicInfoSidebar />
        <CompanyProfile />
      </div>
    </section>
  );
};

export default ProjectScopeRecap;
