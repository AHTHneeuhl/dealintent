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
        <div className={styles["mutual-action-plan"]}></div>
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
