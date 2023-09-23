//Resource Selection Dropdown Lists
export const ComputeServices = [
  "Elastic Compute2",
  "Lambda",
  "Elastic Beanstalk",
];

export const DataServices = ["RDS"];

export const NetworkServices = [
  "VPC",
  "Load Balancer",
  "API Gateway",
  "Cloud Front"
];

export const StorageServices = [
  "S3",
  "EBS Volume"
];

// Common Configuration for resources Dropdown List
const awsregion = ["Ohio"];

//Ec2 Configuration Dropdown List 
const awsosTypeData = [
  "Windows",
  "Linux"
];

const awsvmconfiguration = [
  "t2.micro: 1Core 1GB RAM",
  "t3a.medium: 2Core 4GB RAM",
  "m5a.large: 2Core 8GB RAM",
  "m7a.medium: 1Core 4GB RAM",
  "m6a.large: 2Core 8GB RAM",
  "r4.large: 2Core 15.25GB RAM",
  "t3.xlarge: 4Core 16GB RAM",
  "m5a.xlarge: 4Core 16GB RAM",
  "r5a.xlarge: 4Core 32GB RAM",
];

const awsDiskType = [
  "General Purpose SSD (gp2)",
  "Provisioned IOPS SSD(io2)",
  "Throughput Optimized HDD (st1)",
];

//API Gateway DropDown List
const awsgtwType = [
  "HTTP",
  "Rest APIs",
  "WebSocket APIs"
];

const awsGtwRequests = [
  "First 300 Million",
  "300+ Million",
  "First 333 Million",
  "Next 667 Million",
  "Next 19 Billion",
  "Over 20 Billion",
  "First 1 Billion",
  "Over 1 Billion"
];

//CloudFront dropdown List
const cloudFrontRegion = [
  "N Virginia",
  "India"
];

//LB dropdown list
const awsLBTier = [
  "Application LB",
  "Network LB",
  "Gateway"
];

//RDS Dropdown List
const awsRDSType = [
  "Single",
  "Flexible"
];

//S3 Configuration Dropdown List
const awsS3Type = [
  "S3",
];

const awsS3Tier = [
  "Standard Tier",
];

const awsS3Capacity = [
  "5GB",
];

//Elastic Block Store Configuration Dropdown List
const awsEbsType = [
  "EBS",
];

const awsEbsCapacity = [
  "16GB",
  "32GB",
  "128GB"
];

const awsRDSTier = [
  "General Purpose",
  "Storage Optimized"
];

const awsRDSCores = [
  "2",
  "4",
  "8",
  "16"
];

//Selected Resource Dropdown Menu Contents
export const awsvirtualMachine = [
  {
    title: "Region",
    values: awsregion,
  },
  {
    title: "Configuration",
    values: awsvmconfiguration,
  },
  {
    title: "OS",
    values: awsosTypeData,
  },
  {
    title: "Disk Type",
    values: awsDiskType,
  },
];

export const awsS3 = [
  {
    title: "Region",
    values: awsregion,
  },
  {
    title: "Tier",
    values: awsS3Tier,
  },
  {
    title: "Type",
    values: awsS3Type,
  },
  {
    title: "Capacity",
    values: awsS3Capacity,
  },
];

export const awsEbs = [
  {
    title: "Region",
    values: awsregion,
  },
  {
    title: "Tier",
    values: awsDiskType,
  },
  {
    title: "Type",
    values: awsEbsType,
  },
  {
    title: "Capacity",
    values: awsEbsCapacity,
  },
];

export const elasticBeanStalk = [
  {
    title: "Region",
    values: awsregion,
  },
  {
    title: "Configuration",
    values: awsvmconfiguration,
  },
  {
    title: "OS",
    values: awsosTypeData,
  },
  {
    title: "Disk Type",
    values: awsDiskType,
  },
];

export const azureApigtw = [
  {
    title: "Region",
    values: awsregion
  },
  {
    title: "Type",
    values: awsgtwType
  },
  {
    title: "Data",
    values: awsGtwRequests
  }
];

export const cloudFront = [
  {
    title: "Region",
    values: cloudFrontRegion,
  },
];

export const awsLB = [
  {
    title: "Region",
    values: awsregion
  },
  {
    title: "Tier",
    values: awsLBTier
  }
];

export const awsRds = [
  {
    title: "Region",
    values: awsregion
  },
  {
    title: "Type",
    values: awsRDSType
  },
  {
    title: "Tier",
    values: awsRDSTier
  },
  {
    title: "Cores",
    values: awsRDSCores
  }
];