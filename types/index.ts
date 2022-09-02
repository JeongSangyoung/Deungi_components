export interface State<T> {
  data: T,
  verified?: boolean;
}
export interface TemplateArgs {
  state: { [index: string]: any },
  propsData: { [index: string ]: any}
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