import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosContact } from "react-icons/io";
import { LuUtensilsCrossed } from "react-icons/lu";
import { MdMarkEmailUnread } from "react-icons/md";

const Foods = () => {
  const [foodsData, setFoodsData] = useState([]);

  const getFoodsData = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );

      setFoodsData(response.data.categories);

      // Assuming the response is an array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFoodsData();
  }, []);
  return (
    <div>
      {/* this are foods data  */}
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 "
      >
        {foodsData.map((item) => {
          return (
            <div className="w-72 bg-white shadow-2xl rounded-2xl duration-500 hover:scale-105 hover:shadow-xl">
              <div className="">
                <img
                  className=" hover:bg-transparent rounded-xl  bg-zinc-300 transition duration-300 "
                  src={`${item.strCategoryThumb}`}
                  alt="Sunset in the mountains"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>
                  <p
                    className="text-lg font-bold text-black truncate block capitalize"
                    title={item.strCategory}
                  >
                    {item.strCategory}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $ 129
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        $ 129
                      </p>
                    </del>
                    <div className="ml-auto">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* this are center of details of web application  */}

      <div className="bg-white py-16 ">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            {" "}
            Welcome to Labbaik Foods
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-[1200px]  mx-auto">
            At Labbaik Foods, we are constantly striving to express our passion
            and turn our dreams into reality. We believe in creating experiences
            that nourish both the body and the soul. If you have the opportunity
            to savor our offerings, you have the opportunity to embark on a
            journey of taste, quality, and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className=" bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-2xl text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MdMarkEmailUnread />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Email Reservation
            </h3>
            <p className="text-gray-600 mt-2">
              Integrate our shared team inboxes seamlessly with your website.
              Enhance the user experience and provide efficient communication
              channels.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className=" bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-2xl text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <LuUtensilsCrossed />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Healthy Food
            </h3>
            <p className="text-gray-600 mt-2">
              Manage your team effortlessly with our shared team inboxes.
              Simplify team reporting and ensure smooth operations.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className=" bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-white w-12 h-12 text-2xl rounded-full flex items-center justify-center mx-auto mb-4">
              <IoIosContact />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Business Meetings
            </h3>
            <p className="text-gray-600 mt-2">
              Gain valuable insights and data analytics for your team through
              our analytics dashboard. Make informed decisions and track your
              progress effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;