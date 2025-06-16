---
id: device-specs
title: Device Specifications
hide_table_of_contents: false
---

# Device Specifications

### ARO Pod Specifications

- Device: **ARO Pod 2GB+64GB Version** Home Gateway
  - CPU: Quad-core ARM processor
  - Memory: 2GB
  - System Storage: 64GB eMMC
  - Network Interface: 1 × Ethernet
  - USB Interface: 1 × USB Type-C
  - Power: 5V/2A
  - Dimensions: 103 × 103 × 20 mm
  - Package Contents: 1 × Manual, 1 × Cable

### ARO Link Specifications

- Device: **ARO Link** Router
  - Chipset: MT7981BA + MT7976C + MT7531AE
  - Memory/Storage: 1GB DDR4; 128GB eMMC
  - Wireless Standard: 802.11a/b/g/n/ac/ax
  - Wireless Speed: 2.4GHz: 574 Mbps; 5GHz: 2402 Mbps
  - Operating Frequency: 2.4GHz + 5GHz
  - RJ45 Ports: 1 × WAN + 4 × LAN (10/100/1000 Mbps)
  - Antennas: 6
  - Operating System: OpenWRT
  - Dimensions: 278 × 179.1 × 33 mm

### Recommended Requirements for Software Clients (ARO Client)

**The ARO Client is currently available only as an x86 virtual machine (VM) image.**

To use the client, users must deploy the VM image on bare-metal servers or desktop computers equipped with an x86 architecture CPU, using any virtualization solution of their choice.

For detailed installation and usage instructions, refer to the [ARO Client Image Installation Guide](/docs/user-guides/software-setup.md).

#### Recommended Requirements Based on the Bandwidth

We provide recommended hardware specifications for running **ARO Client** based on your **bandwidth**. If your bandwidth falls between the listed values, you can estimate the requirements by interpolating linearly.

- For **100 Mbps or lower**:
  - CPU Threads: ≥ 2
  - RAM: 2 GB
  - Disk: ≥ 50 GB SSD
- For **500 Mbps**:
  - CPU Threads: ≥ 12
  - RAM: 12 GB
  - System Disk: ≥ 50 GB SSD
  - Data Disk: ≥ 600 GB SSD
- For **1 Gbps**:
  - CPU Threads: ≥ 24
  - RAM: 32–48 GB
  - System Disk: ≥ 240 GB SSD
  - Data Disk: ≥ 2 TB SSD
- For **5 Gbps**:
  - CPU Threads: ≥ 48
  - RAM: 128–192 GB
  - System Disk: ≥ 240 GB SSD
  - Data Disk: ≥ 10 TB SSD

#### Recommendations For Further Performance Improvement
  
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