'use client';

import Link from "next/link";
import styles from "./Sidebar.module.css"; // CSS 모듈 가져오기

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Cafor 관리 홈</h2>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              메인 홈
            </Link>
          </li>
          {/* <li className={styles.navItem}>
            <Link href="/menu_management" className={styles.navLink}>
              메뉴 관리
            </Link>
          </li> */}
          <li className={styles.navItem}>
            <Link href="/rank" className={styles.navLink}>
              매출 순위
            </Link>
          </li>
          <li className={styles.navItem}>
            <h4 className={styles.colorBlack}>매출 기록</h4>
          </li>
          <li className={styles.navItem}>
            <Link href="/days" className={styles.navLink}>
              일간 매출 기록
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/months" className={styles.navLink}>
              월간 매출 기록
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/years" className={styles.navLink}>
              연간 매출 기록
            </Link>
          </li>
          <li className={styles.navItem}>
            <hr/>
            <Link href="/login" className={styles.navLink}>
              로그인
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
