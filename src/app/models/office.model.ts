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
    id: number | null;
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
      regionName: string | null;
      regionNameEn: string | null;
      phoneCode: string | null;
      location: null | {
        latitude: number;
        longitude: number;
        confidence: number;
      };
      expressCityDeliveries: string | null;
      monday: boolean | null;
      tuesday: boolean | null;
      wednesday: boolean | null;
      thursday: boolean | null;
      friday: boolean | null;
      saturday: boolean | null;
      sunday: boolean | null;
    };
    fullAddress: string;
    fullAddressEn: string;
    quarter: string | null;
    street: string;
    num: string;
    other: string;
    location: {
      latitude: number;
      longitude: number;
      confidence: number;
    };
    zip: string | null;
  };
  info: string;
  currency: string;
  language: string | null;
  normalBusinessHoursFrom: number | string;
  normalBusinessHoursTo: number | string;
  halfDayBusinessHoursFrom: number;
  halfDayBusinessHoursTo: number;
  sundayBusinessHoursFrom: number | null;
  sundayBusinessHoursTo: number | null;
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

export const exampleOffice: Office = {
  id: 133,
  code: '8501',
  isMPS: false,
  isAPS: false,
  name: 'Айтос Автогара',
  nameEn: 'Aytos Avtogara',
  phones: ['+359 82 526 831'],
  emails: ['aitos_avtogara@econt.com'],
  address: {
    id: null,
    city: {
      id: 1,
      country: {
        id: 1033,
        code2: 'BG',
        code3: 'BGR',
        name: 'България',
        nameEn: 'Bulgaria',
        isEU: true,
      },
      postCode: '8500',
      name: 'Айтос',
      nameEn: 'Aytos',
      regionName: null,
      regionNameEn: null,
      phoneCode: null,
      location: null,
      expressCityDeliveries: null,
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      friday: null,
      saturday: null,
      sunday: null,
    },
    fullAddress: ' Айтос ул. Георги Кондолов №7',
    fullAddressEn: ' Aytos ul. Georgi Kondolov №7',
    quarter: null,
    street: 'ул. Георги Кондолов',
    num: '7',
    other: '',
    location: {
      latitude: 42.704851736031536,
      longitude: 27.24844999151003,
      confidence: 3,
    },
    zip: null,
  },
  info: 'ТП; ЕЛБО - БОРИСЛАВ ГЕОРГИЕВ 11.2.2008-01.01.2010; С нова фирма ЕЛБО БГГ ЕООД от 01.01.2010; Промяна на име от Айтос Елбо на Айтос Автогара от 26.06.2014',
  currency: 'BGN',
  language: null,
  normalBusinessHoursFrom: 1677135600000,
  normalBusinessHoursTo: 1677168000000,
  halfDayBusinessHoursFrom: 1677135600000,
  halfDayBusinessHoursTo: 1677150000000,
  sundayBusinessHoursFrom: null,
  sundayBusinessHoursTo: null,
  shipmentTypes: ['post', 'courier', 'cargo', 'pallet'],
  partnerCode: '',
  hubCode: '8501',
  hubName: 'Айтос Автогара',
  hubNameEn: 'Aytos Avtogara',
};
