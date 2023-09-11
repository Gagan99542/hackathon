import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";
import * as React from "react";
import { ComputeServices } from "../constants/data/aws/compute-services";
import { DataServices } from "../constants/data/aws/data-services";
import { NetworkServices } from "../constants/data/aws/network-services";
import { StorageServices } from "../constants/data/aws/storage-services";
import { AzureComputeServices } from "../constants/data/azure/compute-services";
import { AzureDataServices } from "../constants/data/azure/data-services";
import { AzureNetworkServices } from "../constants/data/azure/network-services";
import { AzureStorageServices } from "../constants/data/azure/storage-services";
import "./styling.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === 1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip(value: any) {
  const theme = useTheme();
  const [compute, setCompute] = React.useState<string[]>([]);
  const [network, setNetwork] = React.useState<string[]>([]);
  const [storage, setStorage] = React.useState<string[]>([]);
  const [dataservice, setDataservice] = React.useState<string[]>([]);

  const handleCompute = (event: SelectChangeEvent<typeof compute>) => {
    const {
      target: { value },
    } = event;
    setCompute(typeof value === "string" ? value.split(",") : value);
  };

  const handleNetwork = (event: SelectChangeEvent<typeof network>) => {
    const {
      target: { value },
    } = event;
    setNetwork(typeof value === "string" ? value.split(",") : value);
  };

  const handleStorage = (event: SelectChangeEvent<typeof storage>) => {
    const {
      target: { value },
    } = event;
    setStorage(typeof value === "string" ? value.split(",") : value);
  };

  const handleData = (event: SelectChangeEvent<typeof dataservice>) => {
    const {
      target: { value },
    } = event;
    setDataservice(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className="selectResource">
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">
            Compute Services
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={compute}
            onChange={handleCompute}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.9 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {value.value
              ? ComputeServices.map((name: any) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, compute, theme)}
                  >
                    {name}
                  </MenuItem>
                ))
              : AzureComputeServices.map((azurename: any) => (
                  <MenuItem
                    key={azurename}
                    value={azurename}
                    style={getStyles(azurename, compute, theme)}
                  >
                    {azurename}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">
            Network Services
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={network}
            onChange={handleNetwork}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {value.value
              ? NetworkServices.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, network, theme)}
                  >
                    {name}
                  </MenuItem>
                ))
              : AzureNetworkServices.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, network, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">
            Database Services
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={dataservice}
            onChange={handleData}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {value.value
              ? DataServices.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, dataservice, theme)}
                  >
                    {name}
                  </MenuItem>
                ))
              : AzureDataServices.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, dataservice, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">
            Storage Services
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={storage}
            onChange={handleStorage}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {value.value
              ? StorageServices.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, storage, theme)}
                  >
                    {name}
                  </MenuItem>
                ))
              : AzureStorageServices.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, storage, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
