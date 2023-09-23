import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { azureAppService, virtualMachine } from "../constants/Azure-services";
import { FormControlComponent } from "./FormControlComponent";
import close from "../icons/icon-close.svg";
import "./styling.css";

const AzureComputeServicesDisplay = ({
  compute,
  deleteselect,
}: {
  compute: any;
  deleteselect: any;
}) => {
  // VM
  const [isVirtualMachineModalVisible, setIsVirtualMachineModalVisible] = useState(false);
  const [virtualMachineRegion, setVirtualMachineRegion] = useState("");
  const [virtualMachineOS, setVirtualMachineOS] = useState<string[]>([]);
  const [virtualMachineConfiguration, setVirtualMachineConfiguration] =useState<string[]>([]);
  const [virtualMachineDiskType, setVirtualMachineDiskType] = useState<string[]>([]);

  // Azure app service
  const [isAzureAppServiceVisible, setIsAzureAppServiceVisible] = useState(false);
  const [azureAppServiceRegion, setAzureAppServiceRegion] = useState("");
  const [azureAppServiceTier, setAzureAppServiceTier] = useState<string[]>([]);
  const [azureAppServiceOS, setAzureAppServiceOS] = useState<string[]>([]);

  useEffect(() => {
    if (compute.includes("Virtual Machine")) {
      setIsVirtualMachineModalVisible(true);
    } else {
      setIsVirtualMachineModalVisible(false);
      setVirtualMachineRegion("");
      setVirtualMachineOS([]);
      setVirtualMachineConfiguration([]);
      setVirtualMachineDiskType([]);
    }

    if (compute.includes("Azure App Service")) {
      setIsAzureAppServiceVisible(true);
    } else {
      setIsAzureAppServiceVisible(false);
      setAzureAppServiceRegion("");
      setAzureAppServiceTier([]);
      // setAzureAppServiceConfiguration([]);
      setAzureAppServiceOS([]);
    }
  }, [compute]);

  const handleVirtualMachineModal = () => {
    setIsVirtualMachineModalVisible(!isVirtualMachineModalVisible);
    deleteselect("Virtual Machine");
    setVirtualMachineRegion("");
    setVirtualMachineOS([]);
    setVirtualMachineConfiguration([]);
    setVirtualMachineDiskType([]);
  };

  const handleVirtualMachineRegion = (event: SelectChangeEvent) => {
    setVirtualMachineRegion(event.target.value);
  };

  const handleVirtualMachineConfiguration = (event: SelectChangeEvent<typeof virtualMachineOS>) => {
    const {
      target: { value },
    } = event;
    setVirtualMachineConfiguration(
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleVirtualMachineOs = (event: SelectChangeEvent<typeof virtualMachineOS>) => {
    const {
      target: { value },
    } = event;
    setVirtualMachineOS(typeof value === "string" ? value.split(",") : value);
  };

  const handleVirtualMachineDiskType = (event: SelectChangeEvent<typeof virtualMachineOS>) => {
    const {
      target: { value },
    } = event;
    setVirtualMachineDiskType(
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleAzureAppServiceRegionModal = () => {
    setIsAzureAppServiceVisible(!isAzureAppServiceVisible);
    deleteselect("Azure App Service");
    setAzureAppServiceRegion("");
    setAzureAppServiceTier([]);
    // setAzureAppServiceConfiguration([]);
    setAzureAppServiceOS([]);
  };

  const handleAzureAppServiceRegion = (event: SelectChangeEvent) => {
    setAzureAppServiceRegion(event.target.value);
  };

  const handleAzureAppServiceTier = (event: SelectChangeEvent<typeof virtualMachineOS>) => {
    const {
      target: { value },
    } = event;
    setAzureAppServiceTier(
      typeof value === "string" ? value.split(",") : value
    );
  };

  // const handleAzureAppServiceConfiguration = (
  //   event: SelectChangeEvent<typeof virtualMachineOS>
  // ) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setAzureAppServiceConfiguration(
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  const handleAzureAppServiceOs = (event: SelectChangeEvent<typeof virtualMachineOS>) => {
    const {
      target: { value },
    } = event;
    setAzureAppServiceOS(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className="modals">
      {isVirtualMachineModalVisible && (
        <div className="container">
          <div className="button">
            <div>Virtual Machine</div>
            <button onClick={handleVirtualMachineModal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={virtualMachine[0].title}
              menucontent={virtualMachine[0].values}
              setValue={virtualMachineRegion}
              handleSelectedValue={handleVirtualMachineRegion}
              width={150}
            />

            <FormControlComponent
              title={virtualMachine[1].title}
              menucontent={virtualMachine[1].values}
              setValue={virtualMachineConfiguration}
              handleSelectedValue={handleVirtualMachineConfiguration}
              width={310}
            />

            <FormControlComponent
              title={virtualMachine[2].title}
              menucontent={virtualMachine[2].values}
              setValue={virtualMachineOS}
              handleSelectedValue={handleVirtualMachineOs}
              width={150}
            />

            <FormControlComponent
              title={virtualMachine[3].title}
              menucontent={virtualMachine[3].values}
              setValue={virtualMachineDiskType}
              handleSelectedValue={handleVirtualMachineDiskType}
              width={150}
            />
          </div>
        </div>
      )}
      {isAzureAppServiceVisible && (
        <div className="container">
          <div className="button">
            <div>Azure App Service</div>
            <button onClick={handleAzureAppServiceRegionModal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={azureAppService[0].title}
              menucontent={azureAppService[0].values}
              setValue={azureAppServiceRegion}
              handleSelectedValue={handleAzureAppServiceRegion}
              width={150}
            />

            <FormControlComponent
              title={azureAppService[1].title}
              menucontent={azureAppService[1].values}
              setValue={azureAppServiceTier}
              handleSelectedValue={handleAzureAppServiceTier}
              width={250}
            />

            {/* <FormControlComponent
              title={azureAppService[2].title}
              menucontent={azureAppService[2].values}
              setValue={azureAppServiceConfiguration}
              handleSelectedValue={handleAzureAppServiceConfiguration}
              width={150}
            /> */}

            <FormControlComponent
              title={azureAppService[2].title}
              menucontent={azureAppService[2].values}
              setValue={azureAppServiceOS}
              handleSelectedValue={handleAzureAppServiceOs}
              width={150}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AzureComputeServicesDisplay;
