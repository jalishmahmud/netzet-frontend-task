import AnnouncementBanner from "@/components/announcement-banner/AnnouncementBanner";
import Header from "@/components/header/Header";
import styles from "@/app/page.module.css";
import HeroSection from "@/components/hero-section/HeroSection";
export default function Home() {
  return (
    <div className={styles["homepage"]}>
      <AnnouncementBanner />
      <Header />
      <HeroSection />
    </div>
  );
}
