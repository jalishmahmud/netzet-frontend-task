import Link from "next/link";
import styles from "@/components/nav-menu/NavMenu.module.css";
import { NavLinks } from "@/types/data.type";

interface NavMenuProps {
  navLinks: NavLinks[];
}

export default function NavMenu({ navLinks }: NavMenuProps) {
  return (
    <nav className={styles["nav-menu"]}>
      {navLinks.map((link) => (
        <Link key={link.id} href={link.url}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
