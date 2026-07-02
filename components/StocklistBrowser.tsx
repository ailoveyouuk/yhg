'use client';

import { useMemo, useState } from 'react';
import type { Vehicle } from '@/types';
import VehicleCard from '@/components/VehicleCard';

type SortOption =
  | 'newest'
  | 'price-asc'
  | 'price-desc'
  | 'mileage-asc'
  | 'mileage-desc'
  | 'year-desc'
  | 'year-asc';

const SORT_LABELS: Record<SortOption, string> = {
  newest: 'Newest Listed',
  'price-asc': 'Price: Low to High',
  'price-desc': 'Price: High to Low',
  'mileage-asc': 'Mileage: Low to High',
  'mileage-desc': 'Mileage: High to Low',
  'year-desc': 'Year: Newest First',
  'year-asc': 'Year: Oldest First',
};

const inputClass =
  'w-full border border-[#EFEFEB] focus:border-[#111110] px-3 py-2.5 text-sm focus:outline-none transition-colors bg-white text-[#111110]';
const selectClass = `${inputClass} appearance-none`;
const labelClass = 'block text-[10px] font-medium text-[#5A5A57] uppercase tracking-[0.1em] mb-2';

function uniqueSorted(values: (string | undefined)[]): string[] {
  return Array.from(new Set(values.filter((v): v is string => !!v))).sort();
}

