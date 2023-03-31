import { getLaunchDetails } from "@/services/launchesService";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Details.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export interface DetailsProps {
  label?: string;
}

const Details = ({ label }: DetailsProps) => {
  const router = useRouter();
  const { id } = router.query;
  const [details, setDetails] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLaunchDetails(id as string);
      setDetails(res);
      console.log(res);
    };
    fetchData();
  }, [id]);

  return (
    <div className={styles.Details}>
      <Link href="/results">
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ color: "#ffff" }}
          className={styles.icon}
        />
        <span className={styles.back}>Back to results</span>
      </Link>
      <div className={styles.infoDetails}>
        <img
          src={details?.links.patch.large}
          className={styles.image}
          alt="img"
        />
        <div className={styles.info}>
          <span className={styles.name}>{details?.name}</span>
          <span className={styles.details}>{details?.details}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
