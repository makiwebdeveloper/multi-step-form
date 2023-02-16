import { TbBrandAppleArcade } from "react-icons/tb";
import { IoLogoGameControllerA, IoLogoGameControllerB } from "react-icons/io";

export const plans = [
  { id: 0, name: "Arcade", price: 9, icon: <TbBrandAppleArcade /> },
  { id: 1, name: "Advanced", price: 12, icon: <IoLogoGameControllerA /> },
  { id: 2, name: "Pro", price: 15, icon: <IoLogoGameControllerB /> },
];

export const addOnses = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    name: "Larger storage",
    description: "Extra TTB of cloud save",
    price: 2,
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];
