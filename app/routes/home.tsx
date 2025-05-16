import type { Route } from "./+types/home";
import SearchPage from "../SearchPage/SearchPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Leaf Link" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <SearchPage />;
}
