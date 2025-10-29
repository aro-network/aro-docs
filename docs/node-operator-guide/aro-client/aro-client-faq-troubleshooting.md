---
id: aro-client-faq-troubleshooting
title: "FAQ & Troubleshooting"
sidebar_label: "FAQ & Troubleshooting"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

# FAQ & Troubleshooting

- **My Dashboard->Node Detail page shows error message: "This Agent version is not supported." or "Outdated Agent version detected."**   
  The issue arises from an outdated version of the Agent software in your ARO Client. Ensure your node is connected to the internet and allow time for automatic updates. If the problem continue to exist, ask official channels for help. 

- **My Dashboard->Node Detail page shows error message: "Restricted Region Detected!"**  
  This is because we have detected that your node is operating in a restricted region, according to certain legal restrictions. This may result in the cancellation of your rewards. For more details on restricted regions, please refer to our <Link to="/appendix/terms-of-use">Terms of Use</Link>.

- **My Dashboard->Node Detail page shows error message: "PCDN Client program not found."**  
  You need to install a PCDN Worker client to run PCDN services on your ARO Client. See <Link to="/node-operator-guide/aro-client/aro-client-pcdn-worker">PCDN Worker tutorials</Link> for more information.
  
- **My ARO Client goes offline when the Debian system turns to auto sleep.**  
  This could happen if you have not appropriately configure the power settings on your Debian system. Refer to the <Link to="/node-operator-guide/aro-client/aro-client-debian/#5-recommended-settings-on-debian-system">recommended Debian settings</Link> for tutorials. 

- **My Dashboard->Node Detail page shows error message: "Agent internal error".**  
  There is an internal error in the node agent. Please provide your node's Serial Number and ask for technical support from community channels (e.g. Official Discord).
  
- **My Dashboard->Node Detail page shows error message: "PCDN Worker launch failed."**  
  Try restart the ARO Client node and check if the error still exists. Ask for technical support if the error still exists.

- **My Dashboard->Node Detail page shows error message: "Management Port is not open."**  
  This is because your PCDN Worker requires Port `8080` (the "management port") to be open while running. Please refer to <Link to="/node-operator-guide/aro-client/aro-client-pcdn-worker#42-network-card-configurations">PCDN Worker Installation Tutorial -> Part 4.2</Link> for configuring network card on PCDN Worker client and enable Port `8080`.

- **My Dashboard->Node Detail page shows error message: "Invalid CPU config for PCDN Worker."**  
  This is an `Err_PCDNClientCPUConfigInvalid` error which indicates invalid CPU config (usually because of excessive CPU cores are allocated for your PCDN Worker client in the VM, if your bandwidth is less than 1 Gbps). In this case, allocate less than 7 CPU cores for your PCDN Worker. You can edit the CPU cores allocated to the PCDN Worker client in the <Link to="/node-operator-guide/aro-client/aro-client-pcdn-worker#31-configure-basic-information">VM basic info configurations -> edit vCPU</Link>. After configuration has been done, kindly wait for about 10 minutes and check if the error still exists.  

- **My Dashboard->Node Detail page shows error message: "PCDN Worker is not connected."**  
  This is an `Err_PCDNClientNetworkDisconnected` error which indicates that your PCDN Worker client is not connected (while your ARO Client or your host machine is connected to ARO Network). Usually this is because you have not correctly configured the network connection for your PCDN Worker client. Please strictly follow the <Link to="/node-operator-guide/aro-client/aro-client-pcdn-worker#32-configure-network-interface">tutorial - network configuration for PCDN Worker</Link> and check if the error still exists.   
  
- **My Dashboard->Node Detail page shows error message: "PCDN Worker is not activated. "**  
  This is an `Err_PCDNClientNotActivated` error which indicates that your PCDN Worker client is not activated for serving the edge cloud. If your ARO Client has been successfully activated (which means you can find your ARO Client node on the ARO Dashboard) but this error still exists, you can try reinstalling the PCDN Worker, or ask for technical support from official channels. 
  
- **My Dashboard->Node Detail page shows error message: "Disk configuration is invalid."**  
  Something is wrong with your disk configuration on the PCDN Worker-- normally caused by invalid setting of the System Disk and the Data Disks. You are required to separate the System Disk and the Data Disks when you are setting up the PCDN Worker. If you do not meet the requirements, please follow <Link to="/node-operator-guide/aro-client/aro-client-pcdn-worker">PCDN Installation Tutorial</Link> and update the disk configuration.
  
- **My Dashboard->Node Detail page shows error message: "Insufficient disk space for PCDN Worker."**  
  This error is caused by not allocating enough disk space to the PCDN Worker. If you are running a node with more than 1 Gbps bandwidth, you need to configurate at least 200 GB for the System Disk, and 1 TB for the Data Disk(s). If you do not meet the requirements, please follow <Link to="/node-operator-guide/aro-client/aro-client-pcdn-worker">PCDN Installation Tutorial</Link> and update the disk configuration.

- **What network ports should be open?**  
  To ensure proper connectivity and performance, please configure your firewall to allow the following inbound and outbound ports:

  ✅ **Inbound Ports**
   - **UDP:** All ports  
   - **TCP:** `80`, `443`, `9500–9700`

  🚀 **Outbound Ports**
   - **UDP:** `40001–40100`  
   - **TCP:** `443`, `30002`, `40001–40100`