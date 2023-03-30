import { getLaunchDetails } from "@/services/launchesService";
import Link from "next/link";
import React, { useEffect } from "react";
import styles from "./LaunchCard.module.scss";

export interface LaunchCardProps {
  label?: string;
  image: string;
  name: string;
  date: string;
  id: string;
}

const LaunchCard = ({ label, name, image, date, id }: LaunchCardProps) => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await getLaunchDetails(id);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.LaunchCard}>
      <img src={image} alt="img" className={styles.image} />
      <div className={styles.right}>
        <div className={styles.info}>
          <span className={styles.name}>{name}</span>
          <span className={styles.date}>{date}</span>
        </div>
        <Link className={styles.learnButton} href={`/${id}`}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default LaunchCard;
