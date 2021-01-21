import faker from "faker";

function getPicture() {
  return `${faker.image.imageUrl()}?random=${Math.round(Math.random() * 1000)}`;
};

export default function getPictures() {
  return [getPicture(), getPicture(), getPicture()];
};