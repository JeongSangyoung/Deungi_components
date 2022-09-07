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

export interface IStep1CorpItems {
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