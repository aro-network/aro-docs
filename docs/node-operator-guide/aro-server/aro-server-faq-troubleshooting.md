---
id: aro-server-faq-troubleshooting
title: "FAQ & Troubleshooting"
sidebar_label: "FAQ & Troubleshooting"
---

# FAQ & Troubleshooting

### **My Dashboard -> Node Detail page shows error message: "This Agent version is not supported." or "Outdated Agent version detected."**
The issue usually comes from an outdated Agent version in your ARO Server. Ensure your node is connected to the internet and allow time for automatic updates. If the issue persists, contact official support channels.

### **My Dashboard -> Node Detail page shows error message: "Restricted Region Detected!"**
This happens when your node is detected in a restricted region under legal or compliance rules. This may affect your rewards. For details, refer to the [Terms of Use](/appendix/terms-of-use).

### **My Dashboard -> Node Detail page shows error message: "PCDN Client program not found."**
You need to install and correctly configure the PCDN Worker client for your ARO Server.

### **My ARO Server goes offline when the Debian system enters auto sleep.**
This usually means power settings on the Debian host are not configured properly. Update sleep and power settings to prevent auto-sleep.

### **My Dashboard -> Node Detail page shows error message: "Agent internal error".**
There is an internal error in the node agent. Please provide your node Serial Number and contact technical support.

### **My Dashboard -> Node Detail page shows error message: "Incorrect PCDN Worker Network Mode".**
Your PCDN Worker is running in an incorrect network mode. Recheck bridge and network interface settings for your worker.

### **My Dashboard -> Node Detail page shows error message: "PCDN Worker launch failed."**
Try restarting the ARO Server node first. If the issue remains, contact technical support.

### **My Dashboard -> Node Detail page shows error message: "Management Port is not open."**
PCDN Worker requires port `8080` (management port) to be open and exposed while running. Check firewall and network rules.

### **My Dashboard -> Node Detail page shows error message: "Invalid CPU config for PCDN Worker."**
This indicates invalid CPU allocation for the worker VM (often too many allocated cores under lower bandwidth conditions). Adjust CPU allocation and wait about 10 minutes before checking again.

### **My Dashboard -> Node Detail page shows error message: "PCDN Worker is not connected."**
This means your PCDN Worker is not connected even though the host or ARO Server may be online. Recheck worker network configuration.

### **My Dashboard -> Node Detail page shows error message: "PCDN Worker is not activated."**
This indicates the worker has not been activated for serving edge workloads. If your ARO Server is already activated but this error remains, reinstall the worker or contact official support.

### **My Dashboard -> Node Detail page shows error message: "Auto-sleep detected on host machine."**
Your host OS sleep settings are causing the node to auto-sleep. Update host power settings to keep the node always online.

### **My Dashboard -> Node Detail page shows error message: "Disk configuration is invalid."**
This is usually caused by incorrect worker disk setup, especially missing separation between system disk and data disk(s). Reconfigure disks according to requirements.

### **My Dashboard -> Node Detail page shows error message: "Insufficient disk space for PCDN Worker."**
This means the worker does not have enough disk space. For high-bandwidth nodes, allocate enough system disk and data disk capacity according to current requirements.

### **What network ports should be open?**
To ensure connectivity and performance, allow the following inbound and outbound ports:

✅ **Inbound Ports**
- **UDP:** All ports
- **TCP:** `80`, `443`, `9500-9700`

🚀 **Outbound Ports**
- **UDP:** `40001-40100`
- **TCP:** `443`, `30002`, `40001-40100`
