import { useState, type FormEvent } from "react";
import type { SearchParams } from "~/model/SearchParams";
import "./SearchForm.css";

interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [formData, setFormData] = useState<SearchParams>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const filtered: SearchParams = Object.fromEntries(
      Object.entries(formData).filter(([, v]) => v !== "" && v !== undefined)
    );
    onSearch(filtered);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-3 p-10 mx-20 border-2 border-solid border-sky-500 rounded-lg">
        <input className="field" name="name" placeholder="Name" onChange={handleChange} />
        <input className="field"
          name="scientific_name"
          placeholder="Scientific Name"
          onChange={handleChange}
        />
        <input className="field"
          name="fall_color"
          placeholder="Fall Color"
          onChange={handleChange}
        />
        <input className="field"
          name="flower_color"
          placeholder="Flower Color"
          onChange={handleChange}
        />
        <input className="field" name="notes" placeholder="Notes" onChange={handleChange} />

        <input className="field"
          type="number"
          name="zone_min"
          placeholder="Zone Min"
          onChange={handleChange}
        />
        <input className="field"
          type="number"
          name="zone_max"
          placeholder="Zone Max"
          onChange={handleChange}
        />

        <input className="field"
          type="number"
          name="height_range_min"
          placeholder="Min Height (ft)"
          onChange={handleChange}
        />
        <input className="field"
          type="number"
          name="height_range_max"
          placeholder="Max Height (ft)"
          onChange={handleChange}
        />

        <input className="field"
          type="number"
          name="spread_range_min"
          placeholder="Min Spread (ft)"
          onChange={handleChange}
        />
        <input className="field"
          type="number"
          name="spread_range_max"
          placeholder="Max Spread (ft)"
          onChange={handleChange}
        />

        <select className="field" name="sun_exposure" onChange={handleChange} defaultValue="">
          <option value="">Sun Exposure</option>
          <option value="1">Full Shade</option>
          <option value="2">Partial Shade</option>
          <option value="3">Partial Sun</option>
          <option value="4">Full to Part</option>
          <option value="5">Full Sun</option>
        </select>

        <select className="field" name="water_needs" onChange={handleChange} defaultValue="">
          <option value="">Water Needs</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>

        <select  className="field" name="maintenance" onChange={handleChange} defaultValue="">
          <option value="">Maintenance</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>

        <select className="field"
          name="bloom_period_begin"
          onChange={handleChange}
          defaultValue=""
        >
          <option value="">Bloom Start</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>

        <select className="field" name="bloom_period_end" onChange={handleChange} defaultValue="">
          <option value="">Bloom End</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>

        <select className="field" name="animal_tolerance" onChange={handleChange} defaultValue="">
          <option value="">Animal Tolerance</option>
          <option value="deer">Deer</option>
          <option value="rabbit">Rabbit</option>
          <option value="rodent">Rodent</option>
          <option value="goose">Goose</option>
        </select>

        <input className="field"
          name="good_soil_types"
          placeholder="Good Soil"
          onChange={handleChange}
        />
        <input className="field"
          name="bad_soil_types"
          placeholder="Bad Soil"
          onChange={handleChange}
        />

        <label className="cb">
          <input type="checkbox" name="evergreen" onChange={handleChange} />{" "}
          Evergreen
        </label>
        <label className="cb">
          <input  type="checkbox" name="specimen" onChange={handleChange} />{" "}
          Specimen
        </label>
        <label className="cb">
          <input 
            type="checkbox"
            name="drought_tolerant"
            onChange={handleChange}
          />{" "}
          Drought Tolerant
        </label>
        <label className="cb">
          <input
            type="checkbox"
            name="air_pollution_tolerant"
            onChange={handleChange}
          />{" "}
          Air Pollution Tolerant
        </label>
        <label className="cb">
          <input
            type="checkbox"
            name="clay_soil_tolerant"
            onChange={handleChange}
          />{" "}
          Clay Soil Tolerant
        </label>
      </div>

      <button className="px-15 mx-20 mt-5 py-5 bg-sky-500 rounded-lg text-sky-100"type="submit">Search</button>
    </form>
  );
}
