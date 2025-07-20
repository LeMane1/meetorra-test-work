export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: IProduct[] = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    price: 22990,
    image: '/images/nike.avif',
    description: 'Легендарные кроссовки с амортизацией Air и стильным дизайном. Подходят для повседневной носки и спорта.',
  },
  {
    id: 2,
    name: 'Adidas Ultraboost 22',
    price: 19990,
    image: '/images/adidas.webp',
    description: 'Беговые кроссовки с отличной поддержкой и возвращением энергии. Идеальны для длительных пробежек.',
  },
  {
    id: 3,
    name: 'Puma RS-X³',
    price: 13490,
    image: '/images/puma.avif',
    description: 'Массивные и стильные кроссовки в стиле 90-х. Комфортная посадка и уникальный дизайн.',
  },
  {
    id: 4,
    name: 'Asics Gel-Kayano 30',
    price: 17990,
    image: '/images/asics.jpg',
    description: 'Премиальные беговые кроссовки с максимальной стабилизацией и гелевой амортизацией.',
  },
  {
    id: 5,
    name: 'New Balance 550',
    price: 15490,
    image: '/images/new_balance.webp',
    description: 'Классические ретро-кроссовки в баскетбольном стиле. Отличный выбор для города и повседневной носки.',
  },
  {
    id: 6,
    name: 'Reebok Club C 85',
    price: 9990,
    image: '/images/reebok.webp',
    description: 'Универсальные кеды в минималистичном дизайне. Легендарная модель с винтажным характером.',
  }
]