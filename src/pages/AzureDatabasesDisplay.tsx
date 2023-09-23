import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { azurepostgresDatabase, azuresqlDatabase} from "../constants/Azure-services";
import close from "../icons/icon-close.svg";
import { FormControlComponent } from "./FormControlComponent";
import "./styling.css";

const azuresqlDatabaseDisplay = ({
  database,
  deleteselect,
}: {
  database: any;
  deleteselect: any;
}) => {
  //SQL Database
  const [isSqlDatabaseModalVisible, setIsSqlDatabaseModalVisible] = useState(false);
  const [sqlDatabaseRegion, setSqldatabaseRegion] = useState("");
  const [sqlDatabaseType, setSqlDatabaseType] = useState<string[]>([]);
  const [sqlDatabaseTier, setSqlDatabaseTier] = useState<string[]>([]);
  const [sqlDatabaseCore, setSqlDatabaseCore] = useState<string[]>([]);

  //Postgress Database
  const [ispostgressDatabaseModalVisible, setIspostgressDatabaseModalVisible] = useState(false);
  const [postgressDatabaseRegion, setPostgressDatabaseRegion] = useState("");
  const [postgressDatabaseType, setPostgressDatabaseType] = useState<string[]>([]);
  const [postgressDatabaseTier, setPostgressDatabaseTier] = useState<string[]>([]);
  const [postgressDatabaseCore, setPostgressDatabaseCore] = useState<string[]>([]);
  const [postgressComputeName, setPostgressComputeName] = useState<string[]>([]);

  const handlesqlDatabaseModal = () => {
    setIsSqlDatabaseModalVisible(!isSqlDatabaseModalVisible);
    deleteselect("SQL Database");
    setSqldatabaseRegion("");
    setSqlDatabaseTier([]);
    setSqlDatabaseType([]);
    setSqlDatabaseCore([]);
  };

  const handlepostgressDatabaseModal = () => {
    setIspostgressDatabaseModalVisible(!ispostgressDatabaseModalVisible);
    deleteselect("Postgres");
    setPostgressDatabaseRegion("");
    setPostgressComputeName([]);
    setPostgressDatabaseCore([]);
    setPostgressDatabaseTier([]);
    setPostgressDatabaseType([]);
  };

  const handlesqlDatabaseRegion = (event: SelectChangeEvent) => {
    setSqldatabaseRegion(event.target.value);
  };

  const handlesqlDatabaseType = (event: SelectChangeEvent<typeof sqlDatabaseType>) => {
    const {
      target: { value },
    } = event;
    setSqlDatabaseType(typeof value === "string" ? value.split(",") : value);
  };

  const handlesqlDatabaseTier = (event: SelectChangeEvent<typeof sqlDatabaseTier>) => {
    const {
      target: { value },
    } = event;
    setSqlDatabaseTier(typeof value === "string" ? value.split(",") : value);
  };

  const handlesqlDatabaseCore = (event: SelectChangeEvent<typeof sqlDatabaseCore>) => {
    const {
      target: { value },
    } = event;
    setSqlDatabaseCore(typeof value === "string" ? value.split(",") : value);
  };

  const handlepostgressDatabaseRegion = (event: SelectChangeEvent) => {
    setPostgressDatabaseRegion(event.target.value);
  };

  const handlepostgressDatabaseType = (event: SelectChangeEvent<typeof sqlDatabaseType>) => {
    const {
      target: { value },
    } = event;
    setPostgressDatabaseType(
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handlepostgressDatabaseTier = (event: SelectChangeEvent<typeof sqlDatabaseType>) => {
    const {
      target: { value },
    } = event;
    setPostgressDatabaseTier(
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handlepostgressDatabaseCore = (event: SelectChangeEvent<typeof sqlDatabaseType>) => {
    const {
      target: { value },
    } = event;
    setPostgressDatabaseCore(
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handlepostgressDatabaseComputeName = (event: SelectChangeEvent<typeof sqlDatabaseType>) => {
    const {
      target: { value },
    } = event;
    setPostgressComputeName(
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    if (database.includes("SQL Database")) {
      setIsSqlDatabaseModalVisible(true);
    } else {
      setIsSqlDatabaseModalVisible(false);
      setSqldatabaseRegion("");
      setSqlDatabaseType([]);
      setSqlDatabaseTier([]);
      setSqlDatabaseCore([]);
    }
    if (database.includes("Postgres")) {
      setIspostgressDatabaseModalVisible(true);
    } else {
      setIspostgressDatabaseModalVisible(false);
      setPostgressDatabaseRegion("");
      setPostgressDatabaseType([]);
      setPostgressDatabaseTier([]);
      setPostgressDatabaseCore([]);
      setPostgressComputeName([]);
    }
  }, [database]);

  return (
    <div className="modals">
      {isSqlDatabaseModalVisible && (
        <div className="container">
          <div className="button">
            <div>Database</div>
            <button onClick={handlesqlDatabaseModal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={azuresqlDatabase[0].title}
              menucontent={azuresqlDatabase[0].values}
              setValue={sqlDatabaseRegion}
              handleSelectedValue={handlesqlDatabaseRegion}
              width={150}
            />

            <FormControlComponent
              title={azuresqlDatabase[1].title}
              menucontent={azuresqlDatabase[1].values}
              setValue={sqlDatabaseType}
              handleSelectedValue={handlesqlDatabaseType}
              width={310}
            />

            <FormControlComponent
              title={azuresqlDatabase[2].title}
              menucontent={azuresqlDatabase[2].values}
              setValue={sqlDatabaseTier}
              handleSelectedValue={handlesqlDatabaseTier}
              width={150}
            />

            <FormControlComponent
              title={azuresqlDatabase[3].title}
              menucontent={azuresqlDatabase[3].values}
              setValue={sqlDatabaseCore}
              handleSelectedValue={handlesqlDatabaseCore}
              width={150}
            />
          </div>
        </div>
      )}
      {ispostgressDatabaseModalVisible && (
        <div className="container">
          <div className="button">
            <div>Postgress</div>
            <button onClick={handlepostgressDatabaseModal}>
              <img src={close} alt="close button" />
            </button>
          </div>
          <div className="dropdown">
            <FormControlComponent
              title={azurepostgresDatabase[0].title}
              menucontent={azurepostgresDatabase[0].values}
              setValue={postgressDatabaseRegion}
              handleSelectedValue={handlepostgressDatabaseRegion}
              width={150}
            />

            <FormControlComponent
              title={azurepostgresDatabase[1].title}
              menucontent={azurepostgresDatabase[1].values}
              setValue={postgressDatabaseType}
              handleSelectedValue={handlepostgressDatabaseType}
              width={310}
            />

            <FormControlComponent
              title={azurepostgresDatabase[2].title}
              menucontent={azurepostgresDatabase[2].values}
              setValue={postgressDatabaseTier}
              handleSelectedValue={handlepostgressDatabaseTier}
              width={150}
            />

            <FormControlComponent
              title={azurepostgresDatabase[3].title}
              menucontent={azurepostgresDatabase[3].values}
              setValue={postgressDatabaseCore}
              handleSelectedValue={handlepostgressDatabaseCore}
              width={150}
            />

            <FormControlComponent
              title={azurepostgresDatabase[4].title}
              menucontent={azurepostgresDatabase[4].values}
              setValue={postgressComputeName}
              handleSelectedValue={handlepostgressDatabaseComputeName}
              width={150}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default azuresqlDatabaseDisplay;
