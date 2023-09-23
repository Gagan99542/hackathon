import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import close from "../icons/icon-close.svg";
import { FormControlComponent } from "./FormControlComponent";
import "./styling.css";
import { awsEbs, awsS3 } from "../constants/Aws-services";

const awsStorageDisplay = ({
  storage,
  deleteselect,
}: {
  storage: any;
  deleteselect: any;
}) => {
  //Simple Storage Service
  const [isS3ModalVisible, setIsS3ModalVisible] = useState(false);
  const [s3Region, setS3Region] = useState("");
  const [s3Type, setS3Type] = useState<string[]>([]);
  const [s3Tier, setS3Tier] = useState<string[]>([]);
  const [s3Capacity, setS3Capacity] = useState<string[]>([]);

  //EBS Volume
  const [isEbsModalVisible, setIsEbsModalVisible] = useState(false);
  const [ebsRegion, setEbsRegion] = useState("");
  const [ebsTier, setEbsTier] = useState<string[]>([]);
  const [ebsType, setEbsType] = useState<string[]>([]);
  const [ebsCapacity, setEbsCapacity] = useState<string[]>([]);

  const handleS3Modal = () => {
    setIsEbsModalVisible(!isS3ModalVisible);
    deleteselect("S3");
    setS3Region("");
    setS3Tier([]);
    setS3Type([]);
    setS3Capacity([]);
  };

  const handleEbsModal = () => {
    setIsS3ModalVisible(!isEbsModalVisible);
    deleteselect("EBS Volume");
    setEbsRegion("");
    setEbsTier([]);
    setEbsType([]);
    setEbsCapacity([]);
  };
  
  const handleS3Region = (event: SelectChangeEvent) => {
    setS3Region(event.target.value);
  };

  const handleS3Tier = (event: SelectChangeEvent<typeof s3Tier>) => {
    const {
      target: { value },
    } = event;
    setS3Tier(typeof value === "string" ? value.split(",") : value);
  };

  const handleS3Type = (event: SelectChangeEvent<typeof s3Type>) => {
    const {
      target: { value },
    } = event;
    setS3Type(typeof value === "string" ? value.split(",") : value);
  };

  const handleS3Capacity = (event: SelectChangeEvent<typeof s3Capacity>) => {
    const {
      target: { value },
    } = event;
    setS3Capacity(typeof value === "string" ? value.split(",") : value);
  };

  const handleEbsRegion = (event: SelectChangeEvent) => {
    setEbsRegion(event.target.value);
  };

  const handleEbsTier = (event: SelectChangeEvent<typeof ebsTier>) => {
    const {
      target: { value },
    } = event;
    setEbsTier(typeof value === "string" ? value.split(",") : value);
  };

  const handleEbsType = (event: SelectChangeEvent<typeof ebsType>) => {
    const {
      target: { value },
    } = event;
    setEbsType(typeof value === "string" ? value.split(",") : value);
  };

  const handleEbsCapacity = (event: SelectChangeEvent<typeof ebsCapacity>) => {
    const {
      target: { value },
    } = event;
    setEbsCapacity(typeof value === "string" ? value.split(",") : value);
  };
  
  useEffect(() => {
    if (storage.includes("S3")) {
      setIsS3ModalVisible(true);
    } else {
      setIsS3ModalVisible(false);
      setS3Region("");
      setS3Tier([]);
      setS3Type([]);
      setS3Capacity([]);
    }
    if (storage.includes("EBS Volume")) {
      setIsEbsModalVisible(true);
    } else {
      setIsEbsModalVisible(false);
      setEbsRegion("");
      setEbsTier([]);
      setEbsType([]);
      setEbsCapacity([]);
    }
  }, [storage]);

  return(
    <div className="modals">
      {isS3ModalVisible && (
        <div className="container">
          <div className="button">
            <div>Simple Storage Service(S3)</div>
            <button onClick={handleS3Modal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={awsS3[0].title}
              menucontent={awsS3[0].values}
              setValue={s3Region}
              handleSelectedValue={handleS3Region}
              width={150}
            />

            <FormControlComponent
              title={awsS3[1].title}
              menucontent={awsS3[1].values}
              setValue={s3Tier}
              handleSelectedValue={handleS3Tier}
              width={310}
            />

            <FormControlComponent
              title={awsS3[2].title}
              menucontent={awsS3[2].values}
              setValue={s3Type}
              handleSelectedValue={handleS3Type}
              width={150}
            />

            <FormControlComponent
              title={awsS3[3].title}
              menucontent={awsS3[3].values}
              setValue={s3Capacity}
              handleSelectedValue={handleS3Capacity}
              width={150}
            />
          </div>
        </div>
      )}
      {isEbsModalVisible && (
        <div className="container">
          <div className="button">
            <div>EBS Volume</div>
            <button onClick={handleEbsModal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={awsEbs[0].title}
              menucontent={awsEbs[0].values}
              setValue={ebsRegion}
              handleSelectedValue={handleEbsRegion}
              width={150}
            />

            <FormControlComponent
              title={awsEbs[1].title}
              menucontent={awsEbs[1].values}
              setValue={ebsTier}
              handleSelectedValue={handleEbsTier}
              width={310}
            />

            <FormControlComponent
              title={awsEbs[2].title}
              menucontent={awsEbs[2].values}
              setValue={ebsType}
              handleSelectedValue={handleEbsType}
              width={150}
            />

            <FormControlComponent
              title={awsEbs[3].title}
              menucontent={awsEbs[3].values}
              setValue={ebsCapacity}
              handleSelectedValue={handleEbsCapacity}
              width={150}
            />

          </div>
        </div>
      )}
    </div>
  );
};

export default awsStorageDisplay;
