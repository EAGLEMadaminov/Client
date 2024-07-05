import TourImage from '../assets/london.png';
import Ticket from '../assets/ticket.png';
import Hotel from '../assets/bed.png';
import Dishes from '../assets/dishes.png';

const Cities = [
  {
    name: 'Tashkent',
    id: 1,
  },
  {
    name: 'Buxoro',
    id: 2,
  },
  {
    name: 'Samarqand',
    id: 3,
  },
  {
    name: 'Namangan',
    id: 4,
  },
  {
    name: 'Jizzax',
    id: 5,
  },
  {
    name: 'Navoiy',
    id: 6,
  },
];

const includes = [
  {
    id: 1,
    name: 'Гид',
  },
  {
    id: 2,
    name: 'Авиабилеты',
  },
  {
    id: 3,
    name: 'Страховка',
  },
];

const howManyTimeGiveFood = [
  {
    id: 1,
    title: 'Завтрак включен в стоимость проживания',
  },
  {
    id: 2,
    title: 'Ужин включен в стоимость проживания',
  },
  {
    id: 3,
    title: 'Обед включен в стоимость проживания',
  },
];
const Facilities = [
  {
    id: 1,
    name: 'Бассейн',
  },
  {
    id: 2,
    name: 'Спа',
  },
  {
    id: 3,
    name: 'Вид на океан',
  },
  {
    id: 4,
    name: 'Гидромассажная ванна',
  },
  {
    id: 5,
    name: 'Возможно размещение с домашними животными',
  },
  {
    id: 6,
    name: 'Трансфер от /до аэропорта включен в стоимость',
  },
  {
    id: 7,
    name: 'Тренажерный зал',
  },
  {
    id: 8,
    name: 'Аквапарк',
  },
  {
    id: 9,
    name: 'Wi-Fi включен',
  },
  {
    id: 10,
    name: 'Стиральная машина и сушилка',
  },
  {
    id: 11,
    name: 'Парковка',
  },
  {
    id: 12,
    name: 'Открытая площадка',
  },
  {
    id: 13,
    name: 'Ресторан',
  },
];
const tourPackages = [
  {
    id: 1,
    title: 'Поездка в США',
    image: TourImage,
    description:
      'Познакомьтесь с достопримечательностями Лондона с помощью 2 классических видов транспорта в этом приключении на полдня. Во-первых, вы сможете...',
    price: '1,523',
    discount: '3,045',
    from: 'Ташкент',
    to: 'Стамбул',
    start: '07.11.2024',
    end: '07.20.2024',
    includes: [
      {
        id: 1,
        title: 'Авиабилет',
        icon: Ticket,
      },
      {
        id: 2,
        title: 'Отель',
        icon: Hotel,
      },
      {
        id: 3,
        title: 'Завтрак',
        icon: Dishes,
      },
    ],
  },
  {
    id: 2,
    title: 'Поездка в США',
    image: TourImage,
    description:
      'Познакомьтесь с достопримечательностями Лондона с помощью 2 классических видов транспорта в этом приключении на полдня. Во-первых, вы сможете...',
    price: '1,523',
    discount: '3,045',
    from: 'Ташкент',
    to: 'Стамбул',
    start: '07.11.2024',
    end: '07.20.2024',
    includes: [
      {
        id: 1,
        title: 'Авиабилет',
        icon: Ticket,
      },
      {
        id: 2,
        title: 'Отель',
        icon: Hotel,
      },
      {
        id: 3,
        title: 'Завтрак',
        icon: Dishes,
      },
    ],
  },
  {
    id: 3,
    title: 'Поездка в США',
    image: TourImage,
    description:
      'Познакомьтесь с достопримечательностями Лондона с помощью 2 классических видов транспорта в этом приключении на полдня. Во-первых, вы сможете...',
    price: '1,523',
    discount: '3,045',
    from: 'Ташкент',
    to: 'Стамбул',
    start: '07.11.2024',
    end: '07.20.2024',
    includes: [
      {
        id: 1,
        title: 'Авиабилет',
        icon: Ticket,
      },
      {
        id: 2,
        title: 'Отель',
        icon: Hotel,
      },
      {
        id: 3,
        title: 'Завтрак',
        icon: Dishes,
      },
    ],
  },
  {
    id: 4,
    title: 'Поездка в США',
    image: TourImage,
    description:
      'Познакомьтесь с достопримечательностями Лондона с помощью 2 классических видов транспорта в этом приключении на полдня. Во-первых, вы сможете...',
    price: '1,523',
    discount: '3,045',
    from: 'Ташкент',
    to: 'Стамбул',
    start: '07.11.2024',
    end: '07.20.2024',
    includes: [
      {
        id: 1,
        title: 'Авиабилет',
        icon: Ticket,
      },
      {
        id: 2,
        title: 'Отель',
        icon: Hotel,
      },
      {
        id: 3,
        title: 'Завтрак',
        icon: Dishes,
      },
    ],
  },
  {
    id: 5,
    title: 'Поездка в США',
    image: TourImage,
    description:
      'Познакомьтесь с достопримечательностями Лондона с помощью 2 классических видов транспорта в этом приключении на полдня. Во-первых, вы сможете...',
    price: '1,523',
    discount: '3,045',
    from: 'Ташкент',
    to: 'Стамбул',
    start: '07.11.2024',
    end: '07.20.2024',
    includes: [
      {
        id: 1,
        title: 'Авиабилет',
        icon: Ticket,
      },
      {
        id: 2,
        title: 'Отель',
        icon: Hotel,
      },
      {
        id: 3,
        title: 'Завтрак',
        icon: Dishes,
      },
    ],
  },
];

const detail_includes = [
  {
    id: 1,
    text: 'Завтрак',
    icon: Dishes,
  },
  {
    id: 2,
    text: 'Завтрак',
    icon: Dishes,
  },
  {
    id: 3,
    text: 'Завтрак',
    icon: Dishes,
  },
  {
    id: 4,
    text: 'Завтрак',
    icon: Dishes,
  },
  {
    id: 5,
    text: 'Завтрак',
    icon: Dishes,
  },
  {
    id: 6,
    text: 'Завтрак',
    icon: Dishes,
  },
  {
    id: 7,
    text: 'Завтрак',
    icon: Dishes,
  },
  {
    id: 8,
    text: 'Завтрак',
    icon: Dishes,
  },
  {
    id: 9,
    text: 'Завтрак',
    icon: Dishes,
  },
  {
    id: 10,
    text: 'Завтрак',
    icon: Dishes,
  },
  {
    id: 11,
    text: 'Завтрак',
    icon: Dishes,
  },
  {
    id: 12,
    text: 'Завтрак',
    icon: Dishes,
  },
];
export {
  Cities,
  includes,
  howManyTimeGiveFood,
  Facilities,
  tourPackages,
  detail_includes,
};
