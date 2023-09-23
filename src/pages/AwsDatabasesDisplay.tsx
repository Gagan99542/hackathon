import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import close from "../icons/icon-close.svg";
import { FormControlComponent } from "./FormControlComponent";
import "./styling.css";
import { awsRds } from "../constants/Aws-services";

const awsRDSDisplay = ({
  database,
  deleteselect,
}: {
  database: any;
  deleteselect: any;
}) => {
  //RDS
  const [isRDSModalVisible, setIsRDSModalVisible] = useState(false);
  const [awsRDSRegion, setAwsRDSRegion] = useState("");
  const [awsRDSType, setAwsRDSType] = useState<string[]>([]);
  const [awsRDSTier, setAwsRDSTier] = useState<string[]>([]);
  const [awsRDSCore, setAwsRDSCore] = useState<string[]>([]);

  const handleRDSModal = () => {
    setIsRDSModalVisible(!isRDSModalVisible);
    deleteselect("RDS");
    setAwsRDSRegion("");
    setAwsRDSTier([]);
    setAwsRDSType([]);
    setAwsRDSCore([]);
  };

  const handleRDSRegion = (event: SelectChangeEvent) => {
    setAwsRDSRegion(event.target.value);
  };

  const handleRDSTier = (event: SelectChangeEvent<typeof awsRDSTier>) => {
    const {
      target: { value },
    } = event;
    setAwsRDSTier(typeof value === "string" ? value.split(",") : value);
  };

  const handleRDSType = (event: SelectChangeEvent<typeof awsRDSType>) => {
    const {
      target: { value },
    } = event;
    setAwsRDSType(typeof value === "string" ? value.split(",") : value);
  };

  const handleRDSCore = (event: SelectChangeEvent<typeof awsRDSCore>) => {
    const {
      target: { value },
    } = event;
    setAwsRDSCore(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    if (database.includes("RDS")) {
      setIsRDSModalVisible(true);
    } else {
      setIsRDSModalVisible(false);
      setAwsRDSRegion("");
      setAwsRDSTier([]);
      setAwsRDSType([]);
      setAwsRDSCore([]);
    }
  }, [database]);

  return (
    <div className="modals">
      {isRDSModalVisible && (
        <div className="container">
          <div className="button">
            <div>RDS</div>
            <button onClick={handleRDSModal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={awsRds[0].title}
              menucontent={awsRds[0].values}
              setValue={awsRDSRegion}
              handleSelectedValue={handleRDSRegion}
              width={150}
            />

            <FormControlComponent
              title={awsRds[1].title}
              menucontent={awsRds[1].values}
              setValue={awsRDSType}
              handleSelectedValue={handleRDSType}
              width={310}
            />

            <FormControlComponent
              title={awsRds[2].title}
              menucontent={awsRds[2].values}
              setValue={awsRDSTier}
              handleSelectedValue={handleRDSTier}
              width={150}
            />

            <FormControlComponent
              title={awsRds[3].title}
              menucontent={awsRds[3].values}
              setValue={awsRDSCore}
              handleSelectedValue={handleRDSCore}
              width={150}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default awsRDSDisplay;
