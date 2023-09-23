import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const FormControlComponent = ({
  title,
  menucontent,
  setValue,
  handleSelectedValue,
  width
}: {
  title: string;
  menucontent: any;
  setValue: any;
  handleSelectedValue: any;
  width: number
}) => {

  return (
    <FormControl sx={{ m: 1, minWidth: {width} }} size="small">
      <InputLabel id="demo-simple-select-helper-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={setValue}
        label="disktype"
        onChange={handleSelectedValue}
      >
        {menucontent.map((name: any) => (
          <MenuItem
          key={name}
          value={name}
        >
          {name}
        </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
