export enum StepChangeType {
  reduce = "reduce",
  increase = "increase",
}

export enum PlanDuration {
  monthly = "monthly",
  yearly = "yearly",
}

export enum PlanName {
  arcade = "arcade",
  advanced = "advanced",
  pro = "pro",
}

export interface addon {
  title: string;
  description: string;
  price: number;
}

export interface FormInfo {
  name: string;
  email: string;
  phone: string;
  plan: string;
  planDuration: PlanDuration;
  addons: addon[];
}
