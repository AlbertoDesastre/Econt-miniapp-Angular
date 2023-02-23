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

export const exampleCity: City = {
  id: 0,
  country: {
    id: null,
    code2: '',
    code3: '',
    name: '',
    nameEn: '',
    isEU: true,
  },
  postCode: '0000',
  name: '',
  nameEn: '',
  regionName: '',
  regionNameEn: '',
  phoneCode: '0',
  location: null,
  expressCityDeliveries: true,
  monday: true,
  tuesday: true,
  wednesday: true,
  thursday: true,
  friday: true,
  saturday: true,
  sunday: false,
};
