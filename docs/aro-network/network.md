---
id: network
title: "Network Topology"
sidebar_label: "Network Topology"
---
import useBaseUrl from '@docusaurus/useBaseUrl';

# Network Topology

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/aro-network/topology.png')} style={{maxWidth: '800'}} />
</div>

### Edge Node

**Edge Node** is the fundamental unit of the network. They are typically clients from home devices such as ARO Pods, ARO Links, laptops, NAS, etc..

Edge Nodes run in segmented regions based on their geo-locations and provide resources to end users close to them in distance.

Edge Nodes connect with each other via **PeerDTS Protocol**. This is essential to organizing a distributed edge cloud that meets the demands of large-scale P2P data transmission.

The detailed explanation of how Edge Nodes work:

1. Edge Nodes provide resources (network, computing, and storage) to the ARO Edge Cloud. This is especially rewarding for those who contributes their idle devices and network resources.
2. When Edge Nodes join the network, they are subject to implicit constraints, that is, they are asked to provide stable resources and service capabilities for the network.
3. Edge Nodes generate **Work Reports** on a time basis (the “report epoch”) that reflect their workloads. Edge Nodes cannot profit by simply forging Work Reports because multiple Keeper Nodes will later make final decisions through cross-validation from multiple sources, i.e. heartbeats, network traffic tracks, and random challenges.
4. Edge Nodes will be connecting to a randomly-assigned set of Keeper Nodes refreshed by every epoch. Edge Nodes cannot predict the exact set of Keeper Nodes assigned to them for the next epoch.

### Keeper Node

**Keeper Nodes** work as a group of guardians for the network, ensuring that the whole system reach consensus and keep away from any manipulation, cheating, attacks and malfunction.

Keeper Nodes work in segmented regions based on their geo-locations. Every Keeper Node should be assigned to a region where it is physically located to ensure high availability and service quality in that specific region.

There are two types of Keeper Nodes:

- The first type consists of large, high-performance, stable `Monitoring Nodes`. They typically run on rather capable network environment, perform comprehensie validation tasks and serve as the "ultimate arbiters" in maintaining the honest and orderly operation of the entire network.
- The second type consists of small, distributed, and numerous `Checker Nodes`. They flexibly and randomly "test" the behavior and resource capabilities of surrounding Edge Nodes, providing highly valuable assistance to large monitoring nodes and forming an organic complement in the network topology.

Generally, the key responsibility of a Keeper Node is:

1. Maintaining the public ledger on blockchain;
2. Ensuring the correctness of contract execution;
3. Keeping routine monitor session on multiple Edge Nodes within the region for real-time status tracking and work reports collecting;
4. Perform random challenges on Edge Nodes or Keeper Nodes cross-region.

### Blockchain

The blockchain (EVM) works as a public ledger that maintains key states of the network, especially regarding:

* Workload quantification
* Reward calculation & distribution
* $ARO token functions
* On-chain governance
* Orders & payments

### Geo-Regions

The ARO Network operates by **segmenting regions geographically**. This regional approach ensures that edge cloud resources are as physically close to end-users as possible, which is essential for maintaining high service quality and competitive costs. Consequently, ARO nodes are “localized” by nature.

Within the ARO Network, all nodes—including Edge Nodes and Keeper Nodes—must register their regional information before starting service and establish connections with other nodes in the same region.

As a decentralized, blockchain-based protocol, ARO maintains global states managed by the consensus layer (Keeper Nodes), which are recorded on-chain.

To balance geographic segmentation with security and trustlessness, ARO introduces a **hybrid verification system** on node workloads, with validation mechanisms both within and across regions.

Within a region, each Edge Node must maintain long-lasting websocket connections with multiple Keeper Nodes, periodically rotating connections based on an on-chain random function, making collusion difficult.

Given the challenges and costs of inter-regional communication, ARO uses a randomized challenge mechanism between regions. This mechanism utilizes small data packets to distribute randomly assigned challenges, cross-verifying that Edge Nodes provide genuine resources.

Lastly, all Keeper Nodes are fully interconnected to support global consensus.
