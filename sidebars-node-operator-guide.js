module.exports = {
  nodeOperatorSidebar: [
    {
      type: 'category',
      label: 'Become an ARO Node Operator',
      collapsible: true,
      collapsed: true,
      items: [
        'become-operator/idle-bandwidth',
        'become-operator/get-account',
        'become-operator/choose-node',
        'become-operator/aro-dashboard',
      ],
    },
    {
      type: 'category',
      label: 'ARO Pod',
      collapsible: true,
      collapsed: true,
      items: [
        'aro-pod/get-aro-pod',
        'aro-pod/aro-pod-installation-guide',
        'aro-pod/aro-pod-faq-troubleshooting',
      ],
    },
    'aro-link',
    {
      type: 'category',
      label: 'ARO Client',
      collapsible: true,
      collapsed: true,
      items: [
        'aro-client/choose-installation-method',
        'aro-client/aro-client-installation-guide-bare-metal',
        'aro-client/aro-client-installation-guide-vm',
        'aro-client/aro-client-installation-guide-installer-package',
        'aro-client/aro-client-faq-troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'ARO Lite',
      collapsible: true,
      collapsed: true,
      items: [
        'aro-lite/get-aro-lite',
        'aro-lite/aro-lite-installation-guide',
        'aro-lite/aro-lite-faq-troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Improve Your Performance',
      collapsible: true,
      collapsed: true,
      items: [
        'improve-performance/network-nat-optimization',
        'improve-performance/router-nat-upnp-dmz-setup',
      ],
    },
  ],
};