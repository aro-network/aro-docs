---
id: architecture
title: Architecture
hide_table_of_contents: false
---
import useBaseUrl from '@docusaurus/useBaseUrl';

# Architecture

Aro Network builds the edge cloud infrastructure network based on this three-layer model:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/technology/arch_stack.png')} style={{maxWidth: '800'}} />
</div>

### Resource Layer (Resource)

This is the foundation of Aro, composed of massive, distributed, and permissionless hardware resources. These resources provide the bandwidth, storage, and computing power that form the basis of edge cloud.

In the Resource Layer, we focus on solving two fundamental issues.

*   **Trust**:

    how to ensure that the large-scale distributed nodes can verify each other and trust verification results.
*   **Functionality**:

    In a network with high node heterogeneity, we need to effectively virtualize and containerize these nodes and establish a P2P transmission network capable of penetrating gateways and local networks.

### Open Layer (Ability)

This is where Aro takes action, serving as the entity focused on “orchestrate” network resources while optimizing the match between network resources and user demands.

At the base of this layer, we first need a trust mechanism to verify the workloads of nodes within the network. Building on this, we create a capability abstraction engine, known as **Aro Middleware**.

The Aro Middleware comprises three core components:

1. Aro introduces **PeerHVM (Peer Heterogeneous Virtual Machine)** to abstract P2P network resources, providing a standardized capability output. With the support of PeerHVM, the capabilities of the Aro network can be “deployed” across dispersed nodes, forming a unified, interoperable structure.
2. Aro introduces **PeerDTS**, an enhanced large-scale P2P network transmission protocol, that enables massive content transfer within the capability layer abstracted by PeerHVM.
3. Aro introduces **PeerRouting**, a dynamic, pre-emptive response engine, that precisely matches resources to the constantly changing user demand.

### Application Layer (Service)

Based on the capability abstraction provided by the engine and its corresponding on-chain interfaces, we have built user interaction interfaces, service components, and application APIs for CDN services, cloud storage services, AI models, runtime transmission services, and compute routing services from third parties.

As outlined in the three-phase approach described earlier, this layer is **open** to the developer community in creating various applications, fulfilling the vision of Universal Acceleration.

### Resource, Trust, and Service

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/technology/resource_trust_service.png')} style={{maxWidth: '800'}} />
</div>

This **Resource-Trust-Service** model is a simple, clear abstraction that outlines how Aro organizes edge hardware resources into an edge cloud network and highlights the core technologies involved.

The **Resource** layer focuses on virtualizing and standardizing the large-scale heterogeneous **PeerNode** resources to provide decentralized compute capabilities, and use **GPoW**(Guarantee Proof of Work) protocol to provide trusted verifiable work proofs.

The **Trust** layer utilizes the **GPoS**(Guarantee Proof of Stake) protocol to provide trusted on-chain work proof verification, settlement, and governance.

The **Service** layer utilizes the **PeerHVM**, **PeerDTS**, and **PeerRouting** middleware to provide services like CDN, AiDN, Routing, etc based on the trusted verifiable **PeerNodes**.

Aro combines these capabilities to build a reliable AI acceleration network, leveraging industry-best practices to maximize performance and cost efficiency.