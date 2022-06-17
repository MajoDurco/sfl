import chicken from "assets/announcements/chickens.gif";
import nomad from "assets/announcements/nomad.png";

export interface Announcement {
  date: Date;
  image?: string;
  title: string;
  notes: string[];
  link?: string;
}

export const ANNOUNCEMENTS: Announcement[] = [
  {
    date: new Date(
      "Tue Jun 01 2022 10:06:50 GMT-0300 (Brasilia Standard Time)"
    ),
    title: "Chickens",
    notes: [
      "Craft chickens at the Barn",
      "Feed chickens wheat and collect eggs",
      "Craft a rare Chicken Coop to grow your egg empire",
      "Will you be lucky enough to find a mutant chicken in an egg?",
    ],
    link: "https://docs.sunflower-land.com/crafting-guide/farming-and-gathering#animals",
    image: chicken,
  },
  {
    date: new Date(
      "Tue Jun 17 2022 08:10:00 GMT-0300 (Brasilia Standard Time)"
    ),
    title: "Nomad Trader",
    notes: [
      "Find weekly offers",
      "Trade resources for items",
      "What would be the next offer?",
    ],
    image: nomad,
  },
];
