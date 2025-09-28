---
id: aro-pod-installation-guide
title: "Installation Guide"
sidebar_label: "Installation Guide"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

# ARO Pod Installation Tutorial

### Get Started with Your New ARO Pod!

This guide is for you if:
- You’ve received your new **ARO Pod** and want to set it up.
- You need help adding your new device to your Dashboard.

> To choose the best Edge Node for your needs, see <Link to="/node-operator-guide/become-operator/choose-node">this guide</Link>.

### Step 1: Plug In

Setting up an **ARO Pod** is simple and intuitive with their plug-and-play design.

**Unbox** your device, **power it on**, and **connect it to the internet using the provided cable**. 

Here is the **strongly suggested** connecting setup:
![01](/img/node-operator-guide/aro-pod-networking-1.png)

<p style={{color: 'red'}}>Please make sure you have followed the suggested setup. Alternative ways may fail.</p>

**Explanations on the suggested setup**
- **Optical Networking Terminal (ONT)** is the device at the end of a fiber optic network that converts the light signals from the fiber optic cable into signals that your devices can read, like routers and ARO Pod.
- Directly connect your ARO Pod to the ONT via Ethernet cable, as showed in the diagram above.  
- **DO NOT** connect your ARO Pod to the Wi-Fi router!
- If you have a Wi-Fi router, connect it to the ONT from another Ethernet port so you can keep using it. If your ONT device only has one Ethernet port, you may use an extra Layer 2 Switch to extend the Ethernet port. 

**Enable UPnP on your ONT**
<p style={{color: 'red'}}>It is important to enable your UPnP on the ONT.</p>

1. Connect to Your ONT: Connect a computer to the ONT using an Ethernet cable or connect to its Wi-Fi network.
2. Look for a sticker on the ONT itself or in your network documentation to find its default IP address.
3. Open a web browser and type the ONT's IP address into the address bar, then press Enter.
4. Once logged in, look for an advanced or network settings menu. The UPnP setting is typically in a section such as:
	- Advanced > Advanced Setup > UPnP
   - More Functions > Network Settings > UPnP
	- Network Settings > UPnP
	- Tools > Misc. > UPnP Settings
5. Select or check the option to turn UPnP on. Click the "Save" or "Apply" button to confirm your changes. For some devices, you may need to restart your ONT to apply the new settings. 


### Step 2: Add Device to Your Dashboard

Ensure you’ve created an **ARO Account** (ARO ID) and are logged in to the Dashboard.

> For account creation instructions, refer to <Link to="/node-operator-guide/become-operator/aro-dashboard">this guide</Link>.

![Dashboard Add](/img/node-operator-guide/aro-pod-add.png)

On the **Edge Node** page in your Dashboard, locate the **"Add an ARO Node"** button and click to initiate adding process.

> **Note**: Please do ensure **the device is online** (powered on and connected to the internet) during this process.

![Dashboard SN](/img/node-operator-guide/aro-pod-sn.png)

You’ll be prompted to enter the **Serial Number (SN)** of your device, which is printed on the device label. Enter it carefully to avoid errors.

If successful, the Dashboard will recognize your device, and you can complete the setup with a few clicks.

### Step 3: Ready to Go!

Once the device is added, a **device card** will appear on the **Edge Node** page. Your first ARO Edge Node is now ready to operate!

Click on the card to check running details of your node.  