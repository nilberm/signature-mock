import React from "react";
import style from "./style.module.scss";
import Link from "next/link";

interface SidebarProps {}
export default function Sidebar(props: SidebarProps) {
  return (
    <aside className={style.aside}>
      <span className={style.logo}>Logo</span>

      <nav>
        <ul>
          <li>
            <Link href={"/"}>Teste</Link>
          </li>
          <li>
            <Link href={"/"}>Teste</Link>
          </li>
          <li>
            <Link href={"/"}>Teste</Link>
          </li>
          <li>
            <Link href={"/"}>Teste</Link>
          </li>
          <li>
            <Link href={"/"}>Teste</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
