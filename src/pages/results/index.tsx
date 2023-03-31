import React, { useEffect, useState } from "react";
import styles from "./Results.module.scss";
import SpaceX from "../../assets/jpg/spacex.jpg";
import LaunchCard from "@/components/LaunchCard";
import { getLaunches } from "@/services/launchesService";
import useLaunches from "@/hooks/useLaunches";
import useDate from "@/hooks/useDate";

export interface ResultsPageProps {
  label?: string;
}

const ResultsPage = ({ label }: ResultsPageProps) => {
  const { launches, setLaunches } = useLaunches();
  const { date, setDate } = useDate();

  function getDate(date: string) {
    const newDate = new Date(date).toString();
    return (
      newDate.split(" ")[1] +
      " " +
      newDate.split(" ")[2] +
      ", " +
      newDate.split(" ")[3]
    );
  }

  return (
    <div className={styles.Results}>
      <div className={styles.launches}>
        {launches &&
          launches
            .filter(
              (el) =>
                el.date_unix >=
                  (date.getTime() - (date.getTime() % (60 * 60 * 24 * 1000))) /
                    1000 &&
                el.date_unix <=
                  (date.getTime() -
                    (date.getTime() % (60 * 60 * 24 * 1000)) +
                    60 * 60 * 24 * 1000) /
                    1000
            )
            .map((el: any) => {
              return (
                <LaunchCard
                  name={el.name}
                  image={el.links.patch.large}
                  date={getDate(el.date_utc)}
                  id={el.id}
                />
              );
            })}
      </div>
    </div>
  );
};

export default ResultsPage;
