import React from "react";
import { render, screen } from "@testing-library/react";
import Tabs, { TabContext } from ".";

test("render Tabs Component", () => {
  render(<Tabs />);
  const renderTabComp = screen.getByText(/tabs list/i);
  expect(renderTabComp).toBeInTheDocument();
});

test("tab label should be present", () => {
  const mockContext = { activeTab: 1, setActiveTab: jest.fn() };
  render(
    <TabContext.Provider value={mockContext}>
      {/* <Tabs /> */}
      <Tabs.tab label={"random tab"} index={1} />
    </TabContext.Provider>
  );
  //   render(<Tabs.Tab label={"random tab"} index={1} />);
  const tabLabel = screen.getByText(/random tab/i);
  expect(tabLabel).toBeInTheDocument();
});
