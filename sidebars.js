module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: true,  // 改为 true，默认收起
      items: ['introduction/get-started'],
    },
    {
      type: 'category',
      label: 'ARO Network',
      collapsible: true,
      collapsed: true,  // 改为 true
      items: [
        'aro-network/aro-overview',
        'aro-network/architecture',
        'aro-network/network',
        'aro-network/work-proof',
        'aro-network/consensus',
        'aro-network/peer-edge',
      ],
    },
    {
      type: 'category',
      label: 'Node Operator Guide',
      collapsible: true,
      collapsed: true,  // 改为 true
      items: [
        {
          type: 'category',
          label: 'Become a Node Operator',
          collapsible: true,
          collapsed: true,  // 子类别保持 true
          items: [
            'node-operator-guide/become-operator/idle-bandwidth',
            'node-operator-guide/become-operator/get-account',
            'node-operator-guide/become-operator/choose-node',
            'node-operator-guide/become-operator/aro-dashboard',
            'node-operator-guide/become-operator/webconsole',
          ],
        },
        {
          type: 'category',
          label: 'ARO Pod',
          collapsible: true,
          collapsed: true,
          items: [
            'node-operator-guide/aro-pod/get-aro-pod',
            'node-operator-guide/aro-pod/aro-pod-installation-guide',
            'node-operator-guide/aro-pod/aro-pod-faq-troubleshooting',
          ],
        },
        'node-operator-guide/aro-link',
        {
          type: 'category',
          label: 'ARO Client',
          collapsible: true,
          collapsed: true,
          items: [
            'node-operator-guide/aro-client/aro-client-introduction',
            'node-operator-guide/aro-client/aro-client-debian',
            'node-operator-guide/aro-client/aro-client-installation',
            'node-operator-guide/aro-client/aro-client-faq-troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'ARO Lite',
          collapsible: true,
          collapsed: true,
          items: [
            'node-operator-guide/aro-lite/get-aro-lite',
            'node-operator-guide/aro-lite/aro-lite-installation-guide',
            'node-operator-guide/aro-lite/aro-lite-faq-troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'Improve Your Performance',
          collapsible: true,
          collapsed: true,
          items: [
            'node-operator-guide/improve-performance/network-optimization',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsible: true,
      collapsed: true,  // 改为 true
      items: ['developer-guide/overview'],
    },
    {
      type: 'category',
      label: 'Edge Cloud Solutions',
      collapsible: true,
      collapsed: true,  // 改为 true
      items: ['edge-cloud-guide/edge-cloud-solutions'],
    },
    {
      type: 'category',
      label: 'Campaign Hub',
      collapsible: true,
      collapsed: true,  // 改为 true
      items: [
        'campaign-hub/aro-testnet',
        'campaign-hub/jade-rewards',
        'campaign-hub/referral-program',
      ],
    },
    {
      type: 'category',
      label: '$ARO Tokenomics',
      collapsible: true,
      collapsed: true,  // 改为 true
      items: ['aro-tokenomics/tokenomics'],
    },
    {
      type: 'category',
      label: 'Appendix',
      collapsible: true,
      collapsed: true,  // 改为 true
      items: [
        'appendix/useful-links',
        'appendix/terms-of-use',
        'appendix/privacy-policy',
      ],
    },
  ],
};