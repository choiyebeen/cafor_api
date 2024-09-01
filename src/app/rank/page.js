'use client';

import CustomNavbar from "@/components/navbar/CustomNavbar";
import SideBar from "@/components/sidebar/sidebar";
import TableRow from "@/components/TableRow/TableRow";
import styles from "./page.module.css";
import { useState } from "react";

export default function Months(){
    const [products, setProducts] = useState([
        { id: 1, type:'아이스', name: '아메리카노', quantity: 2132, total: 5330000, price: 2500 },
        { id: 2, type:'핫', name: '아메리카노', quantity: 1136, total: 2840000, price: 2500  },
        { id: 3, type:'아이스', name: '카페라떼', quantity: 887, total: 2661000, price: 3000 },
        { id: 4, type:'핫', name: '카페라떼', quantity: 670, total: 2010000, price: 3000 },
      ]);
    return(
        <div>
        <CustomNavbar/>
        <SideBar></SideBar>
        <main className={styles.mainPage}>
          <div className={styles.content}>
            <h2>매출 순위</h2>
            <table>
                <tr>
                    <th>순위</th>
                    <th>메뉴명</th>
                    <th>총 판매 수량</th>
                    <th>총 판매 금액</th>
                    <th>단가</th>
                </tr>
                <TableRow products={products}></TableRow>
            </table>
          </div>
        </main>
  
      </div>
    )
}