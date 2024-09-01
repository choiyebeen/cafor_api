'use client';

import { useState } from "react";

export default function TableRow({products}) {
  // 상품 데이터를 useState로 관리


  return (
    <>
      {products.map((product) => (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.type} {product.name}</td>
          <td>{product.quantity}</td>
          <td>{product.total}</td>
          <td>{product.price}</td>
        </tr>
      ))}
    </>
  );
}
