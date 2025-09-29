---
id: network-optimization
title: "Network Optimization"
sidebar_label: "Edge Node Network Optimization"
---
import useBaseUrl from '@docusaurus/useBaseUrl';

# Network Optimization for Your Edge Nodes

## General Introduction

Optimizing the network for Edge Nodes (`ARO Pod`, `ARO Link`, and `ARO Client`) can greatly enhance performance and rewards. This tutorial explains the fundamental principles and concepts of network optimization, with suggested approaches of constructing your network connection for your Edge Nodes. 

## Basic Principles of Network Optimization for Edge Nodes

### What is NAT?

Network optimization for Edge Nodes aims to improve how data travels between the node and the internet. A core principle is minimizing obstacles in the network path, often by reducing the number of **`Network Address Translation(NAT)`** layers. Fewer layers typically lead to better connectivity and performance, as each layer can introduce delays or restrictions in data flow.

The key principle here is achieving a **NAT type that is friendlier to Edge Services**. NAT types determine how easily external connections can reach your node. Less restrictive types enable smoother communication, which is advantageous for tasks like data sharing or cloud operations. By adjusting your network setup, you can influence the NAT type to be more open and efficient while maintaining necessary security.

### How To Achieve Better NAT Types

A simple principle is: **minimize the number of NAT layers between the device and the public network** to make it easier for the public network to access your device.

1. The device directly obtaining a public IP is optimal;
2. The device behind a single NAT device (e.g., an optical network terminal / ONT) is suboptimal;
3. Other scenarios, involving two or more NAT layers, are less ideal, as node performance will be significantly compromised or edge services may completely fail to operate.

## Network Optimization Exercises

### Two Suggested Modes

#### Mode 1 (optimal)
![mode 1](/img/node-operator-guide/optimize-mode1)

- **PPPoE on ARO Device**
	- `PPPoE`, or `Point-to-Point Protocol over Ethernet`, is a networking protocol that provides authentication and a secure, managed connection to the internet. On a router (or an ONT), the PPPoE setting is the login information provided by your ISP, including a username and password, which the router uses to authenticate and get a public IP address. 
	- PPPoE allocates Public IP directly to the ARO Device, hence reducing NAT layers and benefiting ARO Device's performance. 
- **ONT set to `bridge mode`**
	- `bridge mode` is a network setting that disables an ONT or router's routing functions, such as NAT and DHCP. This turns the device into a simple pass-through "bridge", which reduces one NAT layer.

The **Mode 1** is optimal for Edge Services because the ARO Node is allocated with a `Public IP` and there is no extra NAT layer introduced. 

#### Mode 2 (suboptimal)
![mode 2](/img/node-operator-guide/optimize-mode2)

- **PPPoE on the ONT**
- **Set UPnP or DMZ on the ONT**
	- The `Universal Plug and Play` (`UPnP`) is a protocol that allows devices on your local network, such as gaming consoles or smart TVs, to automatically set up port forwarding rules without manual intervention. This can improve performance for online activities that require direct connections.
	- A `Demilitarized Zone` (`DMZ`) host is a single device on your network that is completely exposed to the public internet, bypassing the router's firewall entirely. This is an extreme measure that enhances your exposure to the Internet while introduces some risks.
	- As PPPoE on the ONT device introduce an extra NAT layer, enabling `UPnP` or `DMZ` is favored to improve the connectivity for the connected devices in the LAN. 
	- Warning: enable either `UPnP` or `DMZ`. **DO NOT enable both of them**.   

The **Mode 2** is suboptimal for Edge Services because only one more NAT layer is introduced and you can still connect other devices like a Wi-Fi router to the ONT. 
 
## Appendix: A Collection of Tutorials That Might Be Helpful

### Tutorial - How to Set Bridge Mode on an ONT / Router

#### Requirements
- Admin access to ONT/router (username/password, often "admin/admin").
- Computer connected via Ethernet or Wi-Fi.
- Your own router with WAN port.
- ISP login details (e.g., PPPoE credentials) if required.

#### Steps

1. **Access Web Interface**
   - Connect to ONT/router via Ethernet.
   - Open browser, enter device IP (e.g., `192.168.1.1`, `192.168.0.1`, or `192.168.100.1`).
   - Log in with admin credentials (check with ISP if unknown).

2. **Enable Bridge Mode**
   - Go to **WAN**, **Internet**, or **Advanced** settings.
   - Find **Bridge Mode**, **Passthrough**, or **Modem Mode**.
   - Disable DHCP and Wi-Fi. Save changes (device may reboot).

3. **Connect Your Router**
   - Connect ONT’s LAN port to your router’s WAN port.
   - Configure router WAN to **DHCP** or **PPPoE** (use ISP credentials if needed).
   - Clone ONT’s MAC address if required. Restart router.

4. **Test Connection**
   - Check public IP at `whatismyipaddress.com`.
   - Run a speed test.
   - **Issues?** Reboot devices, verify WAN settings, or contact ISP.

#### Warnings
- Bridge mode disables ONT’s Wi-Fi/routing—use your router.
- May void ISP support.
- Revert via ONT’s interface if needed.

### Tutorial - How to Set UPnP on an ONT / Router

#### Requirements
- Admin access to ONT/router (username/password, often "admin/admin").
- Computer connected via Ethernet (preferred) or Wi-Fi.
- Ensure your ONT/router supports UPnP (check manual or ISP).

#### Steps

1. **Access Web Interface**
   - Connect to ONT/router via Ethernet.
   - Open a browser and enter the device IP (e.g., `192.168.1.1`, `192.168.0.1`, or `192.168.100.1`).
   - Log in with admin credentials (contact ISP if unknown).

2. **Enable UPnP**
   - Navigate to **Network**, **Advanced**, or **Security** settings.
   - Look for **UPnP** or **Universal Plug and Play**.
   - Enable the UPnP option. Save changes (device may reboot).

3. **Verify UPnP**
   - Connect a UPnP-compatible device (e.g., gaming console).
   - Check if the device auto-configures ports (e.g., test NAT type in games).
   - On the router’s interface, view the **UPnP Port Mapping** table to confirm active mappings.

### Tutorial - How to Set DMZ on an ONT / Router

#### Requirements
- Admin access to ONT/router (username/password, often “admin/admin”).
- Computer connected via Ethernet (preferred) or Wi-Fi.
- IP address of the device to place in the DMZ (find in device settings or router’s client list).
- Ensure your ONT/router supports DMZ (check manual or ISP).

#### Steps

1. **Access Web Interface**
   - Connect to ONT/router via Ethernet.
   - Open a browser and enter the device IP (e.g., `192.168.1.1`, `192.168.0.1`, or `192.168.100.1`).
   - Log in with admin credentials (contact ISP if unknown).

2. **Enable DMZ**
   - Navigate to **Firewall**, **Security**, or **Advanced** settings.
   - Find **DMZ** or **DMZ Host**.
   - Enter the IP address of the device to place in the DMZ.
   - Enable DMZ and save changes (device may reboot).




