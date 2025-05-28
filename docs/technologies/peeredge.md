---
id: peeredge
title: Peeredge
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# PeerEdge

The ARO **PeerEdge** middleware comprises three core components: **PeerHVM**, **PeerDTS**, **PeerRouting**.

### ARO PeerHVM

In ARO network, coordinating and managing distributed heterogeneous resources is crucial. We face the challenge of efficiently scheduling and adapting a variety of resources such as compute, storage, and bandwidth across diverse hardware and operating systems.&#x20;

ARO’s **PeerHVM (Peer Heterogeneous VM)** technology is designed to meet this need by virtualizing and standardizing various hardware and system resources, creating flexible, high-efficiency resource provisioning for various contents.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/technology/hvm.png')} style={{maxWidth: '800'}} />
</div>

#### **Virtualizing Heterogeneous Resources**

Virtualizing heterogeneous resources involves numerous technical challenges, such as hardware diversity, OS compatibility, and performance optimization. To achieve this, PeerHVM is designed to support a broad range of hardware architectures and OS environments—from x86 to ARM, WASM, and even browser-based environments. This multi-architecture compatibility grants PeerHVM a high degree of adaptability, accommodating diverse devices in distributed networks and providing unprecedented scalability.

#### **Standardization Strategies in Distributed Networks**

In distributed environments, resource standardization requires unified interfaces and protocol design. PeerHVM’s standardization strategy deconstructs resources into standardized modules, which are then assembled into resource pools tailored to specific business needs. Different hardware resources are abstracted through PeerHVM into uniform service interfaces, allowing the system to seamlessly call these standardized resource units for rapid adaptation and flexible scheduling.

#### **Resource Scheduling, Monitoring and Management**

The **Scheduling Layer** is responsible for dynamically matching resources to user demands, ensuring efficient utilization of distributed resources. With advanced load balancing and adaptive adjustments, it can handle varying workloads in real time. Tailored scheduling algorithms are employed to coordinate the unique requirements of heterogeneous resources, enabling optimized and responsive allocation.

Focused on maintaining resource reliability, the **Monitoring Layer** continuously monitors and identifies the status of hardware and performance across nodes. It includes robust tracking of resource usage, preventing attacks and false reporting.

#### **What’s More: ARO’s Custom Containers**

PeerHVM’s virtualization goes beyond resource abstraction by implementing deep optimization of resources. Custom containers developed by ARO enable efficient operation across various environments, particularly in small and edge devices, where PeerHVM achieves low-power operation. Custom virtualized technologies enable different hardware architectures to maximize their computational advantages, thereby enhancing overall network resource utilization and reducing the cost of edge cloud.

### ARO PeerDTS Protocol

To build a distributed edge cloud that meets the demands of large-scale P2P data transmission across varied nodes, ARO developed a proprietary P2P transmission protocol, **PeerDTS**. Tailored specifically for edge environments and optimized for high-speed, reliable data transfer, this protocol surpasses conventional open-source alternatives through advanced **multi-channel transmission** capabilities, **custom erasure encoding** techniques and **Stateful-to-Stateless** transmission solutions.

#### Edge-Side Optimized

Unlike standard protocols, which are primarily designed for centralized content delivery networks (CDNs), ARO’s protocol is fine-tuned for distributed, small-scale P2P and edge environments. Standard P2P protocols often struggle in such scenarios, performing similarly to CDNs due to lack of specific edge optimizations. PeerDTS overcomes these limitations by implementing a multi-channel, adaptive transmission mechanism, enabling data to move more efficiently across edge nodes. This customization allows smaller nodes and edge devices to achieve performance on par with traditional CDNs, leveraging the benefits of decentralized architecture.

#### Static Content, Dynamic Encoding

To meet the demands of high-volume data transmission over distributed networks, ARO dynamically re-encodes static content during transmission. Rather than simply sending static data, ARO’s protocol breaks data into chunks, each embedded with unique characteristic markers that support error correction and recovery. PeerDTS achieves a low-complexity erasure encoding (simplified to **O(N)** from typically **O(N^2)**) directly on edge devices, enabling robust fault tolerance and efficiency without requiring specific chips.

### ARO PeerRouting Engine

#### Matching Algorithm is the Holy Grail

The **ARO PeerRouting Engine** is a critical component of the ARO network, enabling both high availability and economic efficiency.

Why is the Matching Algorithm so important? Users have varying levels of willingness to pay for their needs, distinguishing demand into high-value and low-value categories. Simultaneously, the cost of network resources fluctuates constantly. These changes are unpredictable and do not automatically align with demand. The efficiency of matching directly impacts the network operator’s ROI, which is a life-or-death issue.

From a resource scheduling perspective, matching high-value demand with low-cost nodes is key to success. This is the ARO PeerRouting Engine’s killer capability, achieved through nearly a decade of practical service experience.

#### Perceive, Before It Happens

The ARO PeerRouting Engine achieves effective matching through a set of mature technologies by the ARO team:

* **High-speed Content Transmission within P2P Networks**: This capability has been covered in detail in the previous chapter.
* **Transmission Channel Scheduling**: The ARO PeerRouting Engine is adept at managing and optimizing transmission channels, as previously described.
* **Channel Perception based on Partial Information**: A core challenge in P2P networks is the ability to infer overall channel width from limited data (e.g., estimating channel capacity based on data fragments over a set period). The ARO PeerRouting Engine incorporates a **Full-chain Perception Algorithm**, which adjusts content transmission strategies based on real-time perception results. This enhancement significantly boosts handshake efficiency while reducing transmission loss and latency.
* **Pre-emptive Deployment**: Beyond “fragmental perception”, the PeerRouting Engine’s advanced capability lies in **Pre-emptive Deployment**. Traditional network solutions generally process demand before matching resources, while the PeerRouting Engine leverages a **Packing Algorithm** that pre-deploys resources, improving utilization by over 50%. This strategic foresight enables optimal resource allocation well in advance of demand spikes.