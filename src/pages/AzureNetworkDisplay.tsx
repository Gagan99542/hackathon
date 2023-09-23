import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { azureAppgtw, azureLoadBalancer, azurefrontDoor} from "../constants/Azure-services";
import close from "../icons/icon-close.svg";
import { FormControlComponent } from "./FormControlComponent";
import "./styling.css";

const azureNetworkDisplay = ({
  network,
  deleteselect,
}: {
  network: any;
  deleteselect: any;
}) => {
  //Application Gateway
  const [isAppgtwModalVisible, setIsAppgtwModalVisible] = useState(false);
  const [appGtwRegion, setAppGtwRegion] = useState("");
  const [appGtwTier, setAppGtwTier] = useState<string[]>([]);
  const [appGtwSize, setAppGtwSize] = useState<string[]>([]);
  const [appGtwData, setAppGtwData] = useState<string[]>([]);

  //FrontDoor
  const [isFrontDoorModalVisible, setIsFrontDoorModalVisible] = useState(false);
  const [froontdoorZone, setFroontdoorZone] = useState<string[]>([]);
  const [frontdoorTier, setFrontdoorTier] = useState<string[]>([]);

  //LoadBalancer
  const [isLbModalVisible, setIsLbModalVisible] = useState(false);
  const [loadBalancerRegion, setLoadBalancerRegion] = useState("");
  const [loadBalancerTier, setLoadBalancerTier] = useState<string[]>([]);

  const handleAppGtwModal = () => {
    setIsAppgtwModalVisible(!isAppgtwModalVisible);
    deleteselect("Application Gateway");
    setAppGtwRegion("");
    setAppGtwTier([]);
    setAppGtwSize([]);
    setAppGtwData([]);
  };

  const handleFrontDoorModal = () => {
    setIsFrontDoorModalVisible(!isFrontDoorModalVisible);
    deleteselect("Front Door");
    setFrontdoorTier([]);
    setFroontdoorZone([]);
  };

  const handleLoadBalancerModal = () => {
    setIsLbModalVisible(!isLbModalVisible);
    deleteselect("Load Balancer");
    setLoadBalancerRegion("");
    setLoadBalancerTier([]);
  };

  const handleAppGtwRegion = (event: SelectChangeEvent) => {
    setAppGtwRegion(event.target.value);
  };

  const handleAppGtwSize = (event: SelectChangeEvent<typeof appGtwSize>) => {
    const {
      target: { value },
    } = event;
    setAppGtwSize(typeof value === "string" ? value.split(",") : value);
  };

  const handleAppGtwTier = (event: SelectChangeEvent<typeof appGtwTier>) => {
    const {
      target: { value },
    } = event;
    setAppGtwTier(typeof value === "string" ? value.split(",") : value);
  };

  const handleAppGtwData = (event: SelectChangeEvent<typeof appGtwData>) => {
    const {
      target: { value },
    } = event;
    setAppGtwData(typeof value === "string" ? value.split(",") : value);
  };

  const handleFrontDoorZone = (event: SelectChangeEvent<typeof froontdoorZone>) => {
    const {
      target: { value },
    } = event;
    setFroontdoorZone(
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleFrontDoorTier = (event: SelectChangeEvent<typeof frontdoorTier>) => {
    const {
      target: { value },
    } = event;
    setFrontdoorTier(
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleLoadBalancerRegion = (event: SelectChangeEvent) => {
    setLoadBalancerRegion(event.target.value);
  };

  const handleLoadBalancerTier = (event: SelectChangeEvent<typeof loadBalancerTier>) => {
    const {
      target: { value },
    } = event;
    setLoadBalancerTier(
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    if (network.includes("Application Gateway")) {
        setIsAppgtwModalVisible(true);
    } else {
        setIsAppgtwModalVisible(false);
        setAppGtwRegion("");
        setAppGtwSize([]);
        setAppGtwTier([]);
        setAppGtwData([]);
    }
    if (network.includes("Front Door")) {
      setIsFrontDoorModalVisible(true);
    } else {
      setIsFrontDoorModalVisible(false);
      setFrontdoorTier([]);
      setFroontdoorZone([]);
    }
    if (network.includes("Load Balancer")) {
        setIsLbModalVisible(true);
      } else {
        setIsLbModalVisible(false);
        setLoadBalancerRegion("");
        setLoadBalancerTier([]);
      }
  }, [network]);

  return (
    <div className="modals">
      {isAppgtwModalVisible && (
        <div className="container">
          <div className="button">
            <div>Application Gateway</div>
            <button onClick={handleAppGtwModal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={azureAppgtw[0].title}
              menucontent={azureAppgtw[0].values}
              setValue={appGtwRegion}
              handleSelectedValue={handleAppGtwRegion}
              width={150}
            />

            <FormControlComponent
              title={azureAppgtw[1].title}
              menucontent={azureAppgtw[1].values}
              setValue={appGtwTier}
              handleSelectedValue={handleAppGtwTier}
              width={310}
            />

            <FormControlComponent
              title={azureAppgtw[2].title}
              menucontent={azureAppgtw[2].values}
              setValue={appGtwSize}
              handleSelectedValue={handleAppGtwSize}
              width={150}
            />

            <FormControlComponent
              title={azureAppgtw[3].title}
              menucontent={azureAppgtw[3].values}
              setValue={appGtwData}
              handleSelectedValue={handleAppGtwData}
              width={150}
            />
          </div>
        </div>
      )}
      {isFrontDoorModalVisible && (
        <div className="container">
          <div className="button">
            <div>Front Door</div>
            <button onClick={handleFrontDoorModal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={azurefrontDoor[0].title}
              menucontent={azurefrontDoor[0].values}
              setValue={frontdoorTier}
              handleSelectedValue={handleFrontDoorTier}
              width={150}
            />

            <FormControlComponent
              title={azurefrontDoor[1].title}
              menucontent={azurefrontDoor[1].values}
              setValue={froontdoorZone}
              handleSelectedValue={handleFrontDoorZone}
              width={310}
            />
          </div>
        </div>
      )}
      {isLbModalVisible && (
        <div className="container">
          <div className="button">
            <div>Load Balancer</div>
            <button onClick={handleLoadBalancerModal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={azureLoadBalancer[0].title}
              menucontent={azureLoadBalancer[0].values}
              setValue={loadBalancerRegion}
              handleSelectedValue={handleLoadBalancerRegion}
              width={150}
            />

            <FormControlComponent
              title={azureLoadBalancer[1].title}
              menucontent={azureLoadBalancer[1].values}
              setValue={loadBalancerTier}
              handleSelectedValue={handleLoadBalancerTier}
              width={310}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default azureNetworkDisplay;
