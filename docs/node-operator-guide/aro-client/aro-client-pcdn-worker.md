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

The `PCDN Worker` is a Edge Cloud Worker on ARO Network that enables ARO Client with high-performance PCDN edge service capabilities. 

Follow this tutorial to intall PCDN Worker software image on your **ARO Client**.  

> Note: Please complete `Debian` installation and ARO Client installation before you proceed with this tutorial. 


## 1. Pre-Installation Preparation

### 1.1 Prepare a Physical Machine with ARO Client Installed, Monitor, and Keyboard

You need a physical machine with ARO Client already installed (refer to the <Link to="/node-operator-guide/aro-client/aro-client-installation">ARO Client Installation Tutorial</Link>). Ensure the machine is connected to the internet via an Ethernet cable.

### 1.2 Obtain the LAN IP Address of ARO Client

#### 1.2.1 Obtain via Router

Log in to the router's admin interface and check the LAN IP address of the device.

#### 1.2.2 Obtain via ARO Console

After the device boots normally, select option 1 to list all network interfaces and check the IP address of the network interface in the “UP” state.

![image-20250917171602699](/img/aro-client/image-20250917171602699.png)

![image-20250917171751224](/img/aro-client/image-20250917171751224.png)

For this example, we use 192.168.5.2 as the IP address.

## 2. Install PCDN Worker

### 2.1 Log in to the Web Interface

On another machine within the same LAN, open a browser and navigate to https://192.168.5.2:9090, replacing the IP with your actual IP address.

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

### 2.5 Create a Virtual Machine

#### 2.5.1 Configure Basic Information

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

#### 2.5.2 Configure Network for the PCDN Worker Client

![image-20250917193042591](/img/aro-client/image-20250917193042591.png)

- **Interface type**: Bridge to LAN.
- **Source**: The `bridge0` network interface created earlier.

![image-20250917193141774](/img/aro-client/image-20250917193141774.png)

Verify the updated interface type.

![image-20250917193411375](/img/aro-client/image-20250917193411375.png)

#### 2.5.3 Install PCDN Worker

![image-20250917193337924](/img/aro-client/image-20250917193337924.png)

The system enters the installation phase.

![image-20250917200007457](/img/aro-client/image-20250917200007457.png)

![image-20250917195431015](/img/aro-client/image-20250917195431015.png)

Select the system disk.

![image-20250917200118418](/img/aro-client/image-20250917200118418.png)

After installation completes, enter the console and press Enter.

![image-20250917200710931](/img/aro-client/image-20250917200710931.png)

![image-20250917200842449](/img/aro-client/image-20250917200842449.png)

Once the installation is complete, shut down the `PCDN Worker` client and eject the CDROM.

![image-20250918113209128](/img/aro-client/image-20250917220356611.png)

**After shutting down the PCDN Worker client, eject and delete the CDROM.**

![image-20250917221350581](/img/aro-client/image-20250917221350581.png)

![image-20250917221403236](/img/aro-client/image-20250917221403236.png)

![image-20250917221451817](/img/aro-client/image-20250917221451817.png)

**Start the PCDN Worker client.**

![image-20250917221515643](/img/aro-client/image-20250917221515643.png)

At this point, the PCDN Client installation is complete.

