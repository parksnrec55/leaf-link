import { PlantDetailsPage } from "~/Pages/PlantDetailsPage/PlantDetailsPage";
import type { Route } from "./+types/details";
import {mockPlant} from "../util/MockPlantDetails";

export async function loader({ params }: Route.LoaderArgs) {
  let plantId = params.pid;
  return { plantId };
}

export default function Details({
  loaderData,
}: Route.ComponentProps) {
  return <PlantDetailsPage {...mockPlant} />;
} 