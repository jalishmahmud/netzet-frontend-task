"use client";
import Image from "next/image";
import styles from "@/components/header/Header.module.css";
import NavMenu from "@/components/nav-menu/NavMenu";
import { assets } from "@/libs/assets/assets";
import Link from "next/link";
import { pageRoutes } from "@/libs/page-routes/pageRoutes";
import { navLinks } from "@/libs/data/data";
import useIsMobile from "@/hooks/useIsMobile";
export default function Header() {
  const isMobile = useIsMobile();
  const LOGO = isMobile ? assets.logos.small : assets.logos.primary;
  const LOGO_HEIGHT = isMobile ? 46 : 74;
  const LOGO_WIDTH = isMobile ? 106 : 174;

  return (
    <div className={styles["header"]}>
      <div className={styles["logo-wrapper"]}>
        <Link href={pageRoutes.home} className={styles["logo"]}>
          <Image
            src={LOGO}
            height={LOGO_HEIGHT}
            width={LOGO_WIDTH}
            alt="logo"
          />
        </Link>
      </div>

      <div className={styles["desktop-menu"]}>
        <NavMenu navLinks={navLinks} />
      </div>
      <div className={styles["mobile-menu"]}>
        <Image
          src={assets.icons.hamburger}
          alt="hanburger-icon"
          width={20}
          height={12}
        />
      </div>
    </div>
  );
}
