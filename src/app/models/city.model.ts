export interface City {
  id: number;
  country: {
    id: null;
    code2: string;
    code3: string;
    name: string;
    nameEn: string;
    isEU: boolean;
  };
  postCode: string;
  name: string;
  nameEn: string;
  regionName: string;
  regionNameEn: string;
  phoneCode: string;
  location: null;
  expressCityDeliveries: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}

export interface TinyCity {
  id: number;
  nameEn: string;
}
