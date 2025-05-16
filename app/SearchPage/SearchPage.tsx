import { useState } from "react";
import PlantSearchForm from "~/PlantSearchForm/PlantSearchForm";
import { PlantResults } from "~/PlantResults/PlantResults";
import type { SearchCriteria } from "~/model/SearchCriteria";
import type { Plant } from "~/model/Plant";
import { searchPlants } from "~/util/MockData";

export default function SearchPage(){
  const [searchResults, setSearchResults] = useState<Plant[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSearch = async (criteria: SearchCriteria) => {
    setIsLoading(true);
    setError(null);
    try {
      const results = await searchPlants(criteria);
      setSearchResults(results);
    } catch (err) {
      setError('Failed to fetch plants. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return <div className="min-h-screen bg-gray-50">
      <header className="bg-emerald-700 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Leaf Link</h1>
          <p className="mt-2">Find the perfect plants for your space</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <div className="sticky top-0 z-10 bg-gray-50 pt-2 pb-6 border-b border-gray-200">
          <PlantSearchForm onSearch={handleSearch} />
        </div>
        <div className="mt-6">
          <PlantResults plants={searchResults} isLoading={isLoading} error={error} />
        </div>
      </main>
    </div>;

}

