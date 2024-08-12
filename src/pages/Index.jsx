import React, { useState } from 'react';
import StockholmMap from '../components/StockholmMap';
import IsochroneForm from '../components/IsochroneForm';
import { fetchIsochrone } from '../services/isochroneService';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [isochrone, setIsochrone] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (data) => {
    setIsLoading(true);
    try {
      const isochroneData = await fetchIsochrone(data.lat, data.lon, data.time);
      setIsochrone(isochroneData);
      toast({
        title: "Isochrone generated",
        description: "The isochrone has been successfully generated and displayed on the map.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate isochrone. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Stockholm Isochrone Map</h1>
        <IsochroneForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
      <div className="w-3/4">
        <StockholmMap isochrone={isochrone} />
      </div>
    </div>
  );
};

export default Index;