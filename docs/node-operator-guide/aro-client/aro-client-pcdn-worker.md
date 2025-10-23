---
id: aro-client-pcdn-worker
title: "PCDN Worker"
sidebar_label: "PCDN Worker Installation Tutorial"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

# PCDN Worker Installation Tutorial

## About PCDN Worker 


A **Peer-to-Peer Content Delivery Network** (P2P CDN or PCDN) is a decentralized content delivery system that uses the collective bandwidth and storage of user devices to distribute content, unlike traditional CDNs that rely on centralized servers. 

By enabling peers to act as both clients and servers, PCDNs distribute the content delivery load across a network of users, which can improve efficiency and scalability, especially for bandwidth-intensive applications like live streaming and software updates. 

The `PCDN Worker` is an Edge Cloud Worker deployed on ARO Network's open application infrastructure for Edge Services (supports third-party application). The `PCDN Worker` enables ARO Client with high-performance PCDN Edge Service capabilities. 

Follow this tutorial to intall PCDN Worker software image on your **ARO Client**.  

> Note: Please complete `Debian` installation and ARO Client installation before you proceed with this tutorial. 


## 1. Pre-Installation Preparation

### 1.1 Prepare a Physical Machine with ARO Client Installed, Monitor, and Keyboard

You need a physical machine with ARO Client already installed (refer to the <Link to="/node-operator-guide/aro-client/aro-client-installation">ARO Client Installation Tutorial</Link>). Ensure the machine is connected to the internet via an Ethernet cable.

### 1.2 Obtain the LAN IP Address of ARO Client

Find your LAN IP Address of ARO Client. 

For example, get the LAN IP Address from the `Debian` system:

```bash
ip addr
```

## 2. PCDN Worker Installation

### 2.1 Log in to the Web Interface

On another machine within the same LAN, open a browser and navigate to `https://Your LAN IP:9090`, replacing `Your LAN IP` with your actual IP address.

![image-20250917173213136](/img/aro-client/image-20250917173213136.png)

Select “Advanced”.

![image-20250917173303946](/img/aro-client/image-20250917173303946.png)

Enter the login interface with the username: `client` and password: `123456`.

![image-20250917174631251](/img/aro-client/image-20250917174631251.png)

![image-20250917174829271](/img/aro-client/image-20250917174829271.png)

Enter the password to switch to administrative privileges.

![image-20250917174920444](/img/aro-client/image-20250917174920444.png)

### 2.2 Configure Bridge

Select **Networking** -> **Add bridge**.

![image-20250917175702521](/img/aro-client/image-20250917175702521.png)

Add a bridge. If there are multiple physical network interfaces, you can select multiple ones.

![image-20250917175621559](/img/aro-client/image-20250917175621559.png)

After adding, verify the bridge configuration.

![image-20250917175953676](/img/aro-client/image-20250917175953676.png)

### 2.3 Configure Storage Pool

![image-20250917180355060](/img/aro-client/image-20250917180355060.png)

![image-20250917180448264](/img/aro-client/image-20250917180448264.png)

When creating a storage pool, ensure you select the `/data` directory.

![image-20250917182311740](/img/aro-client/image-20250917182311740.png)

Activate the storage pool.

![image-20250917183705391](/img/aro-client/image-20250917183705391.png)

Select **aro-pcdn-pools** -> **Storage volumes**, then click **Create volume**.

![image-20250917183755248](/img/aro-client/image-20250917183755248.png)

For multi-disk systems, set the volume size to 80% of the `/data` directory capacity. For single-disk systems, set it to (disk capacity - 100GB) * 80%.

![image-20250917182540163](/img/aro-client/image-20250917182540163.png)

Verify the created volume.

![image-20250917184100355](/img/aro-client/image-20250917184100355.png)

### 2.4 Download the PCDN Worker Software Image

![image-20250917214313755](/img/aro-client/image-20250917214313755.png)

After downloading the file, execute the following commands in the terminal:

