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
| 5 Gbps     | ≥ 48     | ≥ 64 GB      | ≥ 200 GB SSD     | ≥ 5 TB SSD       |   10 Gbps   |
| 10 Gbps    | ≥ 96     | ≥ 128 GB     | ≥ 200 GB SSD     | ≥ 10 TB SSD      |   10 Gbps   |
| 20 Gbps    | ≥ 192     | ≥ 256 GB     | ≥ 200 GB SSD     | ≥ 20 TB SSD      | 10 Gbps * 2   |



