import React from 'react';
import { PlantCard } from '../PlantCard/PlantCard';
import type { Plant } from '../model/Plant';
import { Loader2Icon, AlertCircleIcon, LeafIcon } from 'lucide-react';
interface PlantResultsProps {
  plants: Plant[] | null;
  isLoading: boolean;
  error: string | null;
}
export function PlantResults({
  plants,
  isLoading,
  error
}: PlantResultsProps) {
  // Initial state - no search performed yet
  if (!isLoading && !error && plants === null) {
    return <div className="text-center py-16">
        <div className="bg-emerald-50 inline-flex items-center justify-center p-4 rounded-full mb-4">
          <LeafIcon className="h-8 w-8 text-emerald-600" />
        </div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">
          Find Your Perfect Plants
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Use the search form above to discover plants that match your specific
          needs and growing conditions.
        </p>
      </div>;
  }
  // Loading state
  if (isLoading) {
    return <div className="text-center py-16">
        <Loader2Icon className="h-8 w-8 text-emerald-600 animate-spin mx-auto mb-4" />
        <p className="text-gray-600">Searching for plants...</p>
      </div>;
  }
  // Error state
  if (error) {
    return <div className="text-center py-16 bg-red-50 rounded-lg">
        <AlertCircleIcon className="h-8 w-8 text-red-500 mx-auto mb-4" />
        <h2 className="text-xl font-medium text-red-800 mb-2">Error</h2>
        <p className="text-red-600">{error}</p>
      </div>;
  }
  // No results
  if (plants && plants.length === 0) {
    return <div className="text-center py-16 bg-gray-50 rounded-lg">
        <div className="bg-gray-100 inline-flex items-center justify-center p-4 rounded-full mb-4">
          <LeafIcon className="h-8 w-8 text-gray-500" />
        </div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">
          No Plants Found
        </h2>
        <p className="text-gray-600">
          Try adjusting your search criteria to find more plants.
        </p>
      </div>;
  }
  // Results found
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          {plants?.length} {plants?.length === 1 ? 'Plant' : 'Plants'} Found
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {plants?.map(plant => <PlantCard key={plant.id} plant={plant} />)}
      </div>
    </div>;
}