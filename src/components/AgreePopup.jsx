import { useDispatch, useSelector } from 'react-redux';
import { showAgreePopup, showSuccessMessage } from '../redux/slices/auth';
import axiosIntance from '../utils/libs/axios';
import { useState } from 'react';

const AgreePopup = ({ name }) => {
  const [userComment, setUserComment] = useState('');
  const phoneNumber = useSelector((store) => store.auth.phoneNumber);
  const dispatch = useDispatch();
  const token = localStorage.getItem('access_token');

  const handleBooking = async () => {
    const bookingInfo = {};
    bookingInfo.phone_number = phoneNumber.replace(/\s/g, '');
    bookingInfo.name = name;
    bookingInfo.comment = userComment;
    bookingInfo.link = window.location.href;
    try {
      const { data } = await axiosIntance.post('/booking', bookingInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data) {
        console.log(data);
        dispatch(showSuccessMessage(true));
        dispatch(showAgreePopup(false));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col p-5 h-[350px] justify-center">
      {' '}
      <button
        className="ml-auto mr-5 text-[#000]"
        onClick={() => dispatch(showAgreePopup(false))}
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
      <h2 className="text-[24px] text-center font-[600] text-[#022F5E]">
        Подтверждение
      </h2>
      <h4 className="text-center font-[500]">
        Вы уверены, что хотите забронировать этот пакет?
      </h4>
      <label htmlFor="comment" className="text-left">
        Комментарий
      </label>
      <textarea
        name=""
        className="border rounded-xl p-1 text-[14px] px-3"
        id="comment"
        onChange={(e) => setUserComment(e.target.value)}
        rows={6}
        placeholder="Если хотите, напишите комментарий в турагентство."
      ></textarea>
      <button
        onClick={handleBooking}
        className="bg-text text-white p-2 px-3 text-center rounded-xl mt-3"
      >
        Отправка
      </button>
    </div>
  );
};

export default AgreePopup;
