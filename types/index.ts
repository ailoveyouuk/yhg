export type VehicleStatus = 'available' | 'reserved' | 'sold';
export type VehicleType = 'car' | 'van';
export type PriceType = 'fixed' | 'from' | 'quote';

export interface Vehicle {
  id: string;
  status: VehicleStatus;
  type: VehicleType;
  make: string;
  model: string;
  variant: string;
  year: number;
  price: number;
  mileage: number;
  colour: string;
  fuel: string;
  transmission: 'Manual' | 'Automatic';
  doors: number;
  engine: string;
  power_bhp: number;
  co2_gkm: number;
  mot_expiry: string;
  service_history: string;
  previous_owners: number;
  hpi_clear: boolean;
  v5c_present: boolean;
  description: string;
  features: string[];
  images: string[];
  date_added: string;
  notes: string;
}

export type ServiceCategory =
  | 'Servicing'
  | 'MOT'
  | 'Tyres & Wheels'
  | 'Air Conditioning'
  | 'Diagnostics'
  | 'Bodywork';

export interface Service {
  id: string;
  category: ServiceCategory;
  name: string;
  description: string;
  includes: string[];
  price: number | null;
  price_type: PriceType;
  duration_hours: number | null;
  booking_available: boolean;
  active: boolean;
}
