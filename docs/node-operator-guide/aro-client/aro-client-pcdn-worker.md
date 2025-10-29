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

#### 2.3.1 Create a Storage Pool

![image-20250917180355060](/img/aro-client/image-20250917180355060.png)

![image-20250917180448264](/img/aro-client/image-20250917180448264.png)

When creating a storage pool, ensure you select the `/data` directory.

![image-20250917182311740](/img/aro-client/image-20250917182311740.png)

Activate the storage pool.

![image-20250917183705391](/img/aro-client/image-20250917183705391.png)

Select **aro-pcdn-pools** -> **Storage volumes**, then click **Create volume**.

![image-20250917183755248](/img/aro-client/image-20250917183755248.png)

#### 2.3.2 Create System Disk Volume 

For any bandwidth level, we recommend to allocate more than `200 GB` SSD for **System Disk**.

![image-20251024134036349](/img/aro-client/image-20251024134036349.png)

#### 2.3.3 Create Data Disk Volume

Please refer to the table below for recommended **Data Disk** allocation. 

| Bandwidth | CPU threads | RAM      | Data Disk    | Network Card |
| --------- | ----------- | -------- | ------------ | ------------ |
| 100Mbps   | ≥ 4         | ≥ 4 GB   | ≥ 200 GB SSD | 100Mbps      |
| 500Mbps   | ≥ 8         | ≥ 12 GB  | ≥ 500 GB SSD | 1 Gbps       |
| 1Gbps     | ≥ 16        | ≥ 16 GB  | ≥ 1 TB SSD   | 10 Gbps      |
| 5Gbps     | ≥ 48        | ≥ 64 GB  | ≥ 5 TB SSD   | 10 Gbps      |
| 10Gbps    | ≥ 96        | ≥ 128 GB | ≥ 10 TB SSD  | 10 Gbps      |
| 20Gbps    | ≥ 192       | ≥ 256 GB | ≥ 20 TB SSD  | 10 Gbps * 2  |

![image-20251024135437077](/img/aro-client/image-20251024135437077.png)

#### 2.3.4 View The Created Volumes

You can view the Volumes in the Storage Pool to make sure they are successfully created. 

![image-20251024135611670](/img/aro-client/image-20251024135611670.png)

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
- **Storage**: Select the **Storage Pool** created in the previous step.
- **Volume**: Select the **System Disk Volume** created in the previous step within the pool.
- **Memory**: Set to 80% of the available memory capacity.

![image-20251024140222737](/img/aro-client/image-20251024140222737.png)

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

### 3.3 Configure Data Disk

Configure **Data Disks**:

![image-20251024140546617](/img/aro-client/image-20251024140546617.png)

Set **Pool** and **Volume** that you have created:

![image-20251024140711092](/img/aro-client/image-20251024140711092.png)

View the disks configuration:

![image-20251024140923949](/img/aro-client/image-20251024140923949.png)

### 3.4 Complete Image Installation

![image-20250917193337924](/img/aro-client/image-20250917193337924.png)

The system enters the installation phase.

![image-20250917200007457](/img/aro-client/image-20250917200007457.png)

![image-20250917195431015](/img/aro-client/image-20250917195431015.png)

Select the System Disk (the smaller one).
![image-20251024141106496](/img/aro-client/image-20251024141106496.png)

After installation completes, enter the console and press Enter.

![image-20250917200710931](/img/aro-client/image-20250917200710931.png)

Make sure the you have one **Data Disk**.

![image-20251024141542903](/img/aro-client/image-20251024141542903.png)

Once the installation is complete, shut down the `PCDN Worker` client and eject the CDROM.

![image-20250918113209128](/img/aro-client/image-20250918113209128.png)

**After shutting down the PCDN Worker client, eject and delete the CDROM.**

![image-20250917221350581](/img/aro-client/image-20250917221350581.png)

![image-20250917221403236](/img/aro-client/image-20250917221403236.png)

![image-20250917221451817](/img/aro-client/image-20250917221451817.png)

**Start the PCDN Worker client.**

![image-20250917221515643](/img/aro-client/image-20250917221515643.png)

At this point, the PCDN Worker client installation is complete.

