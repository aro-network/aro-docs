---
id: aro-client-installation
title: "Installation Tutorial"
sidebar_label: "Installation & Initialization Tutorial"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

# Installation & Initialization Tutorial for ARO Client

## Part 2: ARO Client Node Initialization & Configuration

This section describes how to register, configure and complete all initial setup needed for a functioning status for your ARO Client node. 

1. **Start the Software Image**  
   After setting up the machine, launch it to start the **ARO Client** software image.  
   ![Loading Screen](/img/node-operator-guide/cmd_loading.png)  
   The loading process will begin automatically and may take a few minutes. Do not interrupt this process.

2. **Configure the Network**  
   Once the loading process is complete, a network configuration page will appear.  
   ![Network Configuration](/img/node-operator-guide/cmd_networkconfig.png)  
   Select option **1** (the default option).  
   ![IP Configuration](/img/node-operator-guide/cmd_ipconfig.png)  
   Configure the IP settings:  
   - Select **1** for DHCP to automatically assign an IP address.  
   - Select **2** for a static IP if you need to manually configure the network.  
  
   After successful network and IP configuration, the system will perform an automatic ping test. If the test succeeds, you will proceed to the Edge Node activation process. 

3. **Initialize the Activation Process**  
   ![Terms of Service](/img/node-operator-guide/cmd_terms.png)  
   Review the **Terms of Service** and **Privacy Policy**. Select **Agree and Continue** to proceed.  
   ![Virtual Serial Number](/img/node-operator-guide/cmd_SN.png)  
   The 19-digit **Virtual Serial Number** for this Edge Node will appear on the screen. Record this number, as it is critical for activation.  
   ![Add New Node](/img/node-operator-guide/cmd_adding.png)  
   ![Add New Node_SN](/img/node-operator-guide/cmd_inputsn.png)  
   Open the [**ARO Dashboard**](https://dashboard.aro.network). Navigate to **ARO Nodes** > **Add an ARO Client**, follow steps and enter the 19-digit Virtual Serial Number.  
   ![Device Recognition](/img/node-operator-guide/cmd_finddevice.png)  
   The dashboard will recognize the software image instance and display its information. Confirm to continue.  
   > **Important**: Ensure the software image is online during activation. If it is offline, the activation or node addition process may fail.  

   ![Region Selection](/img/node-operator-guide/cmd_region.png)  
   Select the appropriate region and assign a name to your new node.

4. **Verify Running Status**  
   ![Activation Complete](/img/node-operator-guide/cmd_activate.png)  
   Congratulations! You have successfully set up your new **ARO Client**. The CMD console will return to the main menu, displaying real-time network status and activation status. If activation status shows 'Activated' together with your bound account in green, and network status shows 'Connected', then your ARO Client is running successfully.
