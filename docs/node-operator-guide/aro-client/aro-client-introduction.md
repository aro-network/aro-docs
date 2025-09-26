---
id: aro-client-introduction
title: "ARO Client Introduction"
sidebar_label: "General Introduction & Requirements"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

# General Introduction & Requirements for Installing ARO Client

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


### ARO Client Installation - General Guide & Important Notes

<p style={{color: 'red'}}>**IMPORTANT - Read Before Install:**</p>

- The ARO Client software image currently supports only `x86` architecture. Do **NOT** attempt to run the ARO Client on `ARM` or other alternative architectures.
- Running the ARO Client in a virtual machine (VM) environment is **NOT** supported.
- To install the ARO Client, a bare-metal machine running a `Debian` operating system (Version `11` or higher) is required as a prerequisite.


**General steps to follow:**

- If you do not have `Debian` installed, refer to this <Link to="/node-operator-guide/aro-client/aro-client-debian">**Operating System Tutorial guide**</Link>. 
- If you are ready with the operating system, refer to this <Link to="/node-operator-guide/aro-client/aro-client-installation">**Installation & Initialization Tutorial for ARO Client**</Link>.


### Special Notes for VM Installations (Legacy)

<p style={{color: 'red'}}>**IMPORTANT - If you are running a VM-based installation of ARO Client:**</p>

- The VM-based installation is **deprecated** and no longer supported due to performance limitations, particularly for commercial edge services.

- If you are currently using a VM-based installation of the ARO Client (e.g., from the Previewnet phase when VM installations were supported), we **strongly recommend** migrating to the new installation method as soon as possible.