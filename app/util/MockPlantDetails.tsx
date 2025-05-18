import type { PlantDetails } from "~/model/PlantDetails";


export const mockPlant :PlantDetails = {
    id: "p001",
    name: "Japanese Maple",
    scientific_name: "Acer palmatum",
    evergreen: false,
    zone_min: 5,
    zone_max: 8,
    height_range_min: 10,
    height_range_max: 25,
    spread_range_min: 10,
    spread_range_max: 25,
    fall_color: "Brilliant Red",
    bloom_period_begin: 4, // April
    bloom_period_end: 5, // May
    flower_color: "Reddish-Purple",
    specimen: true,
    bad_soil_types: "Heavy clay, wet soils",
    good_soil_types: "Well-drained, slightly acidic",
    maintenance: 2, // Medium-low (1-5 scale)
    sun_exposure: 2, // Partial shade (1-5 scale)
    water_needs: 3, // Moderate (1-5 scale)
    drought_tolerant: false,
    air_pollution_tolerant: false,
    clay_soil_tolerant: false,
    animal_tolerance: "Resistant to deer",
    notes: "Excellent specimen tree with striking autumn colors. Prefers protection from afternoon sun and strong winds."
  }