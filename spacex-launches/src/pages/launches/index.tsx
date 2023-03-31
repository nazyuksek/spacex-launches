import SearchComponent from "@/components/SearchComponent";
import React, { useEffect, useState } from "react";
import styles from "./Launches.module.scss";
import AnimatedNumbersComponent from "@/components/AnimatedNumbersComponent";
import { getLaunches } from "@/services/launchesService";
import useLaunches from "@/hooks/useLaunches";

export interface LaunchPageProps {
  label?: string;
}

const LaunchesPage = ({ label }: LaunchPageProps) => {
  const duration = 2000;
  const formatValue = (value: number) => value.toFixed(0);
  const { setLaunches } = useLaunches();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLaunches();
      setLaunches(res);
    };
    // console.log(
    //   (date.getTime() - (date.getTime() % (60 * 60 * 24 * 1000))) / 1000
    // );
    // console.log(
    //   (date.getTime() -
    //     (date.getTime() % (60 * 60 * 24 * 1000)) +
    //     60 * 60 * 24 * 1000) /
    //     1000
    // );
    fetchData();
  }, []);

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
