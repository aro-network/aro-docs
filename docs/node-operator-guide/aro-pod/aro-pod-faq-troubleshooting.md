---
id: aro-pod-faq-troubleshooting
title: "FAQ & Troubleshooting"
sidebar_label: "FAQ & Troubleshooting"
---
import useBaseUrl from '@docusaurus/useBaseUrl';

# FAQ & Troubleshooting

- **What network ports should be open?**  
  To ensure proper connectivity and performance, please configure your firewall to allow the following inbound and outbound ports:

  ✅ **Inbound Ports**
   - **UDP:** All ports  
   - **TCP:** `80`, `443`, `9500–9700`

  🚀 **Outbound Ports**
   - **UDP:** `40001–40100`  
   - **TCP:** `443`, `30002`, `40001–40100`