export interface Plant {
  id: number;
  name: string;
  scientificName: string;
  plantType: string;
  sunlight: string;
  water: string;
  height: number;
  hardiness: string;
  environment: string;
  imageUrl: string;
  description?: string;
}