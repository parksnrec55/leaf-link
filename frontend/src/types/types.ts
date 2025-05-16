export interface SearchCriteria {
  keyword: string;
  plantType: string;
  sunlight: string;
  water: string;
  minHeight: string;
  maxHeight: string;
  hardiness: string;
  environment: string;
}
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