import styles from "@/components/announcement-banner/AnnouncementBanner.module.css";
import { heroSectionContent } from "@/libs/data/data";

export default function AnnouncementBanner() {
  const { segment1, segment2 } = heroSectionContent?.announcementBanner || {};
  return (
    <div className={styles["announcement-banner"]}>
      <h3 className={styles["title"]}>
        <span>{segment1}</span> {segment2}
      </h3>
    </div>
  );
}
