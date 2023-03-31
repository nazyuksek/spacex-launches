import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./SearchComponent.module.scss";
import SpaceX from "../../assets/jpg/spacex.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useDate from "@/hooks/useDate";

export interface SearchProps {
  label?: string;
}

const SearchComponent = ({ label }: SearchProps) => {
  const [startDate, setStartDate] = useState<Date>();
  const { date, setDate } = useDate();

  useEffect(() => {
    setStartDate(new Date());
    if (startDate) {
      setDate(startDate);
    }
  }, [setDate, startDate]);

  return (
    <div className={styles.Search}>
      <div className={styles.imageContainer}>
        <Image src={SpaceX} alt="image" className={styles.image} />
        <div className={styles.searchContainer}>
          <div className={styles.searchContent}>
            <div className={styles.searchLeft}>
              <span className={styles.searchTitle}>Search for a Launch</span>
              <div>
                <span className={styles.launchTitle}>Launch Date</span>
                {startDate && (
                  <div className={styles.datePickerContainer}>
                    <div className={styles.iconAndPicker}>
                      <DatePicker
                        selected={startDate}
                        dateFormat="dd/MM/yyyy"
                        onChange={(date: Date) => {
                          if (date) {
                            setStartDate(date);
                            setDate(date);
                          }
                        }}
                      />
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ color: "#87909b" }}
                        className={styles.icon}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.buttons}>
              <Link href={"/results/all"} className={styles.searchButton}>
                Show All
              </Link>
              <Link href={"/results"} className={styles.searchButton}>
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
