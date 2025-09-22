---
id: device-specs
title: Device Specifications
hide_table_of_contents: false
---

# Device Specifications

## ARO Pod Specifications

- Device: **ARO Pod** Home Gateway
  - Model: AROP-01	 	
  - CPU: Quad-core ARM processor
  - Memory: 2GB
  - System Storage: 64GB eMMC
  - Network Interface: 1 × Ethernet
  - USB Interface: 1 × USB Type-C
  - Power: 5V/2A
  - Dimensions: 103 × 103 × 20 mm
  - Package Contents: 1 × Manual, 1 × Ethernet Cable, 1 × Power Cable 

## ARO Link Specifications

- Device: **ARO Link** Router
  - Model: AROL-01	 	
  - Chipset: MT7981BA + MT7976C + MT7531AE
  - Memory/Storage: 1GB DDR4; 128GB eMMC
  - Wireless Standard: 802.11a/b/g/n/ac/ax
  - Wireless Speed: 2.4GHz: 574 Mbps; 5GHz: 2402 Mbps
  - Operating Frequency: 2.4GHz + 5GHz
  - RJ45 Ports: 1 × WAN + 4 × LAN (10/100/1000 Mbps)
  - Antennas: 6
  - Operating System: OpenWRT
  - Dimensions: 278 × 179.1 × 33 mm

## Recommended Requirements for Software Clients (ARO Client)

**The ARO Client is currently available only as an x86 bare-metal software image.**

To use the client, users must deploy the image on bare-metal servers or desktop computers equipped with an `x86` architecture CPU.

For detailed installation and usage instructions, refer to the [ARO Client Image Installation Guide](/docs/user-guides/software-setup.md).

### **General Requirements** that are strongly recommended for all **ARO Client** Software (especially for operators with business-level bandwidth):

- **Static IP & Public IP**
- NAT Type: `Full Cone NAT` or higher (e.g., `NAT0`, `DMZ NAT1`, `UPnP NAT1`)
- Ethernet Cable Connection: Signle cable to Network Interface Card `ETH0`
- **10 Gigabit Ethernet** (`10GE`, `10GbE`, or `10 GigE`) for Network Interface Card
- `IPv6` Support
- Do **NOT** install software image in VM
- CPU Clock Speed: ≥ 2 GHz
- Disk:
	- SSD or HDD
	- HDD single drive ≥ 4 TB (We recommend 8 TB for single drive)
	- Data Disk: Random 4K Read IOPS ≥ 60,000
	- We recommend to use `NVMe` for the Data Disks 
	- Do **NOT** mix `Sata` SSD and `NVMe` SSD if you are using SSD for your Data Disks
	- System Disk: Read/Write IOPS ≥ 30,000

### **Port Requirements** for all **ARO Client** Software:

- TCP: 80, 443, 9500-9700
- UDP: All ports  

### **Hardware Specifications Requirements** for running ARO Client based on your bandwidth. If your bandwidth falls between the listed values, you can estimate the requirements by interpolating linearly.


| Bandwidth  | CPU threads | RAM       | System Disk      | Data Disk        |
|------------|----------|--------------|------------------|------------------|
| 100 Mbps   | ≥ 4      | 2 GB         | ≥ 50 GB SSD      | ≥ 150 GB SSD      |
| 500 Mbps   | ≥ 12     | 8 GB         | ≥ 200 GB SSD     | ≥ 500 GB SSD     |
| 1 Gbps     | ≥ 16     | ≥ 16 GB      | ≥ 240 GB SSD     | ≥ 1 TB SSD       |
| 5 Gbps     | ≥ 32     | ≥ 64 GB      | ≥ 240 GB SSD     | ≥ 5 TB SSD       |
| 10 Gbps    | ≥ 64     | ≥ 128 GB     | ≥ 240 GB SSD     | ≥ 10 TB SSD      |



