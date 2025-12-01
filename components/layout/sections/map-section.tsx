"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ResultCard from '@/components/modules/maps/ResultCard';
import { SearchForm } from '@/components/modules/maps/SearchForm';
import { Button } from '@/components/ui/button';
import { PROVINCE_DB, ProvinceData } from '@/lib/mock-data';

// Dynamically import the map component to avoid server-side imports of Leaflet
const MapIndonesia = dynamic(() => import('@/components/modules/maps/MapIndonesia'), {
  ssr: false,
});

export default function MapSection() {
  const [highlightedCode, setHighlightedCode] = useState<string | null>(null);
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Default to Bali on load
  useEffect(() => {
    const bali = PROVINCE_DB.find(p => p.name === 'Bali');
    if (bali) {
      updateSelection(bali);
    }
  }, []);

  function updateSelection(province: ProvinceData) {
    setHighlightedCode(province.id);
    setCoordinates(province.coordinates);
    setData({
      province_name: province.name,
      match_score: Math.round((province.travel_score + province.econ_score) / 2),
      reasoning_travel: province.description_travel,
      reasoning_economic: province.description_econ,
      suggested_actions: province.actions,
    });
  }

  function handleSearch(values: any) {
    setIsLoading(true);
    console.log("Searching with:", values);
    
    setTimeout(() => {
      const industry = values.industry;
      
      // Define tags for each industry to match against province tags
      const industryTags: Record<string, string[]> = {
        tech: ['tech', 'startup', 'digital nomad', 'finance', 'smart city', 'electronics'],
        manufacturing: ['manufacturing', 'industry', 'steel', 'electronics', 'auto', 'factory', 'textile'],
        tourism: ['tourism', 'beach', 'nature', 'diving', 'culture', 'resort', 'leisure', 'history'],
        agriculture: ['agriculture', 'plantation', 'coffee', 'cacao', 'corn', 'rice', 'fish', 'spices']
      };

      const targetTags = industryTags[industry] || [];
      
      // Score each province based on tag matches and economic score
      const scoredProvinces = PROVINCE_DB.map(p => {
        const tagMatches = p.tags.filter(tag => targetTags.includes(tag)).length;
        // Weight tag matches heavily, then use econ score as tiebreaker
        const searchScore = (tagMatches * 100) + p.econ_score;
        return { ...p, searchScore };
      });
      
      // Sort by score descending
      scoredProvinces.sort((a, b) => b.searchScore - a.searchScore);
      
      // Pick the best match
      const bestMatch = scoredProvinces[0];

      if (bestMatch) {
        updateSelection(bestMatch);
      }
      
      setIsLoading(false);
    }, 1000);
  }

  function reset() {
    // Reset to Bali instead of null
    const bali = PROVINCE_DB.find(p => p.name === 'Bali');
    if (bali) {
      updateSelection(bali);
    }
  }

  return (
    <section className="container mx-auto my-12 px-4">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">Explore Investment Regions</h2>
          {data && data.province_name !== 'Bali' && (
            <Button variant="outline" onClick={reset}>
              Reset to Default
            </Button>
          )}
        </div>
        
        <div className="bg-slate-50/50 p-1 rounded-xl">
          <SearchForm onSearch={handleSearch} isLoading={isLoading} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[520px]">
        <div className="h-full">
          <MapIndonesia highlightedCode={highlightedCode} coordinates={coordinates} />
        </div>

        <div className="h-full">
          <ResultCard data={data} isLoading={isLoading} />
        </div>
      </div>
    </section>
  );
}
