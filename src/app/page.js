import CustomNavbar from "@/components/navbar/CustomNavbar";
import SideBar from "@/components/sidebar/sidebar";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <CustomNavbar/>
      <SideBar></SideBar>
      <main className={styles.mainPage}>
        <div className={styles.content}>
          <h1 className={styles.pad}>XXX카페 고척점 사장님, 반갑습니다!</h1>
          <hr/>

           {/* 여기에 아이템들 */}
        </div>
      </main>

    </div>
  );
}

//style={{ marginLeft: '250px', padding: '20px', width: '100%' }}