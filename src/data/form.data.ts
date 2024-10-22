import { FormInfo, PlanDuration, PlanName } from "../context/form.types";

export const titles = [
  "Personal info",
  "Select your plan",
  "Pick add-ons",
  "Finishing up",
];

export const descriptions = [
  "Please provide your name, email, address, and phone number.",
  "You have the oprion of monthly or yearly billing.",
  "Add-ons help enhance your gaming experience.",
  "Double-check everything looks OK before confirming.",
];

export const options = {
  monthly: [
    {
      title: "Arcade",
      price: 9,
    },
    {
      title: "Advanced",
      price: 12,
    },
    {
      title: "Pro",
      price: 15,
    },
  ],
  yearly: [
    {
      title: "Arcade",
      price: 90,
    },
    {
      title: "Advanced",
      price: 120,
    },
    {
      title: "Pro",
      price: 150,
    },
  ],
};

export const addons = {
  monthly: [
    {
      title: "Online Service",
      description: "Access to multiple games",
      price: 1,
    },
    {
      title: "Larger Storage",
      description: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      price: 2,
    },
  ],
  yearly: [
    {
      title: "Online Service",
      description: "Access to multiple games",
      price: 10,
    },
    {
      title: "Larger Storage",
      description: "Extra 1TB of cloud save",
      price: 20,
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      price: 20,
    },
  ],
};

export const emptyData: FormInfo = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  planDuration: PlanDuration.monthly,
  addons: [],
};
