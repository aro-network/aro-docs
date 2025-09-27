---
id: aro-client-debian
title: "Debian Installation Tutorial"
sidebar_label: "Operating System Tutorial"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link'; 

# Debian Installation Tutorial

This tutorial guides you through the process of installing `Debian` operating system, which is a prerequisite for installing ARO Client software image installer. 

The tutorial also guides you through the **multi-disk configuration**. Please do make sure you have followed the tutorial if you have multiple data disks for your ARO Client (which is usually the case).

> Note: `Debian 11` and above versions are supported.

If you already have a required operating system running on your machine, you can skip this tutorial.  


## 1. Pre-Installation Preparation

> **Note**: Ensure the computer is connected to the internet before proceeding.

### 1.1 Download the System Imaging Software Rufus

`Rufus 4.9` Download link: [https://github.com/pbatard/rufus/releases/download/v4.9/rufus-4.9.exe](https://github.com/pbatard/rufus/releases/download/v4.9/rufus-4.9.exe)

### 1.2 Download the Official Debian Image

`Debian 12.11.0 amd64` Image URL:[https://get.debian.org/images/archive/12.11.0/amd64/iso-dvd/debian-12.11.0-amd64-DVD-1.iso](https://get.debian.org/images/archive/12.11.0/amd64/iso-dvd/debian-12.11.0-amd64-DVD-1.iso)

After downloading the image, use an md5sum verification tool to compare the file's checksum with the official md5sum value to ensure the download is complete and intact.

### 1.3 Prepare a USB Drive

Prepare a USB drive with at least 8GB capacity.

### 1.4 Prepare Hardware

Prepare a physical host, monitor, and keyboard.

## 2. Creating a Bootable USB Drive on Windows

### 2.1 Launch the Rufus Application

Double-click `rufus-4.9.exe` to start the Rufus application.

![Rufus Startup](/img/aro-client/image-20250917145514976.png)

### 2.2 Burn the System Image

In the "Device" dropdown, select the USB drive to be used for the system installation. For the boot selection, click the "Select" button and choose the downloaded system image `debian-12.11.0-amd64-DVD-1.iso`. Other settings can remain as shown in the default configuration below.

![Rufus Configuration](/img/aro-client/image-20250926143406115.png)

<p style={{color: 'red'}}>Warning: The imaging process will erase all data on the USB drive. If the USB contains important data, please back it up before proceeding.</p>

Select "Write in ISO Image mode" and click "OK" to start the imaging process.

![Start Imaging](/img/aro-client/image-20250917150717392.png)

![Imaging Progress](/img/aro-client/image-20250917150951575.png)

After the imaging process is complete, safely eject the USB drive.

![Imaging Complete](/img/aro-client/image-20250926143545973.png)

## 3. Debian System Installation

<p style={{color: 'red'}}>Warning: The physical host for the installation must be connected to the internet via an Ethernet cable.</p>

### 3.1 Configure USB Boot and Boot Mode

Enter the BIOS setup interface to configure the boot settings. The method to access the BIOS varies slightly depending on the x86 device (check the boot screen for prompts; common keys include F2, F12, ESC, Enter, or Delete). In this guide, press **DEL** or **ESC** to enter the setup interface.

![BIOS Setup](/img/aro-client/image-20250917153117607.png)

#### 3.1.1 Set Boot Mode

Set the Boot Mode to **UEFI + LEGACY**.

![Boot Mode](/img/aro-client/image-20250917153548526.png)

#### 3.1.2 Set USB as the First Boot Device

![USB Boot Priority](/img/aro-client/image-20250917154053745.png)

#### 3.1.3 Save Settings and Exit

![Save and Exit](/img/aro-client/image-20250917154703493.png)

### 3.2 Image Installation

#### 3.2.1 Enter the Installation Interface

After completing the BIOS setup, the system will restart and enter the installation interface. Select **Graphical install** and press Enter to begin the system installation.

![Graphical Install](/img/aro-client/image-20250926114605480.png)

#### 3.2.2 Select Language

![Select Language](/img/aro-client/image-20250926140850461.png)

#### 3.2.3 Select Your Location

![Select Location](/img/aro-client/image-20250926140927963.png)

#### 3.2.4 Configure the Keyboard

![Configure Keyboard](/img/aro-client/image-20250926140955557.png)

#### 3.2.5 Configure the Network

![Network Configuration 1](/img/aro-client/image-20250926141102811.png)

![Network Configuration 2](/img/aro-client/image-20250926141206894.png)

![Network Configuration 3](/img/aro-client/image-20250926141222714.png)

#### 3.2.6 Set Up Users and Passwords

Set the root user password:

![Root Password](/img/aro-client/image-20250926141300295.png)

Add a new user:

![Add User 1](/img/aro-client/image-20250926141355670.png)

![Add User 2](/img/aro-client/image-20250926141410557.png)

Set the new user password:

![User Password](/img/aro-client/image-20250926141430799.png)

#### 3.2.7 Select Disk

During installation, select a smaller disk as the system disk and leave other disks unconfigured for now.

![Select Disk](/img/aro-client/image-20250926141525475.png)

Create a boot partition on the system disk with a size of 256MB:

![Boot Partition 1](/img/aro-client/image-20250926141640647.png)

![Boot Partition 2](/img/aro-client/image-20250926141651103.png)

![Boot Partition 3](/img/aro-client/image-20250926141702123.png)

![Boot Partition 4](/img/aro-client/image-20250926141716901.png)

![Boot Partition 5](/img/aro-client/image-20250926141731845.png)

![Boot Partition 6](/img/aro-client/image-20250926141745253.png)

Automatically partition the remaining capacity of the system disk:

![Auto Partition 1](/img/aro-client/image-20250926141755989.png)

![Auto Partition 2](/img/aro-client/image-20250926141857025.png)

![Auto Partition 3](/img/aro-client/image-20250926141913742.png)

#### 3.2.8 Configure the Package Manager

![Package Manager 1](/img/aro-client/image-20250926142043261.png)

![Package Manager 2](/img/aro-client/image-20250926142058248.png)

#### 3.2.9 Software Selection

Select **Debian desktop environment**, **SSH server**, and **Standard system utilities**.

![Software Selection](/img/aro-client/image-20250926142144470.png)

#### 3.2.10 Installation Completion

Select **Continue** to automatically restart the system.

![Installation Complete](/img/aro-client/image-20250926142335761.png)

After rebooting, the system will display the login screen.

![Login Screen](/img/aro-client/image-20250926142550318.png)

## 4. Multiple Data Disk Configuration

> Note: You can choose either the LVM approach or the Raid approach. 

### 4.1 Approach 1 - LVM Configuration

Log in using the created user, switch to the root user in the terminal, and run the following command to view the disk list:

![Disk List](/img/aro-client/image-20250926133225601.png)

As shown above, there may be multiple data disks. This example uses the data disk `/dev/nvme0n1`.

Edit the apt source file `/etc/apt/sources.list` (you can choose other Debian apt sources):

```bash
#deb cdrom:[Debian GNU/Linux 12.11.0 _Bookworm_ - Official amd64 DVD Binary-1 with firmware 20250517-09:52]/ bookworm contrib main non-free-firmware
deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware
deb http://deb.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
deb http://deb.debian.org/debian bookworm-updates main contrib non-free non-free-firmware
```

After configuring the sources, execute the following commands:

```bash
export PATH=$PATH:/sbin:/usr/sbin
apt update
apt install lvm2 -y
mkdir /data
```

Create a physical volume:

```bash
# Create physical volume
sudo pvcreate /dev/nvme0n1
```

![Physical Volume](/img/aro-client/image-20250926135921271.png)

Create a volume group:

```bash
vgcreate vg0 /dev/nvme0n1
```

![Volume Group](/img/aro-client/image-20250926140015730.png)

Create a logical volume:

```bash
lvcreate -l 100%FREE -n lv_data vg0
```

![Logical Volume](/img/aro-client/image-20250926140104695.png)

Format the logical volume and add it to `/etc/fstab`:

```bash
mkfs.ext4 /dev/vg0/lv_data
UUID=$(blkid -s UUID -o value /dev/vg0/lv_data)
echo "UUID=$UUID  /data  ext4  defaults  0 2" | sudo tee -a /etc/fstab
systemctl daemon-reload
mount -a
```

![Format Logical Volume](/img/aro-client/image-20250926140324707.png)

![Mount Data Disk](/img/aro-client/image-20250926135747675.png)

As shown above, the data disk is successfully managed with LVM and mounted to the `/data` directory.

### 4.2 Approach 2 - RAID Configuration

Configure the disk as a single-disk RAID 0.

The following steps demonstrate RAID 0 configuration on a Dell server. The process may vary slightly for servers from other brands.

1. Power on the computer and repeatedly press **F12** when the Dell logo appears to access the boot menu.

2. Use the arrow keys to select **Device Configuration**.

   ![Boot Menu](https://supportkb.dell.com/img/ka0Do000000lvnEIAQ/ka0Do000000lvnEIAQ_zh_TW_5.jpeg)

3. In the Intel RAID menu, select **Create RAID**.

   ![Intel RAID Menu](https://supportkb.dell.com/img/ka0Do000000lvnEIAQ/ka0Do000000lvnEIAQ_zh_TW_6.jpeg)

4. Assign a name to your RAID volume. Use the arrow keys to move to the next item.

   ![Create RAID Menu](https://supportkb.dell.com/img/ka0Do000000lvnEIAQ/ka0Do000000lvnEIAQ_zh_TW_7.jpeg)

5. Select the desired RAID level.

   ![Select RAID Level](https://supportkb.dell.com/img/ka0Do000000lvnEIAQ/ka0Do000000lvnEIAQ_zh_TW_8.jpeg)

6. Select the disks for the RAID volume. Highlight a disk, press **Space** or **Enter**, and select **X**.

   ![Select RAID Member Disks](https://supportkb.dell.com/img/ka0Do000000lvnEIAQ/ka0Do000000lvnEIAQ_zh_TW_9.jpeg)

7. Choose the disk volume and stripe size, then select **Create Volume** to complete. The RAID volume will now appear on the main screen.

   > **Note**: For RAID 0, select a stripe size closest to the average file size to be stored on the RAID volume. If unknown, use the default stripe size of 128 KB.

   ![RAID Volume Created](https://supportkb.dell.com/img/ka0Do000000lvnEIAQ/ka0Do000000lvnEIAQ_zh_TW_10.jpeg)