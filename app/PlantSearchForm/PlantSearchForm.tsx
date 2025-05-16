import React, { useState } from 'react';
import { SearchIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import type { SearchCriteria } from '../model/SearchCriteria';

interface PlantSearchFormProps {
  onSearch: (criteria: SearchCriteria) => void;
}

export default function PlantSearchForm({
  onSearch
}: PlantSearchFormProps) {
  const [expanded, setExpanded] = useState(false);
  const [formData, setFormData] = useState<SearchCriteria>({
    keyword: '',
    plantType: '',
    sunlight: '',
    water: '',
    minHeight: '',
    maxHeight: '',
    hardiness: '',
    environment: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(formData);
  };
  return <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1">
          <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-1">
            Plant Name or Keyword
          </label>
          <div className="relative">
            <input type="text" id="keyword" name="keyword" value={formData.keyword} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-emerald-900" placeholder="Search plants..." />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
          Search Plants
        </button>
        <button type="button" onClick={() => setExpanded(!expanded)} className="flex items-center text-emerald-700 px-4 py-2 rounded-md font-medium">
          {expanded ? <>
              Less Filters <ChevronUpIcon className="ml-1 h-4 w-4" />
            </> : <>
              More Filters <ChevronDownIcon className="ml-1 h-4 w-4" />
            </>}
        </button>
      </div>
      {expanded && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div>
            <label htmlFor="plantType" className="block text-sm font-medium text-gray-700 mb-1">
              Plant Type
            </label>
            <select id="plantType" name="plantType" value={formData.plantType} onChange={handleChange} className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-emerald-900">
              <option value="">Any Type</option>
              <option value="tree">Tree</option>
              <option value="shrub">Shrub</option>
              <option value="flower">Flower</option>
              <option value="grass">Grass</option>
              <option value="vine">Vine</option>
              <option value="succulent">Succulent</option>
              <option value="herb">Herb</option>
            </select>
          </div>
          <div>
            <label htmlFor="sunlight" className="block text-sm font-medium text-gray-700 mb-1">
              Sunlight Needs
            </label>
            <select id="sunlight" name="sunlight" value={formData.sunlight} onChange={handleChange} className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-emerald-900">
              <option value="">Any Sunlight</option>
              <option value="full">Full Sun</option>
              <option value="partial">Partial Shade</option>
              <option value="shade">Full Shade</option>
            </select>
          </div>
          <div>
            <label htmlFor="water" className="block text-sm font-medium text-gray-700 mb-1">
              Water Requirements
            </label>
            <select id="water" name="water" value={formData.water} onChange={handleChange} className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-emerald-900">
              <option value="">Any Water Need</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label htmlFor="environment" className="block text-sm font-medium text-gray-700 mb-1">
              Environment
            </label>
            <select id="environment" name="environment" value={formData.environment} onChange={handleChange} className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-emerald-900">
              <option value="">Indoor/Outdoor</option>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
              <option value="both">Both</option>
            </select>
          </div>
          <div>
            <label htmlFor="hardiness" className="block text-sm font-medium text-gray-700 mb-1">
              Hardiness Zone
            </label>
            <select id="hardiness" name="hardiness" value={formData.hardiness} onChange={handleChange} className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-emerald-900">
              <option value="">Any Zone</option>
              {[...Array(13)].map((_, i) => <option key={i} value={`${i + 1}`}>
                  Zone {i + 1}
                </option>)}
            </select>
          </div>
          <div>
            <label htmlFor="minHeight" className="block text-sm font-medium text-gray-700 mb-1 ">
              Min Height (inches)
            </label>
            <input type="number" id="minHeight" name="minHeight" value={formData.minHeight} onChange={handleChange} min="0" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-emerald-900" placeholder="Minimum" />
          </div>
          <div>
            <label htmlFor="maxHeight" className="block text-sm font-medium text-gray-700 mb-1">
              Max Height (inches)
            </label>
            <input type="number" id="maxHeight" name="maxHeight" value={formData.maxHeight} onChange={handleChange} min="0" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-emerald-900" placeholder="Maximum" />
          </div>
        </div>}
    </form>;
}