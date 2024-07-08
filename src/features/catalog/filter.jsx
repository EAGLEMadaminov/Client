import { useState } from 'react';
import {
  Cities,
  includes,
  howManyTimeGiveFood,
  Facilities,
} from '../../utils/fakeData';
import CustomCheckbox from '../../components/CustomCheckbox';
import MultiRangeSlider from '../../components/MultiRangeSlider';
import { useLocation, useNavigate } from 'react-router-dom';

const Filter = () => {
  const [moveCityCheckboxes, setMoveCityCheckboxes] = useState(
    new Array(Cities.length).fill(false)
  );
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [facilitiesBoxes, setFacilitiesBoxes] = useState(
    new Array(Facilities.length).fill(false)
  );
  const [selectAllTime, setSelectAllTime] = useState(false);
  const array = new Array(5).fill('❤');
  const [star, setStar] = useState(5);
  const [flyCityCheckboxes, setFlyCityCheckboxes] = useState(
    new Array(Cities.length).fill(false)
  );
  const [includesCheckboxes, setIncludesCheckboxes] = useState(
    new Array(includes.length).fill(false)
  );
  const [givenFoodTime, setGivenFoodTime] = useState(
    new Array(howManyTimeGiveFood.length).fill(false)
  );
  const [showAllFacilities, setShowAllFacilities] = useState(false);
  const [allFacility, setAllFacility] = useState(Facilities);
  const [showMoveCities, setShowMoveCities] = useState(true);
  const [showFlyCities, setShowFlyCities] = useState(true);

  const [range, setRange] = useState([25, 1000]);

  const handleRangeChange = (range) => {
    setRange(range);
  };

  const changeCustomCheckboxValue = (e, item, value, setValue) => {
    const newCheckboxes = [...value];
    newCheckboxes[item.id - 1] = e.target.checked;
    setValue(newCheckboxes);
  };
  const handleOnchange = (e, item) => {
    changeCustomCheckboxValue(
      e,
      item,
      moveCityCheckboxes,
      setMoveCityCheckboxes
    );
  };
  const handleOnchangeFly = (e, item) => {
    changeCustomCheckboxValue(e, item, flyCityCheckboxes, setFlyCityCheckboxes);
    const filterParam = searchParams.get('fly_city');
    console.log(filterParam);
    let filterValues = filterParam ? filterParam.split(' ') : [];
    console.log(filterValues);

    if (filterValues.includes(item.name)) {
      filterValues = filterValues.filter((f) => f !== item.name);
      console.log(filterValues);
    } else {
      filterValues.push(item.name);
    }

    if (filterValues.length > 0) {
      searchParams.set('fly_city', filterValues.join(' '));
    } else {
      searchParams.delete('fly_city');
    }
    navigate({ search: searchParams.toString() });
  };
  const handleIncludes = (e, item) => {
    changeCustomCheckboxValue(
      e,
      item,
      includesCheckboxes,
      setIncludesCheckboxes
    );
  };
  const handleSelectAllFood = () => {
    setGivenFoodTime([!selectAllTime, !selectAllTime, !selectAllTime]);
    setSelectAllTime(!selectAllTime);
  };
  const handleChechFood = (e, item) => {
    changeCustomCheckboxValue(e, item, givenFoodTime, setGivenFoodTime);
  };
  const handleFacilities = (e, item) => {
    changeCustomCheckboxValue(e, item, facilitiesBoxes, setFacilitiesBoxes);
  };

  const changeFacilityCount = () => {
    setShowAllFacilities(!showAllFacilities);
    if (showAllFacilities) {
      setAllFacility(Facilities);
    } else {
      setAllFacility(Facilities.slice(0, 4));
    }
  };
  return (
    <div className="filter font-mon px-5 w-[400px]">
      <div className="border rounded-tl-[30px]  py-3 rounded-tr-[30px] ">
        <div className="flex px-5 py-1 justify-between ">
          <h2 className="font-[600] text-text">Страны</h2>
          <button onClick={() => setShowMoveCities(!showMoveCities)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill text-[#BBBDBE]"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
        </div>
        {showMoveCities ? (
          <div className="border-t px-5">
            {Cities.map((item) => {
              return (
                <div className="flex items-center " key={item.id}>
                  <CustomCheckbox
                    label={item.name}
                    onChange={(e) => handleOnchange(e, item)}
                    checked={moveCityCheckboxes[item.id - 1]}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          ''
        )}

        <div className="flex px-5 py-1 justify-between">
          <h2 className="font-[600] text-text">Место вылета</h2>
          <button onClick={() => setShowFlyCities(!showFlyCities)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill text-[#BBBDBE]"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
        </div>
        {showFlyCities ? (
          <div className="border-t px-5">
            {Cities.map((item) => {
              return (
                <div className="flex items-center " key={item.id}>
                  <CustomCheckbox
                    label={item.name}
                    onChange={(e) => handleOnchangeFly(e, item)}
                    checked={flyCityCheckboxes[item.id - 1]}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="border p-5 pb-5">
        <h2 className="text-text font-[600] mb-4">Цена</h2>
        <div className="flex gap-[15px]">
          <div className="border w-full p-3 rounded-lg">
            <h3 className="font-mon text-[#BBBDBE] font-[500]">Min</h3>
            <p className="text-[14px] text-[#1B2126] font-[500] font-mon">
              {range[0]}$
            </p>
          </div>
          <div className="border w-full p-3 rounded-lg">
            <h3 className="font-mon text-[#BBBDBE] font-[500]">Max</h3>
            <p className="text-[14px] text-[#1B2126] font-[500] font-mon">
              {range[1]}$
            </p>
          </div>
        </div>
        <MultiRangeSlider min={25} max={1000} onChange={handleRangeChange} />
      </div>
      <div className="border p-5">
        <h2 className="text-text font-[600]">Рейтинг</h2>
        <div className="flex gap-[10px] mt-3 flex-wrap">
          {array.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setStar(index + 1)}
                className={`border rounded-lg py-3 px-[10px] flex items-center gap-[5px] ${
                  star === index + 1 ? 'bg-text' : ''
                }`}
              >
                <p
                  className={`text-text ${
                    star == index + 1 ? 'text-white' : ''
                  } font-`}
                >
                  {index + 1}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`bi bi-star-fill  ${
                    star === index + 1 ? 'text-white' : 'text-[#BCC7D9]'
                  }`}
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border p-5">
        <h2 className="text-text font-[600]">Включает в себя</h2>
        {includes.map((item) => {
          return (
            <div className="flex items-center " key={item.id}>
              <CustomCheckbox
                label={item.name}
                onChange={(e) => handleIncludes(e, item)}
                checked={includesCheckboxes[item.id - 1]}
              />
            </div>
          );
        })}
      </div>
      <div className="border p-5">
        <h2 className="text-text font-[600]">Доступные планы питания</h2>
        <CustomCheckbox
          label="Все включено"
          checked={selectAllTime}
          onChange={handleSelectAllFood}
        />
        {howManyTimeGiveFood.map((time) => {
          return (
            <CustomCheckbox
              key={time.id}
              label={time.title}
              checked={givenFoodTime[time.id - 1]}
              onChange={(e) => handleChechFood(e, time)}
            />
          );
        })}
      </div>
      <div className="border p-5">
        <h2 className="text-text font-[600]">Удобства</h2>
        {allFacility.map((item) => {
          return (
            <CustomCheckbox
              key={item.id}
              label={item.name}
              checked={facilitiesBoxes[item.id - 1]}
              onChange={(e) => handleFacilities(e, item)}
            />
          );
        })}
        <button
          onClick={changeFacilityCount}
          className="text-text text-[14px] mt-5 font-[500] font-mon"
        >
          Видеть {!showAllFacilities ? 'меньше' : 'больше '}
        </button>
      </div>
    </div>
  );
};

export default Filter;