```bash
wget https://download.aro.network/files/images/aro-pcdn-client-latest.iso
sudo mv /home/client/aro-pcdn-client-latest.iso /var/lib/libvirt/images/
sudo chown libvirt-qemu:libvirt-qemu /var/lib/libvirt/images/aro-pcdn-client-latest.iso
```

## 3. PCDN Worker Configuration

### 3.1 Configure Basic Information

![image-20250917184137001](/img/aro-client/image-20250917184137001.png)

![image-20250917191230624](/img/aro-client/image-20250917191230624.png)

Fill in the virtual machine information with the following key details:

- **Name**: Must be `aro-pcdn-client-1`
- **Installation type**: Local Install media
- **Installation source**: `/var/lib/libvirt/images/aro-pcdn-client-latest.iso`.
- **Storage**: Select the pool created in the previous step.
- **Volume**: Select the volume created in the previous step within the pool.
- **Memory**: Set to 80% of the available memory capacity.

![image-20250917195828403](/img/aro-client/image-20250917195828403.png)

After filling in the details, select **Create and edit** to enter the detailed configuration page.

![image-20250917192702083](/img/aro-client/image-20250917192702083.png)

Enable **Autostart** and edit the **vCPUs**.

![image-20250917192852631](/img/aro-client/image-20250917192852631.png)

Set the vCPUs to 80% of the available CPU cores.

### 3.2 Configure Network Interface

Click on `edit` button for the `Network interfaces` settings:  
![image-20250917193042591](/img/aro-client/image-20250917193042591.png)
![image-20250917193141774](/img/aro-client/image-20250917193141774.png)

**Step 1.** Select `Bridge to LAN` in the `Interface Type` field

**Step 2.** Select the Bridge that you have set up in the Step #2.2

**Step 3.** Save and return

> Under `Bridge to LAN` type, you can either PPPoE dial-up on the ONT device, or PPPoE dial-up on the VM side (i.e. the PCDN Worker client). Please refer to the Part #4 on this page for the tutorial of PPPoE dialing on the VM side. 

### 3.3 Complete Image Installation

![image-20250917193337924](/img/aro-client/image-20250917193337924.png)

The system enters the installation phase.

![image-20250917200007457](/img/aro-client/image-20250917200007457.png)

![image-20250917195431015](/img/aro-client/image-20250917195431015.png)

Select the system disk.
> In the screenshot, the console prompts the user to select the system disk. Button on the left side: **Comfirm**. Buttom on the right side: **Cancel**.  
![image-20250917200118418](/img/aro-client/image-20250917200118418.png)

After installation completes, enter the console and press Enter.

![image-20250917200710931](/img/aro-client/image-20250917200710931.png)

![image-20250917200842449](/img/aro-client/image-20250917200842449.png)

Once the installation is complete, shut down the `PCDN Worker` client and eject the CDROM.

![image-20250918113209128](/img/aro-client/image-20250918113209128.png)

**After shutting down the PCDN Worker client, eject and delete the CDROM.**

![image-20250917221350581](/img/aro-client/image-20250917221350581.png)

![image-20250917221403236](/img/aro-client/image-20250917221403236.png)

![image-20250917221451817](/img/aro-client/image-20250917221451817.png)

**Start the PCDN Worker client.**

![image-20250917221515643](/img/aro-client/image-20250917221515643.png)

At this point, the PCDN Client installation is complete.

## 4. Appendix - Dialing on the PCDN Worker Client

### 4.1 Preparation

This tutorial is for PPPoE dialing on the PCDN Worker Client. 

In practice, you can choose to do PPPoE dialing either on the ONT device or on the PCDN Worker Client (more recommended). 

> Note: PPPoE Dialing on the physical machine (the host machine) is **NOT** supported. 

Before start, make sure you have:  

- installed **ARO Client** and **PCDN Worker client**. 
- 2 physical network cards running on the host machine. 

### 4.2 Network Card Configurations

Open the virtual machine management interface: `https://{your ARO Client's LAN IP}:9090` and log in with username `client` and password `123456`.

![image-20251016100329108](/img/aro-client/image-20251016100329108.png)

