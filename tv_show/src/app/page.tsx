import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ShowDetails avgRating={5} />
    </main>
  );
}
