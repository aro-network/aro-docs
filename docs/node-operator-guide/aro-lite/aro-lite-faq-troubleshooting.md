---
id: aro-lite-faq-troubleshooting
title: "FAQ & Troubleshooting"
sidebar_label: "FAQ & Troubleshooting"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

# FAQ & Troubleshooting

- **My Dashboard->Node Detail page shows error message: "Restricted Region Detected!"**  
  This is because we have detected that your node is operating in a restricted region, according to certain legal restrictions. This may result in the cancellation of your rewards. For more details on restricted regions, please refer to our <Link to="/appendix/terms-of-use">Terms of Use</Link>.

- **How to Improve My ARO Lite Node's Performance?**  
  The performance of ARO Lite nodes depends on three key factors:
	1. **Uptime**: Ensure your node stays online to maximize rewards.
	2. **Quality of Network Connectivity**: We evaluate network quality based on metrics like latency and packet loss rate. Lower latency and minimal packet loss improve performance.
	3. **IP Address Exclusivity**: Running multiple ARO Lite nodes under the same public IP significantly reduces rewards, as we value unique public IPs as a critical resource provided by ARO Lite nodes.

- **What network ports should be open?**  
  To ensure proper connectivity and performance, please configure your firewall to allow the following inbound and outbound ports:

  ✅ **Inbound Ports**
   - None

  🚀 **Outbound Ports**
   - **TCP:** `443`
