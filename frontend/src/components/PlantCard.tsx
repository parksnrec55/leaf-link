import React from 'react';
import { Plant } from '../types/types';
import { SunIcon, DropletIcon, RulerIcon } from 'lucide-react';
interface PlantCardProps {
  plant: Plant;
}
export function PlantCard({
  plant
}: PlantCardProps) {
  // Helper function to get the right sunlight icon
  const getSunlightIcon = () => {
    switch (plant.sunlight) {
      case 'full':
        return <span className="text-amber-500">Full Sun</span>;
      case 'partial':
        return <span className="text-amber-400">Partial Shade</span>;
      case 'shade':
        return <span className="text-amber-300">Full Shade</span>;
      default:
        return <span className="text-gray-500">Unknown</span>;
    }
  };
  // Helper function to get the right water icon
  const getWaterText = () => {
    switch (plant.water) {
      case 'low':
        return <span className="text-blue-400">Low Water</span>;
      case 'medium':
        return <span className="text-blue-500">Medium Water</span>;
      case 'high':
        return <span className="text-blue-600">High Water</span>;
      default:
        return <span className="text-gray-500">Unknown</span>;
    }
  };
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img src={plant.imageUrl} alt={plant.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">{plant.name}</h3>
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
            {plant.plantType}
          </span>
        </div>
        <p className="text-gray-500 text-sm italic mb-3">
          {plant.scientificName}
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <SunIcon className="h-4 w-4 mr-2 text-amber-500" />
            {getSunlightIcon()}
          </div>
          <div className="flex items-center text-sm">
            <DropletIcon className="h-4 w-4 mr-2 text-blue-500" />
            {getWaterText()}
          </div>
          <div className="flex items-center text-sm">
            <RulerIcon className="h-4 w-4 mr-2 text-gray-500" />
            <span>{plant.height} inches</span>
          </div>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div className="text-sm">
            <span className="text-gray-600">Hardiness: </span>
            <span className="font-medium">Zone {plant.hardiness}</span>
          </div>
          <div className="text-sm">
            <span className={`px-2 py-1 rounded-full ${plant.environment === 'indoor' ? 'bg-purple-100 text-purple-800' : plant.environment === 'outdoor' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
              {plant.environment === 'both' ? 'Indoor/Outdoor' : plant.environment}
            </span>
          </div>
        </div>
      </div>
    </div>;
}