//Resource Selection Dropdown Lists
export const AzureComputeServices = [
  "Virtual Machine",
  "Azure Functions",
  "Azure App Service",
];

export const AzureNetworkServices = [
  "Virtual Network",
  "Load Balancer",
  "Application Gateway",
  "Front Door",
];

export const AzureDataServices = [
  "SQL Database", 
  "Postgres"
];

export const AzureStorageServices = [
  "Storage Account",
  "Managed Disk"
];

// Common Configuration for resources Dropdown List
const region = [
  "East US"
];

const osTypeData = [
  "Windows",
  "Linux"
];

// Virtual Machine Configuration Dropdown List
const virtualMachineConfigurationData = [
  "B1s: 1CPU, 1GB RAM",
  "B2s: 2CPU, 4GB RAM",
  "B2ms: 2CPU, 8GB RAM",
  "DS1_V2: 1CPU, 3.5GB RAM",
  "D2s_V3/D2as V4: 2CPU, 8GB RAM",
  "DS2_v2: 2CPU, 7GB RAM",
  "B4ms: 4CPU, 16GB RAM",
  "D4s_V3: 4CPU, 16GB RAM",
  "Ds3_v2: 4CPU, 14GB RAM",
];

const diskTypeData = [
  "Standard HDD",
  "Standard SSD",
  "Premium SSD"
];

// App Service Configuration Dropdown List
const azureAppServiceTierData = [
  "B1: 1Core 1.75Gb RAM",
  "B2: 2Core 3.5Gb RAM",
  "B3: 4Core 7Gb RAM",
  "S1: 1Core 1.75Gb RAM",
  "S2: 2Core 3.5Gb RAM",
  "S3: 1Core 1.75Gb RAM",
  "P1V2: 1Core 3.5Gb RAM",
  "P2V2: 2Core 7Gb RAM",
  "P3V2: 4Core 14Gb RAM",
  "P2V3: 4Core 16Gb RAM",
  "P3V3: 8Core 32Gb RAM",
];

// SQL Database Configuration Dropdown List
const sqldatabaseTier = [
  "FsV2",
  "Standard Gen5",
  "Dc Series",
];

const sqldatabaseCore = [
  "2",
  "4",
  "8",
  "16",
];

const databaseType = [
  "Single",
  "Flexible",
];

//POstgress Database Configuration Dropdown List
const postgressTier = [
  "Basic",
  "General Purpose",
  "Memory Optimized",
  "Burstable",
];

const postgressCores = [
  "1",
  "2",
  "4",
  "8",
  "16",
];

const postgressComputeName = [
  "Gen5",
  "B1Ms",
  "B2S",
  "B4Ms",
  "B8Ms",
  "D2ads v5",
  "D4ads v5",
  "D8ads v5",
  "D16ads v5"
];

//Managed Disk Configuration Dropdown List
const managedDiskTier = [
  "Managed Disk",
];

//Storage Account Configuration Dropdown List
const storageAccountType = [
  "Block Blob",
];

const saccountTier = [
  "General Purpose v2"
];

const storagecapacity = [
  "5",
  "16",
  "32",
  "128"
];

//Application Gateway Configuration Dropdown List
const appgtwTier = [
  "Standard",
  "Standard v2",
  "WAF",
  "WAF v2"
];

const appgtwSize = [
  "Medium",
  "Large"
];

const appgtwDataProcessed = [
  "10TB",
  "Unlimited"
];

//Front Door Configuration Dropdown List
const frontDoorTier =[
  "Classic"
];

const azureFrontDoorZone = [
  "North America, Europe, Middle East and Africa"
];

const loadBalancerTier = [
  "Basic",
  "Standard",
  "Gateway"
];

//Selected Resource Dropdown Menu Contents
export const virtualMachine = [
  {
    title: "Region",
    values: region,
  },
  {
    title: "Configuration",
    values: virtualMachineConfigurationData,
  },
  {
    title: "OS",
    values: osTypeData,
  },
  {
    title: "Disk Type",
    values: diskTypeData,
  },
];

export const azureAppService = [
  {
    title: "Region",
    values: region,
  },
  {
    title: "Tier",
    values: azureAppServiceTierData,
  },
  {
    title: "OS",
    values: osTypeData,
  },
];

export const azuresqlDatabase = [
  {
    title: "Region",
    values: region,
  },
  {
    title: "Type",
    values: databaseType,
  },
  {
    title: "Tier",
    values: sqldatabaseTier,
  },
  {
    title: "Core",
    values: sqldatabaseCore,
  },
];

export const azurepostgresDatabase = [
  {
    title: "Region",
    values: region,
  },
  {
    title: "Type",
    values: databaseType,
  },
  {
    title: "Tier",
    values: postgressTier,
  },
  {
    title: "Core",
    values: postgressCores,
  },
  {
    title: "ComputeName",
    values: postgressComputeName,
  },
];

export const azureManagedDisks = [
  {
    title: "Region",
    values: region,
  },
  {
    title: "Tier",
    values: managedDiskTier,
  },
  {
    title: "Type",
    values: diskTypeData,
  },
  {
    title: "Capacity",
    values: storagecapacity,
  },
];

export const azureStorageAccount = [
  {
    title: "Region",
    values: region,
  },
  {
    title: "Type",
    values: storageAccountType,
  },
  {
    title: "Tier",
    values: saccountTier,
  },
  {
    title: "Capacity",
    values: storagecapacity,
  },
];

export const azureAppgtw = [
  {
    title: "Region",
    values: region,
  },
  {
    title: "Tier",
    values: appgtwTier,
  },
  {
    title: "Size",
    values: appgtwSize,
  },
  {
    title: "Data",
    values: appgtwDataProcessed,
  },
];

export const azurefrontDoor = [
  {
    title: "Tier",
    values: frontDoorTier,
  },
  {
    title: "Zone",
    values: azureFrontDoorZone,
  },
];

export const azureLoadBalancer = [
  {
    title: "Region",
    values: region
  },
  {
    title: "Tier",
    values: loadBalancerTier
  }
];