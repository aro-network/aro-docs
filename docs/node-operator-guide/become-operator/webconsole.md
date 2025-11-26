---
id: webconsole
title: "Web Console"
sidebar_label: "Web Console"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

# Web Console for Edge Nodes

### Visit Web Console Page from ARO Dashboard

The **ARO Dashboard** provides access to the **Web Console** for managing your Edge Nodes.

On the **All Nodes -> Node Detail** page, locate the **"Web Console"** button in the top-right corner.

> **Note**: You can only access the Web Console when your device and your ARO Dashboard are on the same local area network (LAN).



View device information in this tab.
![Device Information](/img/node-operator-guide/console_1.png)



Configure IP settings in this tab.
![IP Configuration](/img/node-operator-guide/console_2.png)


Monitor network status in this tab.
![Network Status](/img/node-operator-guide/console_3.png)


Restart your device directly in this tab.
![Device Restart](/img/node-operator-guide/console_4.png)

### Configure Network Interface Card in Web Console

Web Console supports configuring **NIC** (Network Interface Card) directly on the webpage for your ARO Client.  

In the **Network Settings** tab, you can choose to insert/add a new configuration record (if empty), or edit in an existing record. 

![NIC1](/img/node-operator-guide/20251125183612.png)

![NIC2](/img/node-operator-guide/20251125183613.png)

In the example above, if you set `enp8s0` in the NIC field, `enp8s0` will be the NIC for PCDN workload. 

> Make sure you have correctly configured the Subnet Mask and IPv4 Gateway fields, or the NIC may fail to operate. 