import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";
import * as React from "react";
import {
  ComputeServices,
  DataServices,
  NetworkServices,
  StorageServices,
} from "../constants/Aws-services";
import {
  AzureComputeServices,
  AzureDataServices,
  AzureNetworkServices,
  AzureStorageServices,
} from "../constants/Azure-services";
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

export default function MultipleSelectChip({
  value,
  handleCompute,
  compute,
  network,
  handleNetwork,
  database,
  handleDatabase,
  storage,
  handleStorage,
}: {
  value: any;
  handleCompute: any;
  compute: any;
  network: any;
  handleNetwork: any;
  database: any;
  handleDatabase: any;
  storage: any,
  handleStorage: any
}) {
  const theme = useTheme();

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
                {selected.map((value: any) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {value
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
                {selected.map((value: any) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {value
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
            value={database}
            onChange={handleDatabase}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value: any) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {value
              ? DataServices.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, database, theme)}
                  >
                    {name}
                  </MenuItem>
                ))
              : AzureDataServices.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, database, theme)}
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
                {selected.map((value: any) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {value
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
