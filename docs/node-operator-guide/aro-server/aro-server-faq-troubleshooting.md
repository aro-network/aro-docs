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

### **My ARO Server goes offline when the Debian system enters auto sleep.**
This usually means power settings on the Debian host are not configured properly. Update sleep and power settings to prevent auto-sleep.

### **My Dashboard -> Node Detail page shows error message: "Agent internal error".**
There is an internal error in the node agent. Please provide your node Serial Number and contact technical support.

### **My Dashboard -> Node Detail page shows error message: "Auto-sleep detected on host machine."**
Your host OS sleep settings are causing the node to auto-sleep. Update host power settings to keep the node always online.

### **My Dashboard -> Node Detail page shows error message: "Disk configuration is invalid."**
This is usually caused by incorrect worker disk setup, especially missing separation between system disk and data disk(s). Reconfigure disks according to requirements.

### **What network ports should be open?**
To ensure connectivity and performance, allow the following inbound and outbound ports:

✅ **Inbound Ports**
- **UDP:** All ports
- **TCP:** `80`, `443`, `9500-9700`

🚀 **Outbound Ports**
- **UDP:** `40001-40100`
- **TCP:** `443`, `30002`, `40001-40100`
