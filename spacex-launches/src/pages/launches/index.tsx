import SearchComponent from "@/components/SearchComponent";
import React, { useState } from "react";
import styles from "./Launches.module.scss";
import AnimatedNumbersComponent from "@/components/AnimatedNumbersComponent";

export interface LaunchPageProps {
  label?: string;
}

const LaunchesPage = ({ label }: LaunchPageProps) => {
  const duration = 2000;
  const formatValue = (value: number) => value.toFixed(0);

  return (
    <div className={styles.Launches}>
      <SearchComponent />
      <div className={styles.animated}>
        <AnimatedNumbersComponent />
      </div>
    </div>
  );
};

export default LaunchesPage;
