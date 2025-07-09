import React from "react";
import { useState } from "react";
import "./App.css";
import Tabs from "./tabs";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div>Tabs</div>

      <Tabs setActiveTab={setActiveTab} activeTab={activeTab}>
        <Tabs.Header>
          <Tabs.Tab index={1} label="Tab 1"></Tabs.Tab>
          <Tabs.Tab index={2} label="Tab 2"></Tabs.Tab>
          <Tabs.Tab index={3} label="Tab 3"></Tabs.Tab>
        </Tabs.Header>
        <Tabs.TabBody>
          <Tabs.TabPanel index={1}> Tab Panel 1 </Tabs.TabPanel>
          <Tabs.TabPanel index={2}> Tab Panel 2 </Tabs.TabPanel>
          <Tabs.TabPanel index={3}> Tab Panel 3 </Tabs.TabPanel>
        </Tabs.TabBody>
      </Tabs>
    </>
  );
}

export default App;
