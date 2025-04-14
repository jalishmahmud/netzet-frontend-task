import styles from "@/components/hero-section/HeroSection.module.css";
import { assets } from "@/libs/assets/assets";
import { heroSectionContent } from "@/libs/data/data";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const {
    headline,
    subheading,
    benefits,
    ctaText,
    quizNote,
    disclaimerText,
    footerCopyright,
  } = heroSectionContent || {};
  return (
    <div className={styles["hero-section"]}>
      <div className={styles["contents"]}>
        <h1 className={styles["headline"]}>{headline}</h1>
        <h2 className={styles["subheading"]}>{subheading}</h2>
        <div className={styles["benefits"]}>
          {benefits.map((benefit, index) => (
            <p key={index}>
              <Image
                src={assets.icons.star}
                width={22}
                height={22}
                alt={"star icon"}
              />
              {benefit}
            </p>
          ))}
        </div>
        <div className={styles["bottom-part"]}>
          <Link className={styles["cta-button"]} href={""}>
            {ctaText}
            <Image
              src={assets.icons.arrowForward}
              width={6}
              height={11}
              alt={"forward arrow icon"}
            />
          </Link>
          <h5 className={styles["quiz-note"]}>{quizNote}</h5>
          <p className={styles["disclaimer-text"]}>{disclaimerText}</p>
          <p className={styles["copyright-text"]}>{footerCopyright}</p>
        </div>
      </div>
      <div className={styles["hero-image"]}>
        <Image src={assets.images.hero} width={666} height={679} alt={""} />
      </div>
    </div>
  );
}
