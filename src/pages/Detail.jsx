import Image1 from '../assets/detail/image1.png';
import Image2 from '../assets/detail/image2.png';
import Image3 from '../assets/detail/image3.png';
import Image4 from '../assets/detail/image4.png';
import Image5 from '../assets/detail/image5.png';
import Image6 from '../assets/detail/image6.png';
import MainImage from '../assets/detail/main-image.png';
import ReactInputMask from 'react-input-mask';
import { detail_includes } from '../utils/fakeData';
import Recommended from '../features/Recommended';
import FamousTours from '../features/FamousTours';
import { useState } from 'react';
import axiosIntance from '../utils/libs/axios';
import VerifyCode from '../components/VerifyCode';
import AgreePopup from '../components/AgreePopup';
import {
  showVerifyPopup,
  getPhoneNumber,
  showAgreePopup,
} from '../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import SuccessPopup from './../components/SuccessPopup';

const Detail = () => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const isShowVerifyPopup = useSelector((store) => store.auth.isShowVerify);
  const isShowAgreePopup = useSelector((store) => store.auth.isShowAgreePopup);
  const isShowSuccessPopup = useSelector(
    (store) => store.auth.isShowSuccessMessage
  );
  const dispatch = useDispatch();
  const formatchars = {
    '-': '[0-9]',
  };

  const handleBooking = async () => {
    let token = localStorage.getItem('access_token');
    const info = {};
    info.name = userName;

    info.phone_number = phoneNumber.replace(/\s/g, '');
    if (userName && phoneNumber) {
      dispatch(getPhoneNumber(phoneNumber));
      try {
        const { data } = await axiosIntance.post('/send-code', info);
        if (data) {
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
      if (token) {
        dispatch(showAgreePopup(true));
      } else {
        dispatch(showVerifyPopup(true));
      }
    }
  };
  return (
    <div className="w-[1100px] mx-auto">
      {isShowAgreePopup || isShowVerifyPopup || isShowSuccessPopup ? (
        <div className="fixed left-0 flex justify-center items-center right-0 bottom-0 top-0 bg-[rgba(0,0,0,0.6)] z-[100]">
          <div className="bg-white  w-[400px] text-center rounded-xl mx-auto">
            {isShowVerifyPopup && <VerifyCode />}
            {isShowAgreePopup && <AgreePopup name={userName} />}
            {isShowSuccessPopup && <SuccessPopup />}
          </div>
        </div>
      ) : (
        ''
      )}
      <div className="flex gap-[20px] justify-between ">
        <div className="images z-10">
          <div className="flex gap-[20px]">
            <div className="two-image flex flex-col ">
              <img
                src={Image1}
                alt="Hotel image"
                className="rounded-xl w-[220px]"
              />
              <img
                src={Image2}
                alt="Hotel image"
                className="rounded-xl mt-[15px] w-[220px]"
              />
            </div>
            <div className="main-image ">
              <img src={MainImage} alt="Hotel image" className="rounded-xl" />
            </div>
          </div>
          <div className="flex four-images mt-[20px] gap-[20px]">
            <img
              src={Image3}
              alt="Hotel image"
              className="rounded-xl h-[160px] flex-shrink-0 w-[190px]"
            />
            <img
              src={Image4}
              alt="Hotel image"
              className="rounded-xl h-[160px] flex-shrink-0 w-[190px]"
            />
            <img
              src={Image5}
              alt="Hotel image"
              className="rounded-xl h-[160px] flex-shrink-0 w-[190px]"
            />
            <img
              src={Image6}
              alt="Hotel image"
              className="rounded-xl h-[160px] flex-shrink-0 w-[190px]"
            />
          </div>
        </div>

        {/* //Booking  */}
        <div className="booking border rounded-2xl w-[315px] ">
          <div className="p-4">
            <h2 className="font-mon text-text text-[18px] leading-[21px] font-[600]">
              Поездка в США выгодное путешествие{' '}
            </h2>
            <div className="flex gap-[10px] mt-2">
              <p className="border rounded-[10px] text-[12px] font-[500] text-[#1B2126]  px-2">
                4 ночей
              </p>
              <p className="border rounded-[10px] text-[12px] font-[500] text-[#1B2126] px-2">
                5 дней
              </p>
            </div>
            <div className="flex items-center mt-[10px]">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.698 13.25C2.80251 11.4077 5.22323 10.1468 8.9999 10.1468C12.7766 10.1468 15.1973 11.4077 16.3018 13.25M11.9999 3.75C11.9999 5.40685 10.6567 6.75 8.9999 6.75C7.34304 6.75 5.99989 5.40685 5.99989 3.75C5.99989 2.09315 7.34304 0.75 8.9999 0.75C10.6567 0.75 11.9999 2.09315 11.9999 3.75Z"
                  stroke="#004280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-[14px] ml-2 font-mon font-[500] text-[#8D9093]">
                За 1-го человека
              </p>
            </div>
            <div className="flex items-center my-[10px]">
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.4243 1.00334C17.5686 1.0135 17.7586 1.04062 17.8466 1.06773C17.9345 1.09484 18.0823 1.15923 18.1808 1.21345C18.2759 1.26429 18.4272 1.37612 18.5151 1.46085C18.6031 1.54557 18.7192 1.6913 18.772 1.7828C18.8283 1.87769 18.8952 2.02003 18.9233 2.10475C18.9515 2.18947 18.9831 2.35553 18.9937 2.47754C19.0078 2.60632 18.9972 2.78254 18.9726 2.90116C18.9515 3.01299 18.8811 3.20277 18.8213 3.32478C18.7615 3.45356 18.6313 3.62639 18.5187 3.74162C18.3849 3.87379 18.2407 3.97546 18.0753 4.05001C17.938 4.1144 17.0513 4.41263 14.3805 5.26665L12.9131 7.74398C12.1038 9.10634 11.4141 10.2484 11.3824 10.2823C11.3473 10.3128 10.7737 10.5161 10.1051 10.7297C9.36967 10.9635 8.85592 11.1092 8.80314 11.0991C8.75388 11.0923 8.66942 11.0448 8.61664 10.9906C8.56386 10.9398 8.51811 10.8686 8.5146 10.8313C8.51108 10.794 8.5146 10.733 8.5146 10.6958C8.51811 10.6585 8.81018 9.72652 9.16558 8.62172C9.51746 7.51692 9.79897 6.60868 9.78841 6.59851C9.77786 6.59173 8.40903 6.94757 6.74462 7.39492C5.08021 7.83887 3.67267 8.20488 3.61285 8.20488C3.55303 8.20827 3.46154 8.17099 3.40524 8.13032C3.34542 8.08627 2.80704 7.41864 2.20532 6.64596C1.60008 5.87327 1.07929 5.18532 1.04762 5.12092C1.00187 5.0362 0.991318 4.96842 1.00891 4.8837C1.03003 4.7922 1.13207 4.67019 1.44525 4.36519C1.67045 4.1449 1.90622 3.94496 1.96604 3.91784C2.03641 3.88734 2.12087 3.87718 2.17717 3.89073C2.23347 3.9009 2.6698 4.16524 3.1554 4.47702C3.63748 4.78881 4.10197 5.07687 4.18642 5.11415C4.28143 5.16159 4.40107 5.1887 4.51719 5.1887C4.67202 5.1887 5.69249 4.8532 10.7385 3.13499C14.0568 2.00647 16.8613 1.06095 16.9668 1.03723C17.09 1.00673 17.2589 0.993171 17.4243 1.00334ZM10.9496 3.83312L4.84445 5.91394C4.33773 5.91733 4.18642 5.897 4.05271 5.85294C3.94362 5.81566 3.49673 5.55471 3.01465 5.24632L2.17013 4.70747L1.86751 5.00231C3.31727 6.86624 3.75009 7.41186 3.76416 7.41864C3.77824 7.42542 5.24911 7.03908 7.03316 6.56462C8.82073 6.08678 10.3374 5.69705 10.4042 5.69705C10.4957 5.69705 10.5555 5.72416 10.6329 5.79872C10.7104 5.87327 10.7385 5.93089 10.7385 6.019C10.7385 6.08339 10.45 7.03569 10.0946 8.1371C9.74267 9.23512 9.46116 10.1434 9.47172 10.1501C9.48228 10.1603 9.79897 10.0722 10.1755 9.95019L10.8617 9.7333C13.1806 5.83938 13.8843 4.69053 13.923 4.6668C13.9618 4.64308 14.8168 4.35841 15.8232 4.03646C16.8296 3.71451 17.7093 3.42306 17.7762 3.39255C17.843 3.35867 17.9521 3.27394 18.019 3.20277C18.0858 3.12822 18.1632 3.01638 18.1914 2.95199C18.2196 2.8876 18.2407 2.74865 18.2407 2.64698C18.2442 2.54531 18.2266 2.3962 18.202 2.31825C18.1773 2.22675 18.1034 2.10814 17.9943 1.99969C17.8958 1.90141 17.7727 1.80991 17.6882 1.7828C17.6108 1.75908 17.4912 1.72858 17.4243 1.7218C17.3574 1.71163 17.2448 1.71841 17.178 1.72858C17.1111 1.74213 14.3066 2.69104 10.9496 3.83312ZM1.24467 13.2883H13.5184L13.6239 13.39C13.6803 13.4476 13.733 13.5255 13.733 13.5696C13.7366 13.6103 13.733 13.6747 13.7295 13.7119C13.726 13.7492 13.6943 13.8136 13.6627 13.8577C13.631 13.9017 13.5571 13.9492 13.5008 13.9695C13.4339 13.9898 11.1748 14 7.34986 14C2.05049 14 1.29394 13.9932 1.20245 13.9492C1.14263 13.9221 1.07225 13.8475 1.04058 13.7899C1.00539 13.7187 0.991318 13.6374 1.00539 13.5696C1.01947 13.5018 1.07225 13.4239 1.13559 13.373L1.24467 13.2883Z"
                  fill="#004280"
                  stroke="#004280"
                  strokeWidth="0.5"
                />
              </svg>
              <p className="text-[14px] ml-2 font-mon font-[500] text-[#8D9093]">
                Ташкент-Вашингтон
              </p>
            </div>
            <div className="flex items-center mb-[10px]">
              <svg
                width="18"
                height="20"
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

              <p className="text-[14px] font-mon font-[500] ml-2 text-[#8D9093]">
                Июнь 10 - Июнь 14
              </p>
            </div>
            <div className="flex items-center gap-[10px] ">
              <p className="text-text font-mon text-[24px] font-bold border p-1 rounded-lg bg-[#EDF2F6]">
                $1,523
              </p>
              <del className="text-[#BBBCBE]">$3,045</del>
            </div>
          </div>

          <div className="rounded-xl bg-[#F7F9FB] p-3">
            <h3 className="text-[18px] text-text font-mon font-semibold">
              Оставить заявку
            </h3>
            <p className="text-[#7C9EBD] leading-[17px] text-[13px] font-medium font-mon">
              Туристическое агентство свяжется с вами для уточнения деталей
            </p>
            <label
              htmlFor="name"
              className="text-text text-[14px] font-medium font-mon"
            >
              Имя
            </label>
            <div className="flex mb-2 bg-white items-center border py-1 gap-[10px] rounded-lg px-3">
              <span className="text-[#9BB8CF]">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.42822 12.625C2.42228 10.9669 4.60093 9.83214 7.99993 9.83214C11.3989 9.83214 13.5776 10.9669 14.5716 12.625M10.6999 4.075C10.6999 5.56617 9.4911 6.775 7.99993 6.775C6.50876 6.775 5.29993 5.56617 5.29993 4.075C5.29993 2.58383 6.50876 1.375 7.99993 1.375C9.4911 1.375 10.6999 2.58383 10.6999 4.075Z"
                    stroke="#9BB8CF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                placeholder="Введите имя"
                id="name"
                onChange={(e) => setUserName(e.target.value)}
                className="placeholder:text-[#9BB8CF] active:bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0  border-none active:border-none outline-none focus:outline-none focus:border-transparent"
                type="text"
              />
            </div>
            <label
              htmlFor="phone"
              className="text-text text-[14px] font-medium font-mon"
            >
              Телефон
            </label>
            <div className="flex px-3 bg-white items-center border  rounded-lg">
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4976 14.0781C15.4976 14.0781 14.6286 14.9316 14.4157 15.1819C14.0688 15.5521 13.66 15.7269 13.1242 15.7269C13.0727 15.7269 13.0177 15.7269 12.9662 15.7235C11.9461 15.6583 10.9981 15.2607 10.2871 14.9214C8.34298 13.9822 6.6359 12.6488 5.21734 10.9589C4.04608 9.55007 3.26295 8.24753 2.7443 6.849C2.42487 5.99549 2.30809 5.33051 2.35961 4.70323C2.39396 4.30218 2.54852 3.96969 2.83361 3.68518L4.00487 2.51632C4.17317 2.35864 4.35178 2.27295 4.52695 2.27295C4.74334 2.27295 4.91851 2.4032 5.02843 2.51289C5.03186 2.51632 5.0353 2.51975 5.03873 2.52318C5.24825 2.71856 5.44747 2.9208 5.65699 3.13674C5.76347 3.24643 5.87338 3.35612 5.98329 3.46924L6.92099 4.40501C7.28507 4.76836 7.28507 5.10428 6.92099 5.46762C6.82138 5.56702 6.72521 5.66643 6.6256 5.7624C6.33708 6.05719 6.56373 5.831 6.2649 6.09837C6.25803 6.10522 6.25116 6.10865 6.24773 6.11551C5.95234 6.41029 6.00729 6.69823 6.06912 6.89361C6.07255 6.90389 6.07599 6.91417 6.07942 6.92446C6.32329 7.51403 6.66677 8.06933 7.18885 8.73088L7.19229 8.73431C8.14029 9.89975 9.13981 10.8081 10.2424 11.5039C10.3832 11.5931 10.5275 11.665 10.6648 11.7336C10.7885 11.7953 10.9053 11.8536 11.0049 11.9153C11.0186 11.9221 11.0324 11.9324 11.0461 11.9393C11.1629 11.9975 11.2728 12.025 11.3861 12.025C11.6712 12.025 11.8498 11.8467 11.9082 11.7884L12.5815 11.1166C12.6983 11 12.8838 10.8595 13.1001 10.8595C13.3131 10.8595 13.4883 10.9932 13.5948 11.1097C13.5982 11.1131 13.5982 11.1131 13.6016 11.1166L15.4942 13.0053C15.848 13.3549 15.4976 14.0781 15.4976 14.0781Z"
                    stroke="#9BB8CF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <ReactInputMask
                mask="998 -- --- -- --"
                placeholder="998"
                onChange={(e) => setPhoneNumber(e.target.value)}
                id="phone"
                className="w-full p-1 px-3 rounded-lg placeholder:text-[#9BB8CF]  outline-none"
                formatChars={formatchars}
              />
            </div>
            <button
              onClick={handleBooking}
              className="w-full mt-[20px] text-white bg-[#FF9B06] py-[5px] p-[10px] rounded-lg"
            >
              Отправить
            </button>
          </div>
        </div>
        {/* //Booking end  */}
      </div>
      <div className="flex flex-wrap gap-[10px] w-[900px]">
        {detail_includes.map((item) => {
          return (
            <div
              className="flex border p-[10px] gap-[15px] px-[15px] rounded-[10px]"
              key={item.id}
            >
              <img src={item.icon} alt="" />
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 w-[900px]">
        <h2 className="text-[18px] font-semibold text-text font-mon">
          Описание
        </h2>
        <p className="text-[#8D9093] text-justify font-medium  font-mon">
          Lorem ipsum dolor sit amet consectetur. Bibendum adipiscing ultricies
          tellus eget rhoncus eu quam vel feugiat. Erat sed nisl scelerisque vel
          tortor imperdiet. Commodo vulputate laoreet sollicitudin sollicitudin
          dui vitae tortor. Cursus risus egestas hendrerit orci gravida sed quis
          aliquet. Aenean odio cras ultrices in congue risus donec eu massa.
          Viverra vivamus morbi amet at. Tempus tellus sed et diam sed. Sed arcu
          faucibus tellus ac potenti cras faucibus. Dui morbi volutpat amet
          auctor.
        </p>
        <p className="text-[#8D9093] mt-3 text-justify font-medium  font-mon">
          Lorem ipsum dolor sit amet consectetur. Bibendum adipiscing ultricies
          tellus eget rhoncus eu quam vel feugiat. Erat sed nisl scelerisque vel
          tortor imperdiet. Commodo vulputate laoreet sollicitudin sollicitudin
          dui vitae tortor. Cursus risus egestas hendrerit orci gravida sed quis
          aliquet. Aenean odio cras ultrices in congue risus donec eu massa.
          Viverra vivamus morbi amet at. Tempus tellus sed et diam sed. Sed arcu
          faucibus tellus ac potenti cras faucibus. Dui morbi volutpat amet
          auctor.
        </p>
      </div>

      <div className="flex w-[900px] mt-5 rounded-t-[15px]  items-center justify-between bg-text text-white ">
        <div className="w-[500px] py-2"></div>
        <div className="flex">
          <p className="border-x text-center py-2 w-[130px]">Звезды</p>
          <p className="border-x py-2 w-[130px] text-center">Цена</p>
          <p className="border-x rounded-tr-[10px] py-2 w-[130px] text-center">
            Подробнее
          </p>
        </div>
      </div>
      <div className="flex justify-between w-[900px] border">
        <div className="w-[500px] text-[#1A2025] p-1 font-medium">
          Sheraton New York Times Square Hotel
        </div>
        <div className="flex">
          <p className="text-text border font-mon w-[130px] justify-center py-1 font-medium flex items-center gap-[5px]">
            5
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-1"
            >
              <path
                opacity="0.3"
                d="M5.24078 8.9948L1.7765 6.47786H6.05858C6.34018 6.47786 6.58975 6.29654 6.67677 6.02873L8 1.95623L9.32323 6.02873L9.75121 5.88967L9.32323 6.02873C9.41025 6.29654 9.65982 6.47786 9.94142 6.47786H14.2235L10.7592 8.9948L11.0237 9.35886L10.7592 8.99481C10.5314 9.16033 10.4361 9.45371 10.5231 9.72152L11.8463 13.794L8.38206 11.2771C8.15424 11.1116 7.84576 11.1116 7.61794 11.2771L4.15367 13.794L5.4769 9.72153C5.56392 9.45371 5.46859 9.16032 5.24078 8.99481L4.97627 9.35886L5.24078 8.9948Z"
                fill="#1F4382"
                stroke="#1F4382"
                strokeWidth="0.9"
              />
            </svg>
          </p>
          <p className="text-[#1A2025] py-1 border text-center w-[130px]">
            1200$
          </p>
          <button className="text-center py-1 border w-[130px]">Перейти</button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-[24px] font-semibold font-mon text-text">
          Рекомендуем
        </h2>
        <Recommended />
      </div>
      <div className="mt-10">
        <h2 className="text-[24px] font-semibold font-mon text-text">
          Популярное
        </h2>
        <FamousTours />
      </div>
    </div>
  );
};

export default Detail;
