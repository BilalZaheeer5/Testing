"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Model from "@/components/Model";

export default function Home() {
  const [data, setData] = useState(false);
  return <>{data ? <Model /> : ""}</>;
}
