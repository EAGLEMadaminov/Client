import { useState } from 'react';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { format, addDays } from 'date-fns';
import Filter from '../features/catalog/filter';
import Package from '../features/catalog/package';
import { tourPackages } from '../utils/fakeData';

const Catalog = () => {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(Date.now(), 4),
  });
  const [allPackages, setAllPackeges] = useState(tourPackages);

  const handleDatePicker = (e) => {
    setDate({ from: new Date(e[0]), to: new Date(e[1]) });
  };

  return (
    <div>
      <div className="flex lg:w-[1200px] justify-center mx-auto px-5 py-1 rounded-[50px] ">
        <div className="border bg-white flex items-center px-5 rounded-l-[50px] w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-geo-alt text-text"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          <div className="flex flex-col ml-3">
            <h3 className="text-text font-[500]">Направление</h3>
            <input
              type="text"
              className="w-[90%] font-mon outline-none font-[500]"
              placeholder="Выберите город?"
            />
          </div>
        </div>
        <div className="border bg-white flex items-center py-1 px-5 w-full">
          <svg
            width="22"
            height="24"
            viewBox="0 0 26 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.49373 0.419922C6.03875 0.419922 6.48057 0.861746 6.48057 1.40676V2.57687H18.7534V1.40676C18.7534 0.861746 19.1953 0.419922 19.7403 0.419922C20.2853 0.419922 20.7271 0.861746 20.7271 1.40676V2.63201C23.1011 2.98911 24.9212 5.03754 24.9212 7.51108L24.9212 22.6239C24.9212 25.349 22.7121 27.5581 19.987 27.5581H5.51331C2.78822 27.5581 0.579102 25.349 0.579102 22.6239V7.51108C0.579102 5.13087 2.26444 3.14429 4.50689 2.67958V1.40676C4.50689 0.861746 4.94871 0.419922 5.49373 0.419922ZM5.48055 4.55073C3.86059 4.56829 2.55279 5.88696 2.55279 7.51108V22.6239C2.55279 24.2589 3.87826 25.5844 5.51331 25.5844H19.987C21.622 25.5844 22.9475 24.2589 22.9475 22.6239L22.9475 7.51108C22.9475 5.87602 21.622 4.55055 19.987 4.55055H5.51678C5.50912 4.55072 5.50144 4.55081 5.49373 4.55081C5.48933 4.55081 5.48494 4.55078 5.48055 4.55073ZM5.37233 8.59658C5.37233 8.05156 5.81416 7.60973 6.35918 7.60973H19.0413C19.5863 7.60973 20.0281 8.05156 20.0281 8.59658C20.0281 9.14159 19.5863 9.58342 19.0413 9.58342H6.35918C5.81416 9.58342 5.37233 9.14159 5.37233 8.59658Z"
              fill="#004280"
              stroke="#004280"
              strokeWidth="0.394737"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex flex-col ml-[10px]">
            <h2 className="text-text font-[500] font-mon">Дата</h2>
            <p className="font-[500] text-[#A4A6A8] font-mon">
              <span className="tracking-[2px]">
                {format(date.from, 'LLLL dd')} - {format(date.to, `LLLL  dd`)}
              </span>
            </p>
          </div>
          <DateRangePicker
            className="absolute opacity-0 "
            onChange={handleDatePicker}
          />
        </div>
        <button className="bg-[#FF9B06] font-[600] text-[21px] text-white py-1 px-3 rounded-r-[50px] w-full">
          Поиск
        </button>
      </div>

      <div className="flex justify-between w-[1200px] mx-auto mt-[30px]">
        <Filter />
        {/* Packages  */}
        <div className="packages w-full">
          <div className="flex justify-between">
            <h1 className="text-text font-[600] text-[24px]">Список туров</h1>
            <select
              name=""
              id=""
              className="border rounded-[20px] py-2 px-3 outline-none"
            >
              <option value="">Рекомендации</option>
              <option value="low">Цена: от низкой к высокой</option>
              <option value="high">Цена: от высокой к низкой</option>
            </select>
          </div>
          {allPackages.map((item) => (
            <Package key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
