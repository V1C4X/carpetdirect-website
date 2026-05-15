export interface Project {
  id: string;
  title: string;
  suburb: string;
  category: "residential" | "commercial";
  product: string;
  photo: string;
  span: string; // tailwind col/row span
  aspect: string;
}

export const PROJECTS: Project[] = [
  {
    id: "stairs-meadowbank",
    title: "Wide-plank lounge, north light",
    suburb: "Meadowbank",
    category: "residential",
    product: "SPC plank · Natural Oak",
    photo: "/photos/living-room-carpet.jpg",
    span: "md:col-span-7 md:row-span-2",
    aspect: "aspect-[16/11]",
  },
  {
    id: "dining-remuera",
    title: "Dark-plank dining + lounge",
    suburb: "Remuera",
    category: "residential",
    product: "SPC plank · Smoked Walnut",
    photo: "/photos/spc-planks.jpg",
    span: "md:col-span-5",
    aspect: "aspect-[5/4]",
  },
  {
    id: "kitchen-newmarket",
    title: "Kitchen + dining re-floor",
    suburb: "Newmarket",
    category: "residential",
    product: "Vinyl plank",
    photo: "/photos/carpet-install-1.jpg",
    span: "md:col-span-5",
    aspect: "aspect-[5/4]",
  },
  {
    id: "lounge-mtroskill",
    title: "Family lounge, weekend turnaround",
    suburb: "Mt Roskill",
    category: "residential",
    product: "Cut-pile carpet",
    photo: "/photos/lounge-2.jpg",
    span: "md:col-span-7",
    aspect: "aspect-[16/9]",
  },
  {
    id: "bedroom-pakuranga",
    title: "Master bedroom in plush twist",
    suburb: "Pakuranga",
    category: "residential",
    product: "Plush twist carpet",
    photo: "/photos/bedroom-1.jpg",
    span: "md:col-span-6",
    aspect: "aspect-[4/3]",
  },
  {
    id: "showroom-otara",
    title: "Tile showroom floor",
    suburb: "Otara",
    category: "commercial",
    product: "Contract loop tile",
    photo: "/photos/lounge-1.jpg",
    span: "md:col-span-6",
    aspect: "aspect-[4/3]",
  },
  {
    id: "office-manukau",
    title: "Office fit-out",
    suburb: "Manukau",
    category: "commercial",
    product: "Carpet tile · contract loop",
    photo: "/photos/carpet-tiles.jpg",
    span: "md:col-span-7",
    aspect: "aspect-[16/9]",
  },
  {
    id: "garage-papatoetoe",
    title: "Garage carpet, double bay",
    suburb: "Papatoetoe",
    category: "commercial",
    product: "Garage carpet",
    photo: "/photos/garage-carpet.jpg",
    span: "md:col-span-5",
    aspect: "aspect-[5/4]",
  },
  {
    id: "swatches",
    title: "Sample wall at the warehouse",
    suburb: "Otara warehouse",
    category: "residential",
    product: "Carpet samples",
    photo: "/photos/real-install-1.webp",
    span: "md:col-span-12",
    aspect: "aspect-[21/9]",
  },
];
