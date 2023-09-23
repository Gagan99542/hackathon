import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { awsLB, azureApigtw, cloudFront } from "../constants/Aws-services";
import close from "../icons/icon-close.svg";
import { FormControlComponent } from "./FormControlComponent";
import "./styling.css";

const awsNetworkDisplay = ({
  network,
  deleteselect,
}: {
  network: any;
  deleteselect: any;
}) => {
  //API Gateway
  const [isAPIGtwModalVisible, setIsAPIGtwModalVisible] = useState(false);
  const [apiGtwRegion, setApiGtwRegion] = useState("");
  const [apiGtwType, setApiGtwType] = useState<string[]>([]);
  const [apiGtwData, setApiGtwData] = useState<string[]>([]);

  //CloudFront
  const [isCloudFrontModalVisible, setIsCloudFrontModalVisible] = useState(false);
  const [cloudfrontRegion, setCloudFrontRegion] = useState<string[]>([]);

  //LoadBalancer
  const [isLbModalVisible, setIsLbModalVisible] = useState(false);
  const [loadBalancerRegion, setLoadBalancerRegion] = useState("");
  const [loadBalancerTier, setLoadBalancerTier] = useState<string[]>([]);

  const handleApiGtwModal = () => {
    setIsAPIGtwModalVisible(!isAPIGtwModalVisible);
    deleteselect("API Gateway");
    setApiGtwRegion("");
    setApiGtwType([]);
    setApiGtwData([]);
  };

  const handleCloudFrontModal = () => {
    setIsCloudFrontModalVisible(!isCloudFrontModalVisible);
    deleteselect("Cloud Front");
    setCloudFrontRegion([]);
  };

  const handleLoadBalancerModal = () => {
    setIsLbModalVisible(!isLbModalVisible);
    deleteselect("Load Balancer");
    setLoadBalancerRegion("");
    setLoadBalancerTier([]);
  };

  const handleApiGtwRegion = (event: SelectChangeEvent) => {
    setApiGtwRegion(event.target.value);
  };

  const handleApiGtwTier = (event: SelectChangeEvent<typeof apiGtwType>) => {
    const {
      target: { value },
    } = event;
    setApiGtwType(typeof value === "string" ? value.split(",") : value);
  };

  const handleApiGtwData = (event: SelectChangeEvent<typeof apiGtwData>) => {
    const {
      target: { value },
    } = event;
    setApiGtwData(typeof value === "string" ? value.split(",") : value);
  };

    const handleCloudFrontRegion = (
      event: SelectChangeEvent<typeof cloudfrontRegion>
    ) => {
      const {
        target: { value },
      } = event;
      setCloudFrontRegion(
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
    if (network.includes("API Gateway")) {
      setIsAPIGtwModalVisible(true);
    } else {
      setIsAPIGtwModalVisible(false);
      setApiGtwRegion("");
      setApiGtwType([]);
      setApiGtwData([]);
    }
    if (network.includes("Cloud Front")) {
      setIsCloudFrontModalVisible(true);
    } else {
      setIsCloudFrontModalVisible(false);
      setCloudFrontRegion([]);
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
              title={awsLB[0].title}
              menucontent={awsLB[0].values}
              setValue={loadBalancerRegion}
              handleSelectedValue={handleLoadBalancerRegion}
              width={150}
            />

            <FormControlComponent
              title={awsLB[1].title}
              menucontent={awsLB[1].values}
              setValue={loadBalancerTier}
              handleSelectedValue={handleLoadBalancerTier}
              width={310}
            />
          </div>
        </div>
      )}
      {isAPIGtwModalVisible && (
        <div className="container">
          <div className="button">
            <div>API Gateway</div>
            <button onClick={handleApiGtwModal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={azureApigtw[0].title}
              menucontent={azureApigtw[0].values}
              setValue={apiGtwRegion}
              handleSelectedValue={handleApiGtwRegion}
              width={150}
            />

            <FormControlComponent
              title={azureApigtw[1].title}
              menucontent={azureApigtw[1].values}
              setValue={apiGtwType}
              handleSelectedValue={handleApiGtwTier}
              width={310}
            />

            <FormControlComponent
              title={azureApigtw[2].title}
              menucontent={azureApigtw[2].values}
              setValue={apiGtwData}
              handleSelectedValue={handleApiGtwData}
              width={150}
            />
          </div>
        </div>
      )}
      {isCloudFrontModalVisible && (
        <div className="container">
          <div className="button">
            <div>Cloud Front</div>
            <button onClick={handleCloudFrontModal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={cloudFront[0].title}
              menucontent={cloudFront[0].values}
              setValue={cloudfrontRegion}
              handleSelectedValue={handleCloudFrontRegion}
              width={150}
            />
          </div>
        </div>
      )}
      
    </div>
  );
};

export default awsNetworkDisplay;
