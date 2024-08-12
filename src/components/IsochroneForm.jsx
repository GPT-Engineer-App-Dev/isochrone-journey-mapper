import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const IsochroneForm = ({ onSubmit, isLoading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit({
      lat: formData.get('lat'),
      lon: formData.get('lon'),
      time: formData.get('time'),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="lat">Latitude</Label>
        <Input type="text" id="lat" name="lat" defaultValue="59.3293" required />
      </div>
      <div>
        <Label htmlFor="lon">Longitude</Label>
        <Input type="text" id="lon" name="lon" defaultValue="18.0686" required />
      </div>
      <div>
        <Label htmlFor="time">Travel Time (minutes)</Label>
        <Input type="number" id="time" name="time" defaultValue="30" required />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Generate Isochrone'}
      </Button>
    </form>
  );
};

export default IsochroneForm;