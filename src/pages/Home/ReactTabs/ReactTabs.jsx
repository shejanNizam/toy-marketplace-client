import React, { useEffect, useState } from "react";
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
    fetch(`http://localhost:7000/toys`)
      .then((res) => res.json())
      .then((data) => {
        setToyCarsData(data);
      });
  }, []);

  return (
    <>
      <div className="text-center my-16">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab onClick={() => setSelectedCategory("All")}>
              <h3 className="text-xl font-bold"> All </h3>
            </Tab>
            <Tab onClick={() => setSelectedCategory("Regular Cars")}>
              <h3 className="text-xl font-bold">Sports Cars</h3>
            </Tab>
            <Tab onClick={() => setSelectedCategory("Sports Cars")}>
              <h3 className="text-xl font-bold">Regular Cars</h3>
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
            </TabPanel>
          ))}
        </Tabs>
      </div>
      {!showAll && (
        <span onClick={handleShowAll} className="text-center">
          <button className="btn btn-outline">See All</button>
        </span>
      )}
    </>
  );
};

export default ReactTabs;
