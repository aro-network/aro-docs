---
id: choose-installation-method
title: "Choose Installation Method"
sidebar_label: "Choose Installation Method"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

# Choose Installation Method for ARO Client

### ARO Client Introduction

The ARO Network is a permissionless Edge Cloud designed to leverage diverse resources. To support this, ARO provides a **software image** (the **ARO Client**) that can be installed on various devices.

Note that the ARO Client is geared toward **advanced users**, requiring greater technical expertise from both the device and the operator. 

### Recommended Requirements for Software Clients (ARO Client)

**General Recommendations** for all **ARO Client** Software (especially for operators with business-level bandwidth):

- Public IP address
- NAT Type: Full Cone NAT or higher (e.g., NAT0, DMZ NAT1, UPnP NAT1)
- IPv6 Support
- CPU Clock Speed: ≥ 2 GHz
- Data Disk Random 4K Read IOPS: ≥ 30,000
- System Disk Read/Write IOPS: ≥ 15,000 / 10,000

**Port Requirements** for all **ARO Client** Software:

- TCP: 80, 443, 9500-9700
- UDP: All ports  

**Hardware Specifications Requirements** for running ARO Client based on your bandwidth. If your bandwidth falls between the listed values, you can estimate the requirements by interpolating linearly.

- For **100 Mbps**:
  - CPU Threads: ≥ 4
  - RAM: 2 GB
  - Disk: ≥ 50 GB SSD
- For **500 Mbps**:
  - CPU Threads: ≥12
  - RAM: 8 GB
  - System Disk: ≥ 200 GB SSD
  - Data Disk: ≥500 GB SSD
- For **1 Gbps**:
  - CPU Threads: ≥16
  - RAM: ≥16 GB
  - System Disk: ≥ 240 GB SSD
  - Data Disk: ≥1 TB SSD
- For **5 Gbps**:
  - CPU Threads: ≥32
  - RAM: ≥64 GB
  - System Disk: ≥ 240 GB SSD
  - Data Disk: ≥ 5 TB SSD
- For **10 Gbps**:
  - CPU Threads: ≥64
  - RAM: 128–192 GB
  - System Disk: ≥ 240 GB SSD
  - Data Disk: ≥ 10 TB SSD

### Choose Your Installation Method

The ARO Client software image currently supports only the `x86` architecture.

There are two methods available for installing the ARO Client software:

- **Bare-Metal**: This method involves running the ARO Client directly on physical hardware without an intervening operating system. A bare-metal server is a single-tenant physical server leased to one customer, offering maximum control, consistent performance, and enhanced security. For detailed instructions, refer to <Link to="/node-operator-guide/aro-client/aro-client-installation-guide-bare-metal">**this guide**</Link>.
- **Installer Package**: A `Debian`-based installer package will be available soon. For more information, see <Link to="/node-operator-guide/aro-client/aro-client-installation-guide-installer-package">**this guide**</Link>.

### Special Notes for VM Installations

The VM-based installation method is deprecated and no longer supported due to performance limitations, particularly for edge services like PCDN.

If you are currently using a VM-based installation of the ARO Client (e.g., from the Previewnet phase when VM installations were supported), we strongly recommend migrating to a supported installation method as soon as possible.