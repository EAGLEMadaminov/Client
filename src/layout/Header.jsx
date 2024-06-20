import { Link } from 'react-router-dom';
import Globe from '../assets/earth_icon.png';

const Header = () => {
  console.log('salom');
  return (
    <div className="my-[20px] border-b font-mon">
      <div className="items-center flex justify-between mb-3 px-[30px] rounded-[30px] w-[1200px] mx-auto">
        <div className="flex items-center">
          <h1 className="text-text uppercase font-[700] text-[44px]">
            Top<span className="text-[#FF9B06]">Tour</span>
          </h1>
          <p className="text-[14px] ml-3 font-[500] text-[#84898E] w-[180px]">
            Все туры в одном месте!Открой мир с нами!
          </p>
        </div>
        <ul className="flex items-center gap-[20px]">
          <li className="text-text text-[14px] font-[500]">
            <Link>Главная</Link>
          </li>
          <li className="text-text text-[14px] font-[500]">
            <Link to="/main/catalog">Каталог</Link>
          </li>
          <li className="text-text text-[14px] font-[500]">
            <Link>Сотрудничество</Link>
          </li>
          <li className="text-text text-[14px] font-[500]">
            <Link>Блог</Link>
          </li>
          <li className="text-text text-[14px] font-[500]">
            <Link>Контакты</Link>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <button className="text-[#84898E] font-[500] ">Войти</button>
          <button className="py-2 px-4 font-[500] rounded-[8px] bg-text text-white">
            Регистрация
          </button>
          <div className="border gap-[25px] relative rounded-[8px] flex items-center py-[7px] px-[5px]">
            <img src={Globe} alt="" />
            <select className="left-[10px] z-[2] bg-transparent appearance-none absolute px-5 text-text font-[600] outline-none">
              <option value="ru">Ru</option>
              <option value="uz">Uz</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-caret-down-fill text-[#AEB3B8] ml-1"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
