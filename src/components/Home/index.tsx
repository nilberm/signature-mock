"use client";

import { MdAdd } from "react-icons/md";
import style from "./style.module.scss";
import { useRouter } from "next/navigation";

interface HomePageProps {}
export default function HomePage(props: HomePageProps) {
  const route = useRouter();

  return (
    <main className={style.main}>
      <header className={style.headerHome}>
        <h2>Signatures</h2>
        <button type="button" onClick={() => route.push("/create-signature")}>
          <MdAdd size={24} />
          Create
        </button>
      </header>
    </main>
  );
}