Enable Admin Mode.

![image-20251016100425859](/img/aro-client/image-20251016100425859.png)

![image-20251016100456321](/img/aro-client/image-20251016100456321.png)

Open Network --> Add bridge, add two Bridge network cards.

> `bridge0` - Represents the traffic network card, used for dialing, associated with the host's 10G traffic network card (assuming `enp8s0`)

![image-20251020100340373](/img/aro-client/image-20251020100340373.png)

![image-20251020132824351](/img/aro-client/image-20251020132824351.png)

> `bridge1` - Represents the management network card, used to connect to the internal network card for remote management, associated with the host's management network card (assuming enp9s0)

![image-20251020132857405](/img/aro-client/image-20251020132857405.png)

View Network Cards:

![image-20251020112838254](/img/aro-client/image-20251020112838254.png)

Shut down the virtual machine aro-pcdn-client-1, set the virtual machine network cards:

![image-20251020100855208](/img/aro-client/image-20251020100855208.png)

![image-20251020120938667](/img/aro-client/image-20251020120938667.png)

![image-20251020121113756](/img/aro-client/image-20251020121113756.png)

`bridge0` network card settings (traffic network card):

![image-20251020101142277](/img/aro-client/image-20251020101142277.png)

`bridge1` network card settings (management network card):

![image-20251020113043746](/img/aro-client/image-20251020113043746.png)

After settings are complete, view network cards:

![image-20251020113156405](/img/aro-client/image-20251020113156405.png)

After successful setup, start `aro-pcdn-client`, activate Port `8080` of `aro-pcdn-client-1`:

![image-20251016100832510](/img/aro-client/image-20251016100832510.png)

![image-20251016101034315](/img/aro-client/image-20251016101034315.png)

### 4.3 Dialing Configurations

View the **IP address and network card name** of `aro-pcdn-client-1` (used in later dialing settings)

![image-20251016101444781](/img/aro-client/image-20251016101444781.png)

![image-20251020113308281](/img/aro-client/image-20251020113308281.png)

Here, taking the above figure as an example, the network card names and IP addresses are as follows:

| Network Card Name | IP          | Description                |
| ----------------- | ----------- | -------------------------- |
| eth0              | 192.168.5.6 | Traffic network card, dialing network card |
| eth1              | 192.168.5.9 | Management network card    |

Management network card IP: 192.168.5.9, access http://192.168.5.9:8080 in the browser to open the `aro-pcdn-client-1` management interface:

![image-20251016102850890](/img/aro-client/image-20251016102850890.png)

> The PCDN Worker is provided by third-party edge service and the interface may not support English. Please follow strictly this tutorial to fill out the required fields.  

Enter the network card name (The network card name corresponds to the traffic network card eth0 set in bridge0 in the virtual machine), dialing account and password. Here, take testuser and testpass as examples, replace with actual dialing account and password. 

If there are multiple dialing accounts, you can add multiple accounts, and the network card names corresponding to `bridge0`.

![image-20251016104506285](/img/aro-client/image-20251016104506285.png)

**Special Notes**:

- Account/Password, VLAN Port, Network Card Name are **required**, Multi-dial times, Dialing MAC address are **optional**;

- If there is no VLAN port, fill `0` for VLAN port; The VLAN here refer to the VLAN to which the switch port planning belongs, not the VLAN of the corresponding ONT device**</span>;

- Multi-dial times can only be filled with numbers (default is `1`), If the region supports single-line multi-dial, fill in the corresponding multi-dial times, such as `3`;

- It is recommended to limit the lines per device within `60` (maximum not exceeding `100`). Too many lines may lead to load or line failure issues, please allocate reasonably;

- Leave the dialing MAC address blank, fill it only if required by specific dialing environment, format being: `00:11:22:33:44:55`.

After filling all the required fields, view network configuration:

![image-20251020104849910](/img/aro-client/image-20251020104849910.png)

View network status, if the status is showing “Connected”, the dialing is successful.

![image-20251020103232347](/img/aro-client/image-20251020103232347.png)