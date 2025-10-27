---
id: node-quantification
title: "Node Quantification"
sidebar_label: "How Node Rewards Are Quantified"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

# How Nodes Are Quantified For Mining Rewards: Principles & Rules

## General Introduction
In the ARO Network, different node types provide various resources to ARO’s Edge Network. Ultimately, these resources can generate commercial profits and are distributed to **Node Operators** in a blockchain-based manner.

During the current Testnet phase, node Operators earn <Link to="/campaign-hub/jade-rewards">**Jade**</Link> as a form of reward.

For clarity, we categorize current ARO nodes into **Edge Nodes** (including `ARO Pod`, `ARO Client`, `ARO Link`) and **Lite Nodes** (`ARO Lite`). These two types of nodes are evaluated differently for their contributions and corresponding rewards. This document focuses on how their workloads are quantified.

> For the allocation rules for Jade and other rewards during the Testnet phase, please refer to the <Link to="/campaign-hub/aro-testnet">Testnet Campaign documentation</Link> for details.

## Quantification Rules For Edge Nodes

### What Are Edge Nodes

**Edge Nodes** refer to nodes that provide edge-side resources in ARO’s edge network, specifically including `ARO Pod`, `ARO Client`, and `ARO Link`.

These nodes provide resources such as bandwidth, computation, and storage to users in close proximity at the edge, serving as the smallest yet most critical units of ARO’s “decentralized edge cloud.”

### Basic Principles

Generally, **bandwidth** is the most critical resource to an Edge Cloud. However, this does not mean that hardware configuration or computational capabilities are unimportant—they collectively determine an Edge Node’s comprehensive capability to deliver edge services. For example, if an Edge Node has significant bandwidth (e.g., 5Gbps) but poor hardware configuration, it cannot fully convert its bandwidth into actual edge traffic, as it lacks the capacity to process such high traffic in real time.

In single words: Edge Nodes are evaluated primarily by the **traffic** allocated to them, reflecting their actual edge resources contribution to ARO Network's edge services.

To elaborate further: An Edge Node’s most significant and measurable contribution to the edge network is the volume of network traffic it handles. But what enables an Edge Node to process more traffic? It requires: 

- **substantial bandwidth** for robust content delivery, 
- **favorable NAT configurations** for high-quality internet access, 
- **consistent performance** for stable and reliable service, 
- and, crucially, **business demand** for edge services in its nearby regions. 

All these factors determine how ARO Network quantifies an Edge Node’s workload and determines its mining rewards in practice. The Edge Service's **Scheduler** adjusts the traffic allocated to Edge Nodes based on these factors. Meanwhile, **Keeper Nodes** monitor and verify the performance of nearby Edge Nodes, detect and address cheating behaviors, and process on-chain ledger activities.

### Quantification Rules

**The formula that describes how traffic is scheduled to an Edge Node:**

`traffic_scheduling_rate` = `max_bandwidth` * `NAT_type_factor` * `consistency_factor` * `edge_service_factor`

- `traffic_scheduling_rate`: The rate of traffic scheduled to the Edge Node from the Edge Service Schedulers.
- `max_bandwidth`: The maximum bandwidth available provided by the Edge Node, based on time-averaged measurements during a certain period of time.
	- Each Edge Node will be assigned a `cap`, expressed as a bandwidth value. The cap places an upper limit on the maximum traffic that an Edge Node can process, based on the computational capability (which is essential for processing and uploading traffic) of the Edge Node. 
	- A special testing mechanism is applied to Edge Nodes for continuous  detecting and validating of Edge Node's computational capability. 
	- By default, each `ARO Pod` will be assigned a `100 Mbps` cap, and each `ARO Client` a `1 Gbps` cap, as a starting point. 
	- If multiple Edge Node sharing the same network environment is detected, the Scheduler will allocate traffic to these nodes based on their respective caps. 
- `NAT_type_factor`: A factor determined by the detected NAT Type of the Edge Node. Better NAT Types enjoy higher factor.
  - Factor range: from `1.0` to `2.5`.
  - NAT type detection and detail rules are coming soon.
- `consistency_factor`: A factor determined by the performance consistency, based on multiple metrics such as bandwidth, uptime, etc., during a considerably long period of time for the Edge Node.
- `edge_service_factor`: A factor determined by the actual business demand from Edge Services on your Edge Node. This factor may vary from region to region. This factor may change dynamically based on real-world demand changes. Generally, if you are running Edge Nodes in a region with higher business demand for Edge Services, you enjoy a higher factor accordingly.
  - For the Testnet Sprint 1, the `edge_service_factor` is set to `0.1`.
  - In the future, real-world edge services (e.g., PCDN) apply higher `edge_service_factor`.  
  - Why is the `edge_service_factor` set to `0.1` for the current stage? This is because we are focusing on recruiting edge resources for real-world business readiness in the Testnet Sprint 1 stage. Therefore, we assume that all Edge Nodes do not "have to" fully utilize their maximum available bandwidth.
  - For example, if you have 1 Gbps of bandwidth, your node will process and upload traffic allocated by the Scheduler at a rate of approximately 100Mbps. At this point, you do not need to reduce the node’s bandwidth resources—doing so would also decrease the traffic allocated to the node, thereby reducing your rewards.
 
> For more details on NAT types and Edge Node performance improvement, please refer to <Link to="/node-operator-guide/improve-performance/network-optimization">Edge Node Optimization Guide</Link>.


## Quantification Rules For ARO Lite Nodes

### What's Special About ARO Lite

`ARO Lites` operate distinctly from Edge Nodes and do not compete directly with Edge Nodes.

Firstly, ARO Lite may function as a special type of **Checker Node** in the network topology of ARO Network. They flexibly and randomly “test” the behavior and resource capabilities of surrounding Edge Nodes, providing highly valuable assistance to large monitoring nodes and forming an organic complement in the network topology.

Secondly, due to the technical limitations of lightweight browser nodes, ARO Lite cannot provide commercial-grade edge resources like Edge Nodes do, particularly bandwidth-centric PCDN business capabilities. However, a large number of ARO Lite nodes can provide edge services that do not require high bandwidth or performance.

In the future, ARO Lites are expected to take on expanded roles beyond Checker Nodes, complementing Edge Nodes and uniquely contributing to the maintenance and growth of the ARO Network’s edge infrastructure.

### Quantification Rules

Technically, ARO Lite’s rewards are based on factors such as `uptime`, network stability (measured by metrics like `latency` and `packet loss rate`), and exclusivity of their `IP address` resources.

Keeper Nodes evaluate ARO Lite’s performance over a period of time based on `uptime`, `latency`, and `packet loss rate` as basic **“network quality”** factors, weighted equally.

Notably, **IP resources** are critical for ARO Lite. If multiple ARO Lite nodes operate under the same IP address, their scores will be diluted—because, from the perspective of the entire network, this behavior merely “replicates” limited network resources without genuinely enhancing their ability to provide actual edge services.