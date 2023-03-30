import { DateContext } from "@/context/DateContext";
import { useContext } from "react";

export default function useDate() {
  return useContext(DateContext);
}
