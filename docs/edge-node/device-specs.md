---
id: device-specs
title: Device Specs
hide_table_of_contents: false
---

# Device Specs

### Berry Box Specifications

- Model: **Berry Box 2GB+64GB Version**
	- CPU: 4-cores ARM processors
	- Memory: 2GB
	- System Storage: 64GB eMMC
	- Network Interface: Ethernet*1
	- USB Interface: USB Type-C*1
	- Power: 5V/2A
	- Size: 103\*103\*20mm
	- Package: Manual\*1, Cable\*1

### Berry Router Specifications

- Model: **Berry Router**
	- Chip: MT7981BA+MT7976C+MT7531AE
	- Storage/Memory: 1GB DDR4; 128GB eMMC
	- Wireless Standard: 802.11a/b/g/n/ac/ax
	- Wireless Rate: 574Mb/s 2402Mb/s
	- Operating Frequency Band: 2.4GHz+5GHz
	- RJ45 Connector: 1WAN+4LAN*10/100/1000Mbps
	- Antenna: 6
	- Operating System: OPENWRT
	- Size: 278\*179.1\*33mm

### Suggested Requirements for Running Software Clients
The **general requirements** for all Software Clients:

- Public IP
- Full Cone NAT or above (NAT0, DMZ NAT1, UPnP NAT1)
- IPv6 Support
- CPU Clock Speed ≥ 2Ghz
- Data Disk RND4k Read IOPS ≥ 30000
- System Disk Read/Write IOPS ≥ 15000/10000

We provide suggested hardware requirements for running EnReach Software Nodes based on your **upstream bandwidth** (general requirements shall be met first!). If your bandwidth falls between, you can estimate the requirements based on the suggested requirements on a linear scale. 

- For **400Mbps**:
	- CPU threads: ≥12
	- RAM: 12GB
	- System Disk: ≥ 50GB
	- Data Disk: ≥ 600GB SSD
- For **1Gbps**:
	- CPU threads: ≥ 24
	- RAM: 32-48GB
	- System Disk: ≥ 240GB SSD
	- Data Disk: ≥ 2TB SSD
- For **5Gbps**:
	- CPU threads: ≥ 48
	- RAM: 128-192GB
	- System Disk: ≥ 240GB SSD
	- Data Disk: ≥ 10TB SSD
