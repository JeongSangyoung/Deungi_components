export interface State<T> {
  [index: string]: T
}
export interface TransferType {
  state?: { [index: string]: any },
  propsData?: { [index: string ]: any}
}

export interface IStepItem {
  name: string;
  path: string;
}

export interface IStep1CorpItem {
  content: string;
  image?: string;
  expertName: string;
  expertCharge: string;
  expertContent: string;
}

export interface IExpertItems {
  content: string;
  image?: string;
  expertName: string;
  expertCharge: string;
  expertContent: string; 
}

export interface ILocation {
  sido: string;
  sigungu: string;
  third: string;
}

export interface IRegMethodItems {
  duration: string;
  advantage: string;
  method: string;
  image: {
    checkded: string;
    uncheckded: string;
  }
  cost: string;
}

export interface IExecutive {
  name: string;
  charge: string;
  underage: boolean;
  foreigner: boolean;
}

export interface IBill {
  costName: string;
  totalCost: string;
  details?: IBillDetail[] | undefined;
  sale?: IBillDetail | undefined;
}

interface IBillDetail {
  costName: string;
  cost: string;
  sale?: boolean;
}

export interface IBenefitItem {
  name: string;
  image: string;
  title: string;
  cost: string;
  sale?: boolean;
  saleCost?: string;
}