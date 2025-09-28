---
id: aro-testnet
title: "ARO Testnet"
sidebar_label: "ARO Testnet"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

# ARO Testnet Campaign Guide

## What is ARO Testnet

**ARO Testnet** is now live! 

ARO’s decentralized Edge Cloud journey unfolds across three stages: `Previewnet`, `Testnet` **(where we are now)**, and `Mainnet`, each with a unique mission.

- **Previewnet**: Welcomes you to discover ARO, try its features, and prepare for the next phase while we recruit community members and identify early contributors.
- **Testnet**: Kicks off ARO’s initial expansion, testing real-world, commercialized resource delivery with numerous edge nodes across regions, and refining technology and economics, in a live test mode.
- **Mainnet**: Signals ARO’s full launch, expanding node coverage and offering massive scale edge services, embodying our “Value-added Bandwidth” vision with AI-powered enhancements.

## How Incentives Work in the ARO Testnet

The ARO Testnet introduces two parallel incentive systems—the **Jade System** and the **Badge System**—designed to reward node operators, community members (ARONAUTs), partners, and other contributors during the Testnet phase.

### Jade System for Resource Growth

The ARO Network is a decentralized Edge Cloud, and the final goal of the Testnet is to onboard as many edge resources (such as unused internet bandwidth) as possible to validate the business model. During the Testnet, `Jade` serves as the primary quantifiable reward for running ARO Nodes of any type and contributing edge resources.

The ARO Network measures the internet bandwidth and data traffic of active nodes, awarding `Jade` points based on each node’s quantifiable workload and network performance.

The Testnet is a true "Mining Competition" for earning Jade rewards. All `Edge Nodes` (`ARO Pod`, `ARO Client`, `ARO Link`) compete for a major Jade rewards pool, which emits `90000000` Jades daily. Meanwhile, all `Checker Nodes` (`ARO Lite`) share a separate rewards pool, representing `10000000` Jades daily emission.

The mining competition ensures a fair opportunity for all ARO Nodes from the first day to the final day of the Testnet phase.

> The Mining Pool and its rules, as outlined above, are established for Testnet Sprint One. Rules may vary for subsequent Sprints during the Testnet phase. Please consult the official documentation or announcements for the most up-to-date information.


### Badges for Community Growth

The Testnet also features a **Badge System**, which awards `Badges` to users who contribute to the network, community, and broader ARO ecosystem.

Eligible contributions for earning Badges are diverse, ensuring that exceptional efforts beyond providing edge resources are recognized and rewarded through ARO’s comprehensive incentive system.

Check your Badge collection on the **Dashboard->Campaign** page.

Badges are non-transferable.

### Future Rewards

**Both Jades and Badges** are key metrics for determining eligibility for future drops after the Testnet ends.

`5%` of the total supply of `$ARO` tokens will be allocated to all pre-TGE (before `$ARO` token can be utilized as an incentives to edge resource providers) users for their valuable support and contributions to the development of the ARO Network.

### For Users from Previewnet

For users who joined the ARO Network during the Previewnet phase: your user accounts, referrals, Jade rewards (including `Jade in lock`), connected social accounts, and completed tasks will seamlessly carry over to the Testnet environment.

Jades earned in the Previewnet will be migrated to the Testnet, with an amplification factor applied as a special bonus for early adopters. All Jades emitted in the Previewnet will be migrate to the Testnet, including `Jade in Lock`.

For `Jade in Lock` carried over from the Previewnet: Unlock these by running any type of ARO Node in the Testnet for approximately 90 days. For example, if you earned `Jade in Lock` by ordering ARO Pods in the Previewnet, running an ARO Pod for about 90 days will unlock all those Jades. When the Referees unlock their `Jade in Lock`, the corresponding Referral Bonus (`15%` for direct referrals and `2%` for 2-tier referrals) will be released to the Referrer. 

## How Nodes Are Quantified for Mining Rewards

### For Edge Nodes (ARO Pod, ARO Link, ARO Client):

**The Principle:** Edge Nodes are evaluated primarily by the traffic allocated to them, reflecting their edge resources contribution to Edge Services on ARO Network.

**Traffic Scheduling Mechanism:** Edge Services are in strong favor of Edge Nodes that display **substantial bandwidth** (for strong content delivery capability), **favorable NAT configurations** (for high-quality internet access), and **consistent performance** (for stable & reliable service). These factors determine the traffic schedules by Edge Service Schedulers, directly affecting node rewards.

