---
id: aro-client-faq-troubleshooting
title: "FAQ & Troubleshooting"
sidebar_label: "FAQ & Troubleshooting"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

# FAQ & Troubleshooting

- **My Dashboard->Node Detail page shows error message: "This Agent version is not supported." or "Outdated Agent version detected."**   
  The issue arises from an outdated version of the Agent software in your ARO Client. Ensure your node is connected to the internet and allow time for automatic updates. If the problem continue to exist, ask official channels for help. 

- **My Dashboard->Node Detail page shows error message: "Restricted Region Detected!"**  
  This is because we have detected that your node is operating in a restricted region, according to certain legal restrictions. This may result in the cancellation of your rewards. For more details on restricted regions, please refer to our <Link to="/appendix/terms-of-use">Terms of Use</Link>.
  
- **My Dashboard->Node Detail page shows error message: "PCDN Client program not found."**  
  You need to install a PCDN Worker client to run PCDN services on your ARO Client. See <Link to="/node-operator-guide/aro-client/aro-client-pcdn-worker">PCDN Worker tutorials</Link> for more information.
  
- **My ARO Client goes offline when the Debian system turns to auto sleep.**  
  This could happen if you have not appropriately configure the power settings on your Debian system. Refer to the <Link to="/node-operator-guide/aro-client/aro-client-debian/#5-recommended-settings-on-debian-system">recommended Debian settings</Link> for tutorials. 

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