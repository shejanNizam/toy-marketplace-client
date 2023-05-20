import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReactTabCard from "./ReactTabCard";

const ReactTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [toyCarsData, setToyCarsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  // console.log(toyCarsData);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const filteredCars =
    selectedCategory === "All"
      ? toyCarsData
      : toyCarsData.filter((car) => car.category === selectedCategory);

  useEffect(() => {
    axios.get(`http://localhost:7000/toys`).then((data) => {
      setToyCarsData(data.data);
    });
  }, []);

  return (
    <>
      <div className="text-center my-16">
        <h2 className="text-2xl text-center text-orange-400 font-bold my-8 mb-8">
          Here's our all Categories Collections
        </h2>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab onClick={() => setSelectedCategory("All")}>
              <h3 className="text-xl font-bold"> All </h3>
            </Tab>
            <Tab onClick={() => setSelectedCategory("Regular Cars")}>
              <h3 className="text-xl font-bold">Regular Cars</h3>
            </Tab>
            <Tab onClick={() => setSelectedCategory("Sports Cars")}>
              <h3 className="text-xl font-bold">Sports Cars</h3>
            </Tab>
            <Tab onClick={() => setSelectedCategory("Mini Police Cars")}>
              <h3 className="text-xl font-bold">Mini Police Cars</h3>
            </Tab>
          </TabList>
          {toyCarsData.map((car) => (
            <TabPanel key={car._id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
                {filteredCars
                  .slice(0, showAll ? 1000 : 6)
                  .map((filteredCar) => (
                    <ReactTabCard
                      key={filteredCar._id}
                      filteredCar={filteredCar}
                    ></ReactTabCard>
                  ))}
              </div>
              {!showAll && (
                <div onClick={handleShowAll} className="text-right mr-8">
                  <button className="btn btn-outline btn-sm">
                    See All <FaAngleRight />
                  </button>
                </div>
              )}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default ReactTabs;
