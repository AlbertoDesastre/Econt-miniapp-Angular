export interface Office {
  id: number;
  code: string;
  isMPS: boolean;
  isAPS: boolean;
  name: string;
  nameEn: string;
  phones: string[];
  emails: string[];
  address: {
    id: number;
    city: {
      id: number;
      country: {
        id: number;
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
      location: null | {
        latitude: number;
        longitude: number;
        confidence: number;
      };
      expressCityDeliveries: string;
      monday: boolean;
      tuesday: boolean;
      wednesday: boolean;
      thursday: boolean;
      friday: boolean;
      saturday: boolean;
      sunday: boolean;
    };
    fullAddress: string;
    fullAddressEn: string;
    quarter: string;
    street: string;
    num: string;
    other: string;
    location: {
      latitude: number;
      longitude: number;
      confidence: number;
    };
    zip: string;
  };
  info: string;
  currency: string;
  language: string;
  normalBusinessHoursFrom: number;
  normalBusinessHoursTo: number;
  halfDayBusinessHoursFrom: number;
  halfDayBusinessHoursTo: number;
  sundayBusinessHoursFrom: number;
  sundayBusinessHoursTo: number;
  shipmentTypes: string[];
  partnerCode: string;
  hubCode: string;
  hubName: string;
  hubNameEn: string;
}

export interface GetOfficeBody {
  countryCode: 'BGR';
  cityId: number;
}
