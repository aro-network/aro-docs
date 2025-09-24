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

**General Requirements** that are strongly recommended for all **ARO Client** Software (especially for operators with business-level bandwidth):

- **Static IP & Public IP**
- NAT Type: `Full Cone NAT` or higher (e.g., `NAT0`, `DMZ NAT1`, `UPnP NAT1`)
- Do **NOT** install software image in VM
- CPU Clock Speed: ≥ 2 GHz
- Disk:
	- SSD with `NVMe` protocol
	- Random 4K Read IOPS ≥ 30,000

**Port Requirements** for all **ARO Client** Software:

- TCP: `80`, `443`, `9500`-`9700`
- UDP: All ports  

**Hardware Specifications Requirements** for running ARO Client based on your bandwidth. If your bandwidth falls between the listed values, you can estimate the requirements by interpolating linearly.


| Bandwidth  | CPU threads | RAM       | System Disk      | Data Disk        |  Network Card |
|------------|----------|--------------|------------------|------------------|---------------|
| 100 Mbps   | ≥ 4      | ≥ 4 GB         | ≥ 50 GB SSD      | ≥ 200 GB SSD      |  100 Mbps     |
| 500 Mbps   | ≥ 8     | ≥ 12 GB         | ≥ 100 GB SSD     | ≥ 500 GB SSD     |   1 Gbps    |
| 1 Gbps     | ≥ 16     | ≥ 16 GB      | ≥ 200 GB SSD     | ≥ 1 TB SSD       |   10 Gbps   |
| 5 Gbps     | ≥ 64     | ≥ 64 GB      | ≥ 200 GB SSD     | ≥ 5 TB SSD       |   10 Gbps   |
| 10 Gbps    | ≥ 128     | ≥ 128 GB     | ≥ 200 GB SSD     | ≥ 10 TB SSD      |   10 Gbps   |
| 20 Gbps    | ≥ 256     | ≥ 256 GB     | ≥ 200 GB SSD     | ≥ 20 TB SSD      | 10 Gbps * 2   |


### Choose Your Installation Method

The ARO Client software image currently supports only the `x86` architecture.

There are two methods available for installing the ARO Client software:

- **Bare-Metal**: This method involves running the ARO Client directly on physical hardware without an intervening operating system. A bare-metal server is a single-tenant physical server leased to one customer, offering maximum control, consistent performance, and enhanced security. For detailed instructions, refer to <Link to="/node-operator-guide/aro-client/aro-client-installation-guide-bare-metal">**this guide**</Link>.
- **Installer Package**: A `Debian`-based installer package will be available soon. For more information, see <Link to="/node-operator-guide/aro-client/aro-client-installation-guide-installer-package">**this guide**</Link>.

### Special Notes for VM Installations

The VM-based installation method is deprecated and no longer supported due to performance limitations, particularly for edge services like PCDN.

If you are currently using a VM-based installation of the ARO Client (e.g., from the Previewnet phase when VM installations were supported), we strongly recommend migrating to a supported installation method as soon as possible.