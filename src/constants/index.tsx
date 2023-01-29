import { TbBrandAppleArcade } from "react-icons/tb";
import { IoLogoGameControllerA, IoLogoGameControllerB } from "react-icons/io";

export const plans = [
  { id: 0, name: "arcade", price: 9, icon: <TbBrandAppleArcade /> },
  { id: 1, name: "advanced", price: 12, icon: <IoLogoGameControllerA /> },
  { id: 2, name: "pro", price: 15, icon: <IoLogoGameControllerB /> },
];

export const addOnses = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    name: "Larger Storage",
    description: "Extra TTB of cloud save",
    price: 2,
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];
