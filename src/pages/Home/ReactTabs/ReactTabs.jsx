import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReactTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="text-center my-16">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>
            <h3 className="text-xl font-bold">Sports Cars</h3>
          </Tab>
          <Tab>
            <h3 className="text-xl font-bold">Regular Cars</h3>
          </Tab>
          <Tab>
            <h3 className="text-xl font-bold">Mini Police Cars</h3>
          </Tab>
        </TabList>
        <TabPanel>
          <h2>Any content 1</h2>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTabs;
