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

## 2. Install PCDN Worker

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

##### 2.5.2.1 Choose Your Network Interface Type

Click on `edit` button for the `Network interfaces` settings:  
![image-20250917193042591](/img/aro-client/image-20250917193042591.png)
![d3f985e3411b96abafb88306b200595b](/img/aro-client/d3f985e3411b96abafb88306b200595b.png)

Available `Interface Type` options:

-  **`Bridge to LAN`**:
	- Choose this type if you have **PPPoE dial-up on the ONT** and **physical machine directly connected to the ONT**.
	- Follow 2.5.2.2 steps for further configurations (and skip 2.5.2.3).
-  **`Virtual Network`**:
	- Choose this type if you have **PPPoE dial-up on the physical machine (that runs ARO Client)** and **ONT set to Bridge Mode**.
	- Follow 2.5.2.3 steps for further configurations (and skip 2.5.2.2).

##### 2.5.2.2 `Bridge to LAN` Configurations

Follow steps below if you fit into `Bridge to LAN` type: 

**1 Select `Bridge to LAN` in the `Interface Type` field**

**2 Select the Bridge that you have set up in the Step #2.2**

**3 Save and return**

##### 2.5.2.3 `Virtual Network` Configurations

Follow steps below if you fit into `Virtual Network` type: 

**1 Select `Virtual Network` in the `Interface Type` field**  

**2 Select`default` in the `source` field**  

**3 Save and return**  

**4 Configure `iptables.rules` on the host machine**  
(Follow steps **4.1~4.3** below)

**4.1 Back up `iptables.rules`**
```
iptables-save > ~/iptables.rules
```
In case something is wrong, you can restore the `iptables.rules` with the following commands. (Skip this process if you have successfully set up the `iptable.rules`)

```
 iptables -F
 iptables -t nat -F
 iptables -t mangle -F
 iptables -X
 iptables -t nat -X
 iptables -t mangle -X
 
 iptables-restore < ~/iptables.rules
```

**4.2 Set `iptables.rules`:**

+ Replace the VM_IP with the actual local IP of your PCDN Worker client on VM.
+ Confirm that the network card for dial-up is `ppp0`. If not, change to the name of the actual one. 

Execute:

```
#!/bin/bash

set -e

VM_IP="192.168.122.164"
WAN_IF="ppp0"
LAN_IF="virbr0"

sysctl -w net.ipv4.ip_forward=1

iptables -t nat -F
iptables -F FORWARD

iptables -t nat -A POSTROUTING -s $VM_IP -o $WAN_IF -j MASQUERADE

# 4. TCP DNAT：80,443,9500-9700
iptables -t nat -A PREROUTING -i $WAN_IF -p tcp -m multiport --dports 80,443,9500:9700 -j DNAT --to-destination $VM_IP

iptables -t nat -A PREROUTING -i $WAN_IF -p udp -j DNAT --to-destination $VM_IP

iptables -I FORWARD 1 -i $WAN_IF -o $LAN_IF -d $VM_IP -p tcp -m multiport --dports 80,443,9500:9700 -j ACCEPT
iptables -I FORWARD 1 -i $WAN_IF -o $LAN_IF -d $VM_IP -p udp -j ACCEPT

iptables -I FORWARD 1 -o $WAN_IF -i $LAN_IF -s $VM_IP -p tcp -m multiport --sports 80,443,9500:9700 -j ACCEPT
iptables -I FORWARD 1 -o $WAN_IF -i $LAN_IF -s $VM_IP -p udp -j ACCEPT

```

**4.3 Test if the settings come into effect:**

Use another device and try visiting links below with a browser (Replace Your IP with the actual IP of your PCDN Worker client after successful dial-up):

+ `http://Your IP:40001`
+ `https://Your IP:9090`


#### 2.5.3 Install PCDN Worker

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

