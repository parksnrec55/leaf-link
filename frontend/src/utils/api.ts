import { SearchCriteria, Plant } from '../types/types';
// Mock plant data
const mockPlants: Plant[] = [{
  id: 1,
  name: "Snake Plant",
  scientificName: "Sansevieria trifasciata",
  plantType: "succulent",
  sunlight: "partial",
  water: "low",
  height: 36,
  hardiness: "9",
  environment: "indoor",
  imageUrl: "https://images.unsplash.com/photo-1572969057162-d3b40a3c1ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  description: "The Snake Plant is one of the most tolerant houseplants you can find."
}, {
  id: 2,
  name: "Monstera Deliciosa",
  scientificName: "Monstera deliciosa",
  plantType: "vine",
  sunlight: "partial",
  water: "medium",
  height: 96,
  hardiness: "10",
  environment: "indoor",
  imageUrl: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
  description: "Known for its stunning split leaves, the Monstera is a classic houseplant."
}, {
  id: 3,
  name: "Lavender",
  scientificName: "Lavandula",
  plantType: "herb",
  sunlight: "full",
  water: "low",
  height: 24,
  hardiness: "5",
  environment: "outdoor",
  imageUrl: "https://images.unsplash.com/photo-1465550318156-d08610f6d99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  description: "Lavender is prized for its fragrance, purple flowers, and silvery foliage."
}, {
  id: 4,
  name: "Peace Lily",
  scientificName: "Spathiphyllum",
  plantType: "flower",
  sunlight: "shade",
  water: "medium",
  height: 40,
  hardiness: "11",
  environment: "indoor",
  imageUrl: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  description: "The Peace Lily is a popular indoor plant known for its air-purifying qualities."
}, {
  id: 5,
  name: "Japanese Maple",
  scientificName: "Acer palmatum",
  plantType: "tree",
  sunlight: "partial",
  water: "medium",
  height: 240,
  hardiness: "5",
  environment: "outdoor",
  imageUrl: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  description: "Japanese maples are small, deciduous trees known for their graceful habit."
}, {
  id: 6,
  name: "Aloe Vera",
  scientificName: "Aloe vera",
  plantType: "succulent",
  sunlight: "full",
  water: "low",
  height: 24,
  hardiness: "8",
  environment: "both",
  imageUrl: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  description: "Aloe vera is a succulent plant species known for its medicinal properties."
}, {
  id: 7,
  name: "Boston Fern",
  scientificName: "Nephrolepis exaltata",
  plantType: "fern",
  sunlight: "partial",
  water: "high",
  height: 36,
  hardiness: "9",
  environment: "indoor",
  imageUrl: "https://images.unsplash.com/photo-1614594576037-15ab4c6afcc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  description: "The Boston fern is a popular houseplant known for its feathery, arching fronds."
}, {
  id: 8,
  name: "Fiddle Leaf Fig",
  scientificName: "Ficus lyrata",
  plantType: "tree",
  sunlight: "partial",
  water: "medium",
  height: 120,
  hardiness: "10",
  environment: "indoor",
  imageUrl: "https://images.unsplash.com/photo-1616500630186-c153467a3a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  description: "The Fiddle Leaf Fig is a popular indoor tree with large, violin-shaped leaves."
}];
// Mock API function to search plants
export const searchPlants = async (criteria: SearchCriteria): Promise<Plant[]> => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 800));
  // Filter the mock plants based on search criteria
  return mockPlants.filter(plant => {
    // Keyword search (case insensitive)
    if (criteria.keyword && !plant.name.toLowerCase().includes(criteria.keyword.toLowerCase()) && !plant.scientificName.toLowerCase().includes(criteria.keyword.toLowerCase())) {
      return false;
    }
    // Plant type filter
    if (criteria.plantType && plant.plantType !== criteria.plantType) {
      return false;
    }
    // Sunlight requirements filter
    if (criteria.sunlight && plant.sunlight !== criteria.sunlight) {
      return false;
    }
    // Water requirements filter
    if (criteria.water && plant.water !== criteria.water) {
      return false;
    }
    // Height range filter
    if (criteria.minHeight && plant.height < parseInt(criteria.minHeight)) {
      return false;
    }
    if (criteria.maxHeight && plant.height > parseInt(criteria.maxHeight)) {
      return false;
    }
    // Hardiness zone filter
    if (criteria.hardiness && plant.hardiness !== criteria.hardiness) {
      return false;
    }
    // Environment filter
    if (criteria.environment && plant.environment !== criteria.environment && plant.environment !== 'both') {
      return false;
    }
    return true;
  });
};