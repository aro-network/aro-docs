### Introduction

This article explains how contributions from ARO nodes are evaluated and quantified. The resources and work a node provides to the network can be exchanged for network incentives. During the Testnet phase, these incentives are represented as **Jade points**.

When a large number of nodes are active on the network, rewards for each scoring period are distributed proportionally based on each node's **Contribution Score** (which serves as its weight in the allocation).

All node types—including ARO Desktop, ARO Mobile, ARO Pod, and ARO Client—follow the same standardized quantification and scoring criteria.

### General Rules

In the ARO Network, we introduce the concept of **scoring periods**.

At the end of each period, the entire network performs data statistics for the preceding cycle.

The primary goal of this data collection is to verify and quantify each node's resource contributions to the network during that period. These contributions are translated into a specific numerical value known as the **Contribution Score**.

When distributing the final rewards for the period (e.g., represented as **Jade points** during the Testnet phase), the total allocation is divided proportionally according to each node's **Contribution Score**, which serves as its weighting factor.

**Contribution Score = `ResourceRating` × `Uptime` × `AdjustmentFactors`**

Where:

- **`ResourceRating`** represents ARO's quantitative assessment of the value of the resources provided by the node.
- **`Uptime`** measures the duration for which the node was effectively operational and online.
- **`AdjustmentFactors`** encompass all additional elements that influence the overall contribution evaluation (such as network quality, bandwidth, NAT type, and other performance modifiers).

These three components work together to produce the final, comprehensive contribution assessment.

### Resource Rating

**`ResourceRating`** represents ARO's quantitative evaluation of the value of the resources provided by the node.

ARO considers the core resources contributed by nodes to be genuine **residential resources** from the network edge. Therefore, the IP address serves as the primary and most important evaluation factor.

**`ResourceRating`** = `IPScore` × `IPQualityFactor` + `OtherResourceRatingItems`

Where:

- **`IPScore`** is an assessment of the inherent nature and quality of the IP resource itself, based on factors such as IP type and geographic location (with potential future adjustments).
    - **Datacenter-class**: 20 points
    - **ISP-class**: 30 points
    - **Residential-class**: 50 points
    - **Mobile-class**: 60 points
    - In the future, `IPScore` may be adjusted based on **geographic location** or other factors. This will depend on whether the ARO Network considers certain IPs to be “more valuable,” leading to preferential weighting in the evaluation.
- **`IPQualityFactor`** is a multiplier that adjusts for IP quality, primarily accounting for special cases such as IPs with a history of negative records or regulation issues.
- **`OtherResourceRatingItems`** includes any additional factors that may significantly impact the evaluation of core resources. No specific items are currently defined or active in this category.

### Uptime

If we view the entire ARO Network as an edge cloud infrastructure, then **Uptime** effectively quantifies the duration each node contributes to the network. Overall, we measure a node's total contribution over a period using the intuitive and reasonable logic of **“Resources × Duration.”**

**Uptime** = `BaseUptime` × `UptimeStabilityFactor`

Where:

- **`BaseUptime`** represents the actual effective online duration of the node.
    
    For example, in a 4-hour scoring period, if your node is effectively online for 3 hours in total, then `BaseUptime` = 3 hours (i.e., 75% of the period).
    
    - It is important to note that ARO does not measure uptime simply by checking “whether the node stays online.” ARO adopts a **task-based approach**: Checker Nodes in the network periodically and randomly send specific tasks to each node at unpredictable but frequent intervals. Only successful completion of these tasks counts as “effectively online” and providing resources to the ARO Network during that time slot. These tasks are generally not complex, but they require the node to maintain basic connectivity, a stable network, and prompt responses. Due to their strong randomness and unpredictability, they are extremely difficult to fake, making cheating significantly harder.
- **`UptimeStabilityFactor`** is a stability bonus multiplier that rewards nodes with consistently long-term stable performance.
    - If a node misses fewer than 2 tasks in a scoring period (i.e., 0 or 1 miss), its performance in that period is considered “excellent.”
    - If the node achieves “excellent” performance in the most recent **6 consecutive** scoring periods (including the current one), then `UptimeStabilityFactor` = **1.2**.
    - If the node achieves “excellent” performance in the most recent **24 consecutive** scoring periods (including the current one), then `UptimeStabilityFactor` = **1.5**.
    - By default, this factor is **1.0**.

### Adjustment Factors

The **Adjustment Factors** are far from being minor or insignificant tweaks; on the contrary, they can have a substantial impact on your final score. Improving each individual factor can lead to meaningful increases in your node's rewards.

Specifically, we have defined several adjustment factors, and more may be introduced in the future based on actual network needs and observations. These factors are applied multiplicatively. For example, if we have Factor A, Factor B, Factor C, etc., their combined effect on the score is:

Factor A × Factor B × Factor C × …

- **Factor A: Bandwidth Factor (`BandwidthFactor`)**
    - **Meaning**: Assigns a multiplier based on the measured upload bandwidth of the user's node.
    - **Rules**:
        - 0–5 Mbps upload: `0` (effectively unusable)
        - 5–50 Mbps upload: `1` (baseline usable)
        - 50 Mbps upload: `1.3` (premium tier)
    - **Explanation**: Below 5 Mbps, the node is considered unable to provide meaningful edge service, so no rewards are earned. 5–50 Mbps is sufficient for most common crawling or web access tasks. Above 50 Mbps enables higher-bandwidth tasks (e.g., video scraping or streaming-related workloads), justifying an additional reward boost.
- **Factor B: Hardware Capability Factor (`HardwareFactor`)**
    - **Meaning**: Differentiates nodes based on their hardware capabilities and potential task execution performance.
    - **Rules**: Currently, no differentiation is applied. All nodes receive `HardwareFactor = 1.0` (no impact on rewards at this stage).
- **Factor C: IP Exclusivity Factor (`ExclusivityFactor`)**
    - **Meaning**: When multiple nodes are detected sharing the same IP address within a scoring period, the value of that IP resource is considered diluted, and each node's contribution score is adjusted downward accordingly.
    - **Rules**: If N nodes are identified as using the same IP in a given period, each of those nodes' final scores is divided by N.
    - **Purpose**: This implements a strict “no-arbitrage” principle to prevent users from multiplying rewards simply by running many nodes behind the same residential IP.
- **Factor D: NAT Type Factor (`NATFactor`)**
    - **Meaning**: The NAT type of a user's connection directly affects its ability to provide certain services (e.g., static IP forwarding, PCDN relay, etc.). Better NAT types receive an incentive.
    - **Rules**:
        - Public / full-cone NAT (capable of providing static IP services): `1.5`
        - All other NAT types: `1.0`
- **Factor E: Service / Business Factor (`ServiceFactor`)**
    - **Meaning**: Allows for targeted incentives or disincentives for specific nodes or resource types based on real business or network requirements.
    - **Rules**: Currently, no differentiated incentives or penalties are applied. This factor defaults to `1.0`.

### **About ARO Lite**

Since **ARO Lite** is no longer provided or actively distributed to new users, but there are still existing ARO Lite nodes operating within the network, we continue to apply the original evaluation logic to them for fairness.

You can think of ARO Lite as a special “exception” case in the current system.