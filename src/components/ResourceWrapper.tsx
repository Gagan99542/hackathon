import { SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { useState } from "react";
import AzureComputeServicesDisplay from "../pages/AzureComputeServicesDisplay";
import AzureNetworkDisplay from "../pages/AzureNetworkDisplay";
import AzureDatabaseDisplay from "../pages/AzureDatabasesDisplay";
import AzureStorageDisplay from "../pages/AzureStorageDisplay";
import MultipleSelectChip from "../pages/MultipleSelectChip";
import ResourceTabPanel from "./ResourceTabPanel";
import AwsComputeServicesDisplay from "../pages/AwsComputeServicesDisplay";
import AwsNetworkServicesDisplay from "../pages/AwsNetworkServicesDisplay";
import AwsRDSDisplay from "../pages/AwsDatabasesDisplay";
import AwsStorageDisplay from "../pages/AwsStorageDisplay";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ResourceWrapper() {
  const [value, setValue] = React.useState(0);
  const [azureCompute, setAzureCompute] = useState<string[]>([]);
  const [database, setDatabase] = useState<string[]>([]);
  const [network, setNetwork] = React.useState<string[]>([]);
  const [azstorage, setStorage] = React.useState<string[]>([]);

  const [awsCompute, setAwsCompute] = useState<string[]>([]);
  const [awsnetwork, setAwsnetwork] = useState<string[]>([]);
  const [awsRds, setRds] = useState<string[]>([]);
  const [awsstorage, setAwsStorage] = useState<string[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleAzureCompute = (event: SelectChangeEvent<typeof azureCompute>) => {
    const {
      target: { value },
    } = event;
    setAzureCompute(typeof value === "string" ? value.split(",") : value);
  };

  const handleAwsCompute = (event: SelectChangeEvent<typeof awsCompute>) => {
    const {
      target: { value },
    } = event;
    setAwsCompute(typeof value === "string" ? value.split(",") : value);
  };

  const handleNetwork = (event: SelectChangeEvent<typeof network>) => {
    const {
      target: { value },
    } = event;
    setNetwork(typeof value === "string" ? value.split(",") : value);
  };

  const handleawsNetwork = (event: SelectChangeEvent<typeof awsnetwork>) => {
    const {
      target: { value },
    } = event;
    setAwsnetwork(typeof value === "string" ? value.split(",") : value);
  };

  const handleDatabase = (event: SelectChangeEvent<typeof database>) => {
    const {
      target: { value },
    } = event;
    setDatabase(typeof value === "string" ? value.split(",") : value);
  };

  const handleRds = (event: SelectChangeEvent<typeof awsRds>) => {
    const {
      target: { value },
    } = event;
    setRds(typeof value === "string" ? value.split(",") : value);
  };

  const handleStorage = (event: SelectChangeEvent<typeof azstorage>) => {
    const {
      target: { value },
    } = event;
    setStorage(typeof value === "string" ? value.split(",") : value);
  };

  const handleAwsStorage = (event: SelectChangeEvent<typeof awsstorage>) => {
    const {
      target: { value },
    } = event;
    setAwsStorage(typeof value === "string" ? value.split(",") : value);
  };

  const removeElement = (value: any, element: any) => {
    return value !== element;
  };

  const computeDeleteSelect = (element: any) => {
    setAzureCompute(azureCompute.filter((i) => removeElement(i, element)));
  };

  const databaseDeleteSelect = (element: any) => {
    setDatabase(database.filter((i) => removeElement(i, element)));
  };

  const storageDeleteSelect = (element: any) => {
    setStorage(azstorage.filter((i) => removeElement(i, element)));
  };
  
  const networkDeleteSelect = (element: any) => {
    setNetwork(network.filter((i) => removeElement(i, element)));
  };

  const awscomputeDeleteSelect = (element: any) => {
    setAwsCompute(awsCompute.filter((i) => removeElement(i, element)))
  };

  const awsnetworkDeleteSelect = (element: any) => {
    setAwsnetwork(awsnetwork.filter((i) => removeElement(i, element)));
  };

  const awsRdsDeleteSelect = (element: any) => {
    setRds(awsRds.filter((i) => removeElement(i, element)));
  };

  const awsStorageDeleteSelect = (element: any) => {
    setAwsStorage(awsstorage.filter((i) => removeElement(i, element)));
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
        <MultipleSelectChip
          value={0}
          handleCompute={handleAzureCompute}
          compute={azureCompute}
          network={network}
          handleNetwork={handleNetwork}
          database={database}
          handleDatabase={handleDatabase}
          storage={azstorage}
          handleStorage={handleStorage}
        />
      </ResourceTabPanel>
      <ResourceTabPanel value={value} index={1}>
        <MultipleSelectChip
          value={1}
          handleCompute={handleAwsCompute}
          compute={awsCompute}
          network={awsnetwork}
          handleNetwork={handleawsNetwork}
          database={awsRds}
          handleDatabase={handleRds}
          storage={awsstorage}
          handleStorage={handleAwsStorage}
        />
      </ResourceTabPanel>
      <div>
        <AzureComputeServicesDisplay
          compute={azureCompute}
          deleteselect={computeDeleteSelect}
        />
        <AzureNetworkDisplay
          network={network}
          deleteselect={networkDeleteSelect}
        />
        <AzureDatabaseDisplay
          database={database}
          deleteselect={databaseDeleteSelect}
        />
        <AzureStorageDisplay
          storage={azstorage}
          deleteselect={storageDeleteSelect}
        />
        <AwsComputeServicesDisplay
          compute={awsCompute}
          deleteselect={awscomputeDeleteSelect}
        />
        <AwsNetworkServicesDisplay
          network={awsnetwork}
          deleteselect={awsnetworkDeleteSelect}
        />
        <AwsRDSDisplay 
          database={awsRds}
          deleteselect={awsRdsDeleteSelect}
        />
        <AwsStorageDisplay
          storage={awsstorage}
          deleteselect={awsStorageDeleteSelect}
        />
      </div>
    </Box>
  );
}
