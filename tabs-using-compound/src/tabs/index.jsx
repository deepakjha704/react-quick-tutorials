import React from "react";
import { createContext, useContext } from "react";
import { cn } from "../helper";

export const TabContext = createContext();

function Tabs({ activeTab, setActiveTab, children }) {
  return (
    <>
      <span>Tabs List</span>
      <TabContext.Provider value={{ activeTab, setActiveTab }}>
        {children}
      </TabContext.Provider>
    </>
  );
}

export default Tabs;
const Header = function ({ children }) {
  return <div className="flex w-full">{children}</div>;
};
Tabs.Header = Header;

const Tab = function ({ index, label }) {
  const { activeTab, setActiveTab } = useContext(TabContext);

  const onTabChange = () => {
    setActiveTab(index);
  };
  return (
    <div
      key={index}
      className={cn(
        "px-5 py-2 bg-gray-300 text-white active:bg-blue-500 active:text-white hover:bg-blue-200",
        activeTab === index && "bg-blue-500 text-white"
      )}
      style={{ backgroundColor: index === activeTab && "blue" }}
      onClick={onTabChange}
    >
      {" "}
      {label}
    </div>
  );
};
Tabs.Tab = Tab;

const TabBody = ({ children }) => {
  return <div>{children}</div>;
};

Tabs.TabBody = TabBody;

const TabPanel = ({ index }) => {
  const { activeTab } = useContext(TabContext);
  return activeTab === index ? (
    <div key={index}> Tab Panel + {index}</div>
  ) : null;
};

Tabs.TabPanel = TabPanel;
