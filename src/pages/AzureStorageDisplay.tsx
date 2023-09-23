import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { azureManagedDisks, azureStorageAccount} from "../constants/Azure-services";
import close from "../icons/icon-close.svg";
import { FormControlComponent } from "./FormControlComponent";
import "./styling.css";

const azureStorageDisplay = ({
  storage,
  deleteselect,
}: {
  storage: any;
  deleteselect: any;
}) => {
  //StorageAccount
  const [isStorageModalVisible, setIsStorageModalVisible] = useState(false);
  const [storageAccountRegion, setStorageAccountRegion] = useState("");
  const [storageAccountType, setStorageAccountType] = useState<string[]>([]);
  const [storageAccountTier, setStorageAccountTier] = useState<string[]>([]);
  const [storageAccountCapacity, setStorageAccountCapacity] = useState<string[]>([]);

  //ManagedDisk
  const [isMdiskModalVisible, setIsMdiskModalVisible] = useState(false);
  const [mDiskRegion, setMDiskRegion] = useState("");
  const [mDiskTier, setMDiskTier] = useState<string[]>([]);
  const [mDiskType, setMDiskType] = useState<string[]>([]);
  const [mDiskCapacity, setMDiskCapacity] = useState<string[]>([]);

  const handleSAModal = () => {
    setIsStorageModalVisible(!isStorageModalVisible);
    deleteselect("Storage Account");
    setStorageAccountRegion("");
    setStorageAccountType([]);
    setStorageAccountTier([]);
    setStorageAccountCapacity([]);
  };

  const handleMDModal = () => {
    setIsMdiskModalVisible(!isMdiskModalVisible);
    deleteselect("Managed Disk");
    setMDiskRegion("");
    setMDiskTier([]);
    setMDiskType([]);
    setMDiskCapacity([]);
  };
  
  const handleSARegion = (event: SelectChangeEvent) => {
    setStorageAccountRegion(event.target.value);
  };

  const handleSATier = (event: SelectChangeEvent<typeof storageAccountTier>) => {
    const {
      target: { value },
    } = event;
    setStorageAccountTier(typeof value === "string" ? value.split(",") : value);
  };

  const handleSAType = (event: SelectChangeEvent<typeof storageAccountType>) => {
    const {
      target: { value },
    } = event;
    setStorageAccountType(typeof value === "string" ? value.split(",") : value);
  };

  const handleSACapacity = (event: SelectChangeEvent<typeof storageAccountCapacity>) => {
    const {
      target: { value },
    } = event;
    setStorageAccountCapacity(typeof value === "string" ? value.split(",") : value);
  };

  const handleMDRegion = (event: SelectChangeEvent) => {
    setMDiskRegion(event.target.value);
  };

  const handleMDTier = (event: SelectChangeEvent<typeof mDiskTier>) => {
    const {
      target: { value },
    } = event;
    setMDiskTier(typeof value === "string" ? value.split(",") : value);
  };

  const handleMDType = (event: SelectChangeEvent<typeof mDiskType>) => {
    const {
      target: { value },
    } = event;
    setMDiskType(typeof value === "string" ? value.split(",") : value);
  };

  const handleMDCapacity = (event: SelectChangeEvent<typeof mDiskCapacity>) => {
    const {
      target: { value },
    } = event;
    setMDiskCapacity(typeof value === "string" ? value.split(",") : value);
  };
  
  useEffect(() => {
    if (storage.includes("Storage Account")) {
      setIsStorageModalVisible(true);
    } else {
      setIsStorageModalVisible(false);
      setStorageAccountRegion("");
      setStorageAccountType([]);
      setStorageAccountTier([]);
      setStorageAccountCapacity([]);
    }
    if (storage.includes("Managed Disk")) {
      setIsMdiskModalVisible(true);
    } else {
      setIsMdiskModalVisible(false);
      setMDiskRegion("");
      setMDiskTier([]);
      setMDiskType([]);
      setMDiskCapacity([]);
    }
  }, [storage]);

  return(
    <div className="modals">
      {isStorageModalVisible && (
        <div className="container">
          <div className="button">
            <div>Storage Account</div>
            <button onClick={handleSAModal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={azureStorageAccount[0].title}
              menucontent={azureStorageAccount[0].values}
              setValue={storageAccountRegion}
              handleSelectedValue={handleSARegion}
              width={150}
            />

            <FormControlComponent
              title={azureStorageAccount[1].title}
              menucontent={azureStorageAccount[1].values}
              setValue={storageAccountTier}
              handleSelectedValue={handleSATier}
              width={310}
            />

            <FormControlComponent
              title={azureStorageAccount[2].title}
              menucontent={azureStorageAccount[2].values}
              setValue={storageAccountType}
              handleSelectedValue={handleSAType}
              width={150}
            />

            <FormControlComponent
              title={azureStorageAccount[3].title}
              menucontent={azureStorageAccount[3].values}
              setValue={storageAccountCapacity}
              handleSelectedValue={handleSACapacity}
              width={150}
            />
          </div>
        </div>
      )}
      {isMdiskModalVisible && (
        <div className="container">
          <div className="button">
            <div>Managed Disk</div>
            <button onClick={handleMDModal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={azureManagedDisks[0].title}
              menucontent={azureManagedDisks[0].values}
              setValue={mDiskRegion}
              handleSelectedValue={handleMDRegion}
              width={150}
            />

            <FormControlComponent
              title={azureManagedDisks[1].title}
              menucontent={azureManagedDisks[1].values}
              setValue={mDiskTier}
              handleSelectedValue={handleMDTier}
              width={310}
            />

            <FormControlComponent
              title={azureManagedDisks[2].title}
              menucontent={azureManagedDisks[2].values}
              setValue={mDiskType}
              handleSelectedValue={handleMDType}
              width={150}
            />

            <FormControlComponent
              title={azureManagedDisks[3].title}
              menucontent={azureManagedDisks[3].values}
              setValue={mDiskCapacity}
              handleSelectedValue={handleMDCapacity}
              width={150}
            />

          </div>
        </div>
      )}
    </div>
  );
};

export default azureStorageDisplay;
