---
id: aro-client-installation
title: "Installation Tutorial"
sidebar_label: "Installation & Initialization Tutorial"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

# Installation & Initialization Tutorial for ARO Client

## Part 1: ARO Client Deb Package Installation

### 1. Installation Preparation

- Install using the root user.
- `Debian 11` or higher version of the Debian operating system.
- A physical machine with `Debian` installed, not a virtual machine.

### 2. Install the Deb Package

Log in to the terminal, switch to the root user, and execute the following commands (replace the download URL and package name with the latest ones in the sample code below):

```bash
apt update

wget -O /tmp/aro-client-1.0.0.deb https://download.aro.network/files/deb/aro-client-1.0.0.deb

apt install -f /tmp/aro-client-1.0.0.deb
```

![Confirm Installation](/img/aro-client/image-20250926171314772.png)

Enter `Y` to continue the installation.

![Installation Progress](/img/aro-client/image-20250926180219786.png)

### 3. Installation Error Scenarios

#### 3.1 Non-Root User Installation

Installing with a non-root user will result in an error and exit the installation.

![Non-Root Error](/img/aro-client/image-20250926165247978.png)

#### 3.2 Virtual Machine Installation

Installing the `deb` package on a virtual machine will result in an error and exit the installation.

![Virtual Machine Error](/img/aro-client/image-20250926174642843.png)

#### 3.3 Installation on Debian Versions Below 11

![Debian Version Error](/img/aro-client/image-20250926175229993.png)

### 4. Uninstall the Package

Execute the following command:

```bash
dpkg -P aro
```


## Part 2: ARO Client Node Initialization & Configuration

This section describes how to register, configure and complete all initial setup needed for a functioning status for your ARO Client node. 

>Make sure you have already completed the Part 1 processes.

1. **Get Your ARO Client Serial Number in the Web Console**  
   Go to the **ARO Client Web Console** at `[Your IP:40001]`
   For example, if your IP is `17.12.205.193`, go to `17.12.205.193:40001` and you will access to the Web Console page. 
   Find the 19-digit **Serial Number** (SN) on top area of the Web Console.
   
   ![aro-client-webconsole-01](/img/aro-client/aro-client-webconsole-01.png)

2. **Configure Your Network**  
   You can configure your network connection in the Web Console (if needed). 
      ![aro-client-webconsole-02](/img/aro-client/aro-client-webconsole-02.png)
      ![aro-client-webconsole-03](/img/aro-client/aro-client-webconsole-03.png)

3. **Initialize the Activation Process**   
   Open the [**ARO Dashboard**](https://dashboard.aro.network). Navigate to **ARO Nodes** > **Add an ARO Client**, follow steps and enter the 19-digit **Serial Number** found in your Web Console.  
   ![Device Recognition](/img/node-operator-guide/cmd_finddevice.png)  
   The dashboard will recognize the software image instance and display its information. Confirm to continue.  
   > **Important**: Ensure your ARO Client is online during activation. If it is offline, the process may fail.  

4. **Complete Setup**  
   You will be guided to complete several simple steps for the initial configuration. 
   As the Congratulations Page showes up, you have successfully set up your new **ARO Client**!
