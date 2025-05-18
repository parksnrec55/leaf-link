import type { Route } from "./+types/home";
import SearchPage from "../Pages/SearchPage/SearchPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Leaf Link" },
    { name: "description", content: "Plant Search App for Landscapers" },
  ];
}

export default function Home() {
  return <SearchPage />;
}