**Goal of "Sprint 1" (the first stage of Testnet):** We focus on recruiting edge resources globally (for real-world edge service readiness). We prioritize **Bandwidth**, **NAT types**, and **Performance Consistency** as key metrics in this stage for traffic scheduling and reward determination.

`traffic_scheduling_rate` = `max_bandwidth` * `NAT_type_factor` * `consistency_factor` * `edge_service_factor`

- `traffic_scheduling_rate`: The rate of traffic scheduled to the Edge Node from the Edge Service Schedulers.
- `max_bandwidth`: The maximum of bandwidth available provided by the Edge Node, based on the time-averaged measurements during a certain period of time.
- `NAT_type_factor`: A factor determined by the detected NAT Type of the Edge Node. Better NAT Types enjoy higher factor. 
	- Factor range: `1~2`. 
- `consistency_factor`: A factor determined by the performance consistency, based on multiple metrics such as bandwidth, uptime, etc., during a considerably long period of time for the Edge Node.
- `edge_service_factor`: A factor determined by the actual business demand from Edge Services on your Edge Node. This factor may vary from regions to regions. This factor may change dynamically based on the real-world demand change. Generally, if you are running Edge Nodes in the region that has higher business demand for Edge Services, you enjoy a higher factor accordingly.   
	- For the Testnet Sprint 1 (as we focus on recruiting edge resources for real-world business readiness), the `edge_service_factor` is set to `0.1`.
	- In the future, real-world edge services apply higher `edge_service_factor`.


> For more details on Edge Node performance improvement, please refer to  <Link to="/node-operator-guide/improve-performance/network-optimization">Edge Node Optimization Guide</Link>.


### For ARO Lites:

ARO Lites operate distinctly from Edge Nodes and do not compete directly with Edge Nodes. Their rewards are based on factors such as `uptime`, network stability (measured by metrics like `latency` and `packet loss rate`), and exclusivity of their `IP address` resources. 

In the future, ARO Lites are expected to take on expanded roles beyond Checker Nodes, complementing Edge Nodes and uniquely contributing to the maintenance and growth of the ARO Network’s edge infrastructure.



## Things You Can Do in the Testnet

Boost your Jade and Badge rewards through engaging activities:

1. **Join the ARO Community—Become an ARONAUT!**  
   Create an ARO account, connect your social accounts, follow our X/Twitter, and join our Telegram group and Discord channels.

2. **Deploy and Run an ARO Node—The More the Better!**  
   The Testnet is the ultimate stage for your ARO Nodes, regardless of type. Set up and optimize your ARO Nodes to compete for daily Jade reward emissions!

3. **Get Extra Bonus from the Referral Program**  
   Invite friends through the **Referral Program** to earn commissions: `15%` from direct referrals and `2%` from second-tier invites in Jades. High-quality referrals may also earn you exclusive Badges.

4. **Contribute More to the ARO Community**  
   Beyond Jades, unlock exclusive rewards like Badges, NFTs, and other surprise perks by staying active—contribute through community management, writing articles, creating tutorials, and more. Your outstanding efforts will be recognized!

## How to Get Started

### Sign Up

[**Sign Up for an ARO Account**](https://dashboard.aro.network) is all you need to get started.

If you have any questions, please follow <Link to="/node-operator-guide/become-operator/aro-dashboard">**ARO Dashboard User Guide**</Link>.

### Follow Instructions

Follow our instructions and user guides to begin your ARO journey!

- <Link to="/node-operator-guide/become-operator/choose-node">Learn about **ARO Node types and choose which type is best for you**</Link>
- <Link to="/node-operator-guide/aro-pod/get-aro-pod">Get an **ARO Pod** and make it ready for mining</Link>
- <Link to="/node-operator-guide/aro-client/aro-client-introduction">Deploy an **ARO Client** on your machine or server</Link>
- <Link to="/node-operator-guide/aro-lite/get-aro-lite">Run an **ARO Lite** extension on your Chrome browser</Link>

## FAQ

- **When does the Testnet end?**  
  The ARO Testnet is expected to last approximately 180 days. The actual schedule may vary due to various factors. Follow our official announcements for the latest updates.
  
  