---
id: software-setup
title: ARO Client
---
import Link from '@docusaurus/Link'; 

# ARO Client Installation and Initialization Tutorial

This tutorial guides you through the process of installing and initializing the **ARO Client Software Image** on the Bare-metal machine.

Before preparing the machine, review the recommended system requirements for running the ARO Client image on [**this page**](/edge-node/device-specs#recommended-requirements-for-software-clients-aro-client).

Please follow the tutorials below (Part 1, 2, & 3) to get your ARO Client ready for the coming Testnet.

<p style={{color: 'red'}}>**Special Note for Previewnet Node Operators:**</p>

<p style={{color: 'red'}}>The VM-based installation method is deprecated and no longer supported in the coming Testnet due to performance limitations, particularly for edge services like PCDN.</p>

<p style={{color: 'red'}}>If you are currently using a VM-based installation of the ARO Client (e.g., from the Previewnet phase when VM installations were supported), we strongly recommend migrating to the bare-metal installation method (See tutorials below) as soon as possible.</p>


## Part 1: Install ARO Client Software Image On Bare-metal Machine

### Download the Latest ARO Client Software Image

Download Link: https://download.aro.network/files/images/aro-client-host-1.0.0.iso

`MD5` checksum: `0f17a7d0b4321f8453a2b98a5ec9849d`

### Install the ARO Client Software Image On Bare-metal Machine

Refer to [this tutorial document](https://download.aro.network/files/docs/ARO_Client_Bare-metal_Installation_Guide.pdf) for bare-metal installation.

When you are ready on the ARO Client Software Image installation, continue to the Part 2.

## Part 2: ARO Client Node Initialization & Configuration

This section describes how to register, configure and complete all initial setup needed for a functioning status for your ARO Client node. 

1. **Start the Software Image**  
   After setting up the machine, launch it to start the **ARO Client** software image.  
   ![Loading Screen](/img/user-guides/cmd_loading.png)  
   The loading process will begin automatically and may take a few minutes. Do not interrupt this process.

2. **Configure the Network**  
   Once the loading process is complete, a network configuration page will appear.  
   ![Network Configuration](/img/user-guides/cmd_networkconfig.png)  
   Select option **1** (the default option).  
   ![IP Configuration](/img/user-guides/cmd_ipconfig.png)  
   Configure the IP settings:  
   - Select **1** for DHCP to automatically assign an IP address.  
   - Select **2** for a static IP if you need to manually configure the network.  
  
   After successful network and IP configuration, the system will perform an automatic ping test. If the test succeeds, you will proceed to the Edge Node activation process. 

3. **Initialize the Activation Process**  
   ![Terms of Service](/img/user-guides/cmd_terms.png)  
   Review the **Terms of Service** and **Privacy Policy**. Select **Agree and Continue** to proceed.  
   ![Virtual Serial Number](/img/user-guides/cmd_SN.png)  
   The 19-digit **Virtual Serial Number** for this Edge Node will appear on the screen. Record this number, as it is critical for activation.  
   ![Add New Node](/img/user-guides/cmd_adding.png)  
   ![Add New Node_SN](/img/user-guides/cmd_inputsn.png)  
   Open the [**ARO Dashboard**](https://dashboard.aro.network). Navigate to **ARO Nodes** > **Add an ARO Client**, follow steps and enter the 19-digit Virtual Serial Number.  
   ![Device Recognition](/img/user-guides/cmd_finddevice.png)  
   The dashboard will recognize the software image instance and display its information. Confirm to continue.  
   > **Important**: Ensure the software image is online during activation. If it is offline, the activation or node addition process may fail.  

   ![Region Selection](/img/user-guides/cmd_region.png)  
   Select the appropriate region and assign a name to your new node.

4. **Verify Running Status**  
   ![Activation Complete](/img/user-guides/cmd_activate.png)  
   Congratulations! You have successfully set up your new **ARO Client**. The CMD console will return to the main menu, displaying real-time network status and activation status. If activation status shows 'Activated' together with your bound account in green, and network status shows 'Connected', then your ARO Client is running successfully.

## FAQ

- **What network ports should be open?**  
  To ensure proper connectivity and performance, please configure your firewall to allow the following inbound and outbound ports:

  ✅ **Inbound Ports**
   - **UDP:** All ports  
   - **TCP:** `80`, `443`, `9500–9700`

  🚀 **Outbound Ports**
   - **UDP:** `40001–40100`  
   - **TCP:** `443`, `30002`, `40001–40100`

- **My CMD Console and Dashboard Node Detail page show different status.**  
  This could happen in some case due to the latency of status update in the CMD Console. If this happens, please refer to the Dashboard for an update-to-date status, and refresh the CMD Console manually (Press `Enter` on the main menu and refresh the page).
