---
id: software-setup
title: ARO Client Tutorial
---
import Link from '@docusaurus/Link'; 

# ARO Client Installation and Initialization Tutorial

This tutorial guides you through the process of installing and initializing the [**ARO Client software image**](https://download.aro.network/images/aro-client-latest.iso) in a virtual machine environment. ARO Client is a software image designed for X86 architectures, and this tutorial focuses on a Linux environment.

## Part 1: Preparing the Virtual Machine Environment

To run the ARO Client image, you need a virtualization environment. Below are the recommended preparation steps:

1. **Choose a Virtualization Platform**  
   Select one of the following virtualization platforms (or other Linux-compatible solutions):
   - **Proxmox VE**: An open-source virtualization management platform suitable for enterprise and individual users.
   - **VMware Workstation/Player**: Ideal for local testing and development.
   - **VirtualBox**: A free and user-friendly virtualization tool.

2. **Install the Virtualization Platform**  
   Follow the official documentation for your chosen platform to complete the installation. For example:
   - Proxmox VE: Download the ISO image from the [Proxmox website](https://www.proxmox.com/en/proxmox-ve) and install.
   - VirtualBox: Download and install from the [VirtualBox website](https://www.virtualbox.org/).
   Ensure your hardware supports virtualization (VT-x/AMD-V enabled).

3. **Verify the Environment**  
   - Ensure sufficient disk space (at least 50GB recommended).
   - Verify network connectivity to allow the virtual machine to access external networks (required for initialization).

**Note**: This tutorial assumes you are familiar with installing and configuring your chosen virtualization platform. Refer to the platform’s official documentation for detailed guidance if needed.

## Part 2: Selecting the Image and Allocating Resources

After preparing the virtual machine environment, you need to select the ARO Client image and allocate appropriate resources.

### Step 1: Obtain and Select the ARO Client Image
1. **Download the Image**  
   Download the latest [ARO Client image](https://download.aro.network/images/aro-client-latest.iso) (in `.iso` format).
2. **Select the Image**  
   - **Proxmox VE**: Log in to the Proxmox web interface, navigate to storage (e.g., `local`), and upload the `.iso` file.
   - **VirtualBox**: Create a new virtual machine, select “Use an existing virtual hard disk file,” and point to the ARO Client `.iso` file.
   - **VMware Workstation/Player**: Create a new virtual machine, select “Use ISO image file,” and specify the ARO Client `.iso` file.
3. **Verify the Image**  
   Ensure the image file is not corrupted by verifying its checksum (e.g., MD5 or SHA256).

### Step 2: Create the Virtual Machine and Allocate Resources
1. **Create the Virtual Machine**  
   In your virtualization platform, create a new virtual machine and select the ARO Client `.iso` file as the boot medium.
2. **Resource Allocation Recommendations**  
   To ensure smooth operation of ARO Client, allocate the resources according to [this recommendation](/docs/edge-node/device-specs.md).
3. **Save Configuration**  
   Confirm the virtual machine settings and save them before starting.

**Note**: Adjust resource allocation based on your hardware capabilities and ARO Client’s requirements. For complex tasks, consider increasing CPU and memory.

## Part 3: Running the Image and Performing Initial Edge Node Setup

This section describes how to run the ARO Client image and configure the Edge Node for initial use.

1. **Start the Software Image**  
   After setting up the virtual machine, launch it to start the **ARO Client** software image.  
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
   ![Add New Node](/img/user-guides/cmd_inputsn.png)  
   Open the **ARO Dashboard** (accessible via the ARO project website or designated interface). Navigate to **Edge Nodes** > **Add New Node** > **Software Node**, and enter the 19-digit Virtual Serial Number.  
   ![Device Recognition](/img/user-guides/cmd_finddevice.png)  
   The dashboard will recognize the software image instance and display its information. Confirm to continue.  
   > **Important**: Ensure the software image is online during activation. If it is offline, the activation or node addition process may fail.  

   ![Region Selection](/img/user-guides/cmd_region.png)  
   Select the appropriate region and assign a name to your new Edge Node.

4. **Verify Running Status**  
   ![Activation Complete](/img/user-guides/cmd_activate.png)  
   Congratulations! You have successfully set up your new **Edge Node**. The CMD console will return to the main menu, displaying real-time network and activation status. If both statuses appear in green, your Edge Node is running successfully.

