export interface PlantDetails {
  id: string;
  name?: string;
  scientific_name?: string;
  evergreen?: boolean;
  zone_min?: number;
  zone_max?: number;
  height_range_min?: number;
  height_range_max?: number;
  spread_range_min?: number;
  spread_range_max?: number;
  fall_color?: string;
  bloom_period_begin?: number;
  bloom_period_end?: number;
  flower_color?: string;
  specimen?: boolean;
  bad_soil_types?: string;
  good_soil_types?: string;
  maintenance?: number;
  sun_exposure?: number;
  water_needs?: number;
  drought_tolerant?: boolean;
  air_pollution_tolerant?: boolean;
  clay_soil_tolerant?: boolean;
  animal_tolerance?: string;
  notes?: string;
}