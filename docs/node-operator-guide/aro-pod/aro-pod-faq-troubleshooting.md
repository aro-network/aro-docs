---
id: aro-pod-faq-troubleshooting
title: "FAQ & Troubleshooting"
sidebar_label: "FAQ & Troubleshooting"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

# FAQ & Troubleshooting
- **My Dashboard->Node Detail page shows error message: "Node key lost, press 'Restore' button to resume."**  
  The issue stems from an accidentally omitted key on your node. Locate the 'Restore' button in the upper-right corner of the Node Detail page to reinstate the key. The ARO Pod will return to operational status shortly.

- **My Dashboard->Node Detail page shows error message: "This Agent version is not supported." or "Outdated Agent version detected."**   
  The issue arises from an outdated version of the Agent software in your ARO Pod. Ensure your ARO Pod is connected to the internet and allow time for automatic updates. Restarting the ARO Pod may resolve the issue in some cases.

- **My Dashboard->Node Detail page shows error message: "Restricted Region Detected!"**  
  This is because we have detected that your node is operating in a restricted region, according to certain legal restrictions. This may result in the cancellation of your rewards. For more details on restricted regions, please refer to our <Link to="/appendix/terms-of-use">Terms of Use</Link>.
  
- **My Dashboard->Node Detail page shows error message: "Agent internal error".**  
  There is an internal error in the node agent. Please provide your node's Serial Number and consult the technical support team from community channels (e.g. Official Discord).

- **What network ports should be open?**  
  To ensure proper connectivity and performance, please configure your firewall to allow the following inbound and outbound ports:

  ✅ **Inbound Ports**
   - **UDP:** All ports  
   - **TCP:** `80`, `443`, `9500–9700`

  🚀 **Outbound Ports**
   - **UDP:** `40001–40100`  
   - **TCP:** `443`, `30002`, `40001–40100`