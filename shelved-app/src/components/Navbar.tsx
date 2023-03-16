import React from "react";
import styles from "../assets/Navbar.module.css";

interface NavbarProps {
  links: {
    title: string;
    href: string;
  }[];
  brand: string;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ links, brand }) => {
  return (
    <nav className={styles.navbar}>
      <div>
        <a href="/" className={styles.navbarBrand}>
          {brand}
        </a>
        <ul className={styles.navbarNav}>
          {links.map((link, index) => (
            <li className={styles.navItem} key={index}>
              <a href={link.href} className={styles.navbarLinks}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
