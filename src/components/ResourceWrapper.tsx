import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import MultipleSelectChip from "../pages/MultipleSelectChip";
import ResourceTabPanel from "./ResourceTabPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ResourceWrapper() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Azure" {...a11yProps(0)} />
          <Tab label="AWS" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <ResourceTabPanel value={value} index={0}>
        <MultipleSelectChip value={0} />
      </ResourceTabPanel>
      <ResourceTabPanel value={value} index={1}>
        <MultipleSelectChip value={1} />
      </ResourceTabPanel>
    </Box>
  );
}
