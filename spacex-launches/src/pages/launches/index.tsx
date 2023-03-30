import Header from "@/components/Header";
import SearchComponent from "@/components/SearchComponent";
import React from "react";
import styles from "./Launches.module.scss";

export interface LaunchPageProps {
  label?: string;
}

const LaunchesPage = ({ label }: LaunchPageProps) => {
  return (
    <div className={styles.Launches}>
      <Header />
      <SearchComponent />
    </div>
  );
};

export default LaunchesPage;
