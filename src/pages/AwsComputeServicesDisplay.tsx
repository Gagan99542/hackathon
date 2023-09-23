import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { awsvirtualMachine } from "../constants/Aws-services";
import close from "../icons/icon-close.svg";
import { FormControlComponent } from "./FormControlComponent";
import "./styling.css";

const AwsComputeServicesDisplay = ({
  compute,
  deleteselect,
}: {
  compute: any;
  deleteselect: any;
}) => {
  // Elastic Compute2
  const [isEc2ModalVisible, setIsEc2ModalVisible] = useState(false);
  const [ec2Region, setEc2Region] = useState("");
  const [ec2OS, setEc2OS] = useState<string[]>([]);
  const [ec2Configuration, setEc2Configuration] = useState<string[]>([]);
  const [ec2DiskType, setEc2DiskType] = useState<string[]>([]);
  
  //Elastic Beanstalk
  const [isElasticBeanStalkModalVisible, setIsElasticBeanStalkModalVisible] = useState(false);
  const [ebsRegion, setEbsRegion] = useState("");
  const [ebsOs, setEbsOs] = useState<string[]>([]);
  const [ebsConfiguration, setEbsConfiguration] = useState<string[]>([]);
  const [ebsDiskType, setEbsDiskType] = useState<string[]>([]);

  useEffect(() => {
    if (compute.includes("Elastic Compute2")) {
      setIsEc2ModalVisible(true);
    } else {
      setIsEc2ModalVisible(false);
      setEc2Region("");
      setEc2OS([]);
      setEc2Configuration([]);
      setEc2DiskType([]);
    }
    if (compute.includes("Elastic Beanstalk")) {
      setIsElasticBeanStalkModalVisible(true);
    } else {
      setIsElasticBeanStalkModalVisible(false);
      setEbsRegion("");
      setEbsOs([]);
      setEbsConfiguration([]);
      setEbsDiskType([]);
    }
  }, [compute]);

  const handleEc2Modal = () => {
    setIsEc2ModalVisible(!isEc2ModalVisible);
    deleteselect("Elastic Compute2");
    setEc2Region("");
    setEc2OS([]);
    setEc2Configuration([]);
    setEc2DiskType([]);
  };

  const handleEbsModal = () => {
    setIsElasticBeanStalkModalVisible(!isElasticBeanStalkModalVisible);
    deleteselect("Elastic Beanstalk");
    setEbsRegion("");
    setEbsOs([]);
    setEbsConfiguration([]);
    setEbsDiskType([]);
  };

  const handleEc2Region = (event: SelectChangeEvent) => {
    setEc2Region(event.target.value);
  };

  const handleEc2Configuration = (event: SelectChangeEvent<typeof ec2Configuration>) => {
    const {
      target: { value },
    } = event;
    setEc2Configuration(typeof value === "string" ? value.split(",") : value);
  };

  const handleEc2OS = (event: SelectChangeEvent<typeof ec2OS>) => {
    const {
      target: { value },
    } = event;
    setEc2OS(typeof value === "string" ? value.split(",") : value);
  };

  const handleEc2DiskType = (event: SelectChangeEvent<typeof ec2DiskType>) => {
    const {
      target: { value },
    } = event;
    setEc2DiskType(typeof value === "string" ? value.split(",") : value);
  };

  const handleEbsRegion = (event: SelectChangeEvent) => {
    setEbsRegion(event.target.value);
  };

  const handleEbsConfiguration = (event: SelectChangeEvent<typeof ebsConfiguration>) => {
    const {
      target: { value },
    } = event;
    setEbsConfiguration(typeof value === "string" ? value.split(",") : value);
  };

  const handleEbsOS = (event: SelectChangeEvent<typeof ebsOs>) => {
    const {
      target: { value },
    } = event;
    setEbsOs(typeof value === "string" ? value.split(",") : value);
  };

  const handleEbsDiskType = (event: SelectChangeEvent<typeof ebsDiskType>) => {
    const {
      target: { value },
    } = event;
    setEbsDiskType(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className="modals">
      {isEc2ModalVisible && (
        <div className="container">
          <div className="button">
            <div>Elastic Compute2</div>
            <button onClick={handleEc2Modal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={awsvirtualMachine[0].title}
              menucontent={awsvirtualMachine[0].values}
              setValue={ec2Region}
              handleSelectedValue={handleEc2Region}
              width={150}
            />

            <FormControlComponent
              title={awsvirtualMachine[1].title}
              menucontent={awsvirtualMachine[1].values}
              setValue={ec2Configuration}
              handleSelectedValue={handleEc2Configuration}
              width={310}
            />

            <FormControlComponent
              title={awsvirtualMachine[2].title}
              menucontent={awsvirtualMachine[2].values}
              setValue={ec2OS}
              handleSelectedValue={handleEc2OS}
              width={150}
            />

            <FormControlComponent
              title={awsvirtualMachine[3].title}
              menucontent={awsvirtualMachine[3].values}
              setValue={ec2DiskType}
              handleSelectedValue={handleEc2DiskType}
              width={150}
            />
          </div>
        </div>
      )}
      {isElasticBeanStalkModalVisible && (
        <div className="container">
          <div className="button">
            <div>Elastic Beanstalk</div>
            <button onClick={handleEbsModal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={awsvirtualMachine[0].title}
              menucontent={awsvirtualMachine[0].values}
              setValue={ebsRegion}
              handleSelectedValue={handleEbsRegion}
              width={150}
            />

            <FormControlComponent
              title={awsvirtualMachine[1].title}
              menucontent={awsvirtualMachine[1].values}
              setValue={ebsConfiguration}
              handleSelectedValue={handleEbsConfiguration}
              width={310}
            />

            <FormControlComponent
              title={awsvirtualMachine[2].title}
              menucontent={awsvirtualMachine[2].values}
              setValue={ebsOs}
              handleSelectedValue={handleEbsOS}
              width={150}
            />

            <FormControlComponent
              title={awsvirtualMachine[3].title}
              menucontent={awsvirtualMachine[3].values}
              setValue={ebsDiskType}
              handleSelectedValue={handleEbsDiskType}
              width={150}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AwsComputeServicesDisplay;
