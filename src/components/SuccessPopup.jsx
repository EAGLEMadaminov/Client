import React from 'react';
import { useDispatch } from 'react-redux';
import { showSuccessMessage } from '../redux/slices/auth';
import Mail from '../assets/mail.png';

const ShowSuccessPopup = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col p-5 h-[350px] justify-center">
      <button
        className="ml-auto mr-5 text-[#000]"
        onClick={() => dispatch(showSuccessMessage(false))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </button>

      <img src={Mail} alt="mail image" />
      <h2 className="text-text font-medium text-[20px]">
        Ваш запрос был отправлен
      </h2>
      <p className="mt-3 text-center text-[#686868]">
        Ваша информация получена наши администраторы свяжутся с вами.
      </p>
      <button
        className="bg-text p-2 px-3 text-center text-white mt-5"
        onClick={() => dispatch(showSuccessMessage(false))}
      >
        Вернуться на сайт
      </button>
    </div>
  );
};

export default ShowSuccessPopup;