export default function StocklistBrowser({ vehicles }: { vehicles: Vehicle[] }) {
  const [query, setQuery] = useState('');
  const [make, setMake] = useState('all');
  const [model, setModel] = useState('all');
  const [type, setType] = useState('all');
  const [fuel, setFuel] = useState('all');
  const [transmission, setTransmission] = useState('all');
  const [colour, setColour] = useState('all');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [mileageMax, setMileageMax] = useState('');
  const [yearMin, setYearMin] = useState('');
  const [yearMax, setYearMax] = useState('');
  const [sort, setSort] = useState<SortOption>('newest');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const makes = useMemo(() => uniqueSorted(vehicles.map((v) => v.make)), [vehicles]);
  const models = useMemo(
    () => uniqueSorted(vehicles.filter((v) => make === 'all' || v.make === make).map((v) => v.model)),
    [vehicles, make]
  );
  const types = useMemo(() => uniqueSorted(vehicles.map((v) => v.type)), [vehicles]);
  const fuels = useMemo(() => uniqueSorted(vehicles.map((v) => v.fuel)), [vehicles]);
  const transmissions = useMemo(() => uniqueSorted(vehicles.map((v) => v.transmission)), [vehicles]);
  const colours = useMemo(() => uniqueSorted(vehicles.map((v) => v.colour)), [vehicles]);

  const activeFilterCount = [
    query.trim() !== '',
    make !== 'all',
    model !== 'all',
    type !== 'all',
    fuel !== 'all',
    transmission !== 'all',
    colour !== 'all',
    priceMin !== '',
    priceMax !== '',
    mileageMax !== '',
    yearMin !== '',
    yearMax !== '',
  ].filter(Boolean).length;

  function clearFilters() {
    setQuery('');
    setMake('all');
    setModel('all');
    setType('all');
    setFuel('all');
    setTransmission('all');
    setColour('all');
    setPriceMin('');
    setPriceMax('');
    setMileageMax('');
    setYearMin('');
    setYearMax('');
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = vehicles.filter((v) => {
      if (q) {
        const haystack = `${v.make} ${v.model} ${v.variant} ${v.colour} ${v.fuel}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (make !== 'all' && v.make !== make) return false;
      if (model !== 'all' && v.model !== model) return false;
      if (type !== 'all' && v.type !== type) return false;
      if (fuel !== 'all' && v.fuel !== fuel) return false;
      if (transmission !== 'all' && v.transmission !== transmission) return false;
      if (colour !== 'all' && v.colour !== colour) return false;
      if (priceMin !== '' && v.price < Number(priceMin)) return false;
      if (priceMax !== '' && v.price > Number(priceMax)) return false;
      if (mileageMax !== '' && v.mileage > Number(mileageMax)) return false;
      if (yearMin !== '' && v.year < Number(yearMin)) return false;
      if (yearMax !== '' && v.year > Number(yearMax)) return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'mileage-asc': return a.mileage - b.mileage;
        case 'mileage-desc': return b.mileage - a.mileage;
        case 'year-desc': return b.year - a.year;
        case 'year-asc': return a.year - b.year;
        case 'newest':
        default:
          return a.date_added < b.date_added ? 1 : -1;
      }
    });

    return list;
  }, [vehicles, query, make, model, type, fuel, transmission, colour, priceMin, priceMax, mileageMax, yearMin, yearMax, sort]);

  const FilterFields = (
    <div className="space-y-5">
      <div>
        <label className={labelClass}>Search</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. Puma, estate, diesel…"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Make</label>
          <select value={make} onChange={(e) => { setMake(e.target.value); setModel('all'); }} className={selectClass}>
            <option value="all">All Makes</option>
            {makes.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Model</label>
          <select value={model} onChange={(e) => setModel(e.target.value)} className={selectClass}>
            <option value="all">All Models</option>
            {models.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
      </div>

      {types.length > 1 && (
        <div>
          <label className={labelClass}>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className={selectClass}>
            <option value="all">All Types</option>
            {types.map((t) => <option key={t} value={t}>{t === 'car' ? 'Car' : 'Van'}</option>)}
          </select>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Fuel</label>
          <select value={fuel} onChange={(e) => setFuel(e.target.value)} className={selectClass}>
            <option value="all">All Fuels</option>
            {fuels.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Transmission</label>
          <select value={transmission} onChange={(e) => setTransmission(e.target.value)} className={selectClass}>
            <option value="all">All</option>
            {transmissions.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Colour</label>
        <select value={colour} onChange={(e) => setColour(e.target.value)} className={selectClass}>
          <option value="all">All Colours</option>
          {colours.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div>
        <label className={labelClass}>Price range (£)</label>
        <div className="grid grid-cols-2 gap-3">
          <input type="number" min={0} value={priceMin} onChange={(e) => setPriceMin(e.target.value)} placeholder="Min" className={inputClass} />
          <input type="number" min={0} value={priceMax} onChange={(e) => setPriceMax(e.target.value)} placeholder="Max" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Max mileage</label>
        <input type="number" min={0} value={mileageMax} onChange={(e) => setMileageMax(e.target.value)} placeholder="Any" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Year</label>
        <div className="grid grid-cols-2 gap-3">
          <input type="number" value={yearMin} onChange={(e) => setYearMin(e.target.value)} placeholder="From" className={inputClass} />
          <input type="number" value={yearMax} onChange={(e) => setYearMax(e.target.value)} placeholder="To" className={inputClass} />
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="w-full text-center text-[#004225] hover:text-[#111110] text-xs font-semibold uppercase tracking-[0.1em] py-2 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
      {/* ─── Filters — sidebar on desktop, collapsible on mobile ─── */}
      <div className="lg:col-span-1">
        <button
          onClick={() => setFiltersOpen((o) => !o)}
          className="lg:hidden w-full flex items-center justify-between bg-white border border-[#EFEFEB] px-4 py-3 mb-4 text-sm font-medium text-[#111110]"
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
            </svg>
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </span>
          <svg className={`w-4 h-4 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        <div className={`bg-white border border-[#EFEFEB] p-6 ${filtersOpen ? 'block' : 'hidden'} lg:block lg:sticky lg:top-24`}>
          <h2 className="text-sm font-semibold text-[#111110] tracking-tight mb-5 hidden lg:block">Filter Stocklist</h2>
          {FilterFields}
        </div>
      </div>

      {/* ─── Results ─── */}
      <div className="lg:col-span-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <p className="text-[#5A5A57] text-sm tracking-wide">
            {results.length} car{results.length !== 1 ? 's' : ''} found
          </p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className={`${selectClass} w-auto min-w-[190px]`}
          >
            {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
              <option key={key} value={key}>{SORT_LABELS[key]}</option>
            ))}
          </select>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {results.map((v) => <VehicleCard key={v.id} v={v} />)}
          </div>
        ) : (
          <div className="text-center py-24 border border-[#EFEFEB] bg-white rounded-sm">
            <p className="text-[#111110] font-medium">No cars match those filters</p>
            <p className="text-sm mt-2 text-[#5A5A57]">Try widening your search, or get in touch — we can source vehicles to your requirements.</p>
            <button
              onClick={clearFilters}
              className="mt-5 text-[#004225] hover:text-[#111110] text-xs font-semibold uppercase tracking-[0.1em] transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
