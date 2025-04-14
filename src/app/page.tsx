import AnnouncementBanner from "@/components/announcement-banner/AnnouncementBanner";
import Header from "@/components/header/Header";
import styles from "@/app/page.module.css";
export default function Home() {
  return (
    <div className={styles.page}>
      <AnnouncementBanner />
      <Header />
    </div>
  );
}
