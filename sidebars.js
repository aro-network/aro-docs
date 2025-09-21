/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [
    {
      type: 'category',
      label: 'Home',
      collapsed: false,
      items: [
        { type: 'doc', id: 'home/overview', label: 'Overview' },
        { type: 'doc', id: 'home/why-aro', label: 'Why ARO Network' },
      ],
    },
    {
      type: 'category',
      label: 'Technologies',
      collapsed: true,
      items: [
        { type: 'doc', id: 'technologies/architecture', label: 'Architecture' },
        { type: 'doc', id: 'technologies/network', label: 'Network' },
        { type: 'doc', id: 'technologies/work-proof', label: 'Work Proof' },
        { type: 'doc', id: 'technologies/consensus', label: 'Consensus' },
        { type: 'doc', id: 'technologies/peeredge', label: 'PeerEdge' },
      ],
    },
    {
      type: 'category',
      label: 'Edge Node',
      collapsed: true,
      items: [
        { type: 'doc', id: 'edge-node/introduction', label: 'Introduction' },
        { type: 'doc', id: 'edge-node/rewards', label: 'Rewards' },
        { type: 'doc', id: 'edge-node/types', label: 'Edge Node Types' },
        { type: 'doc', id: 'edge-node/device-specs', label: 'Device Specs' },
        { type: 'doc', id: 'edge-node/faq', label: 'FAQ' },
      ],
    },
    {
      type: 'category',
      label: 'User Guides',
      collapsed: true,
      items: [
        { type: 'doc', id: 'user-guides/run-node', label: 'Choose Your Node' },
        { type: 'doc', id: 'user-guides/dashboard', label: 'ARO Dashboard' },
        { type: 'doc', id: 'user-guides/device-setup', label: 'ARO Pod & ARO Link' },
        { type: 'doc', id: 'user-guides/software-setup', label: 'ARO Client' },
        { type: 'doc', id: 'user-guides/aro-lite', label: 'ARO Lite' },
        { type: 'doc', id: 'user-guides/node-console', label: 'Web Console' },
       { type: 'doc', id: 'user-guides/network-optimization', label: 'Network Optimization Guide' },
      ],
    },
    {
      type: 'category',
      label: 'Token',
      collapsed: true,
      items: [
        { type: 'doc', id: 'token/arotoken', label: '$ARO' },
      ],
    },
    {
      type: 'category',
      label: 'Campaigns',
      collapsed: true,
      items: [
        { type: 'doc', id: 'campaigns/previewnet', label: 'ARO Previewnet' },
        { type: 'doc', id: 'campaigns/jade', label: 'Jade Rewards' },
        { type: 'doc', id: 'campaigns/referral', label: 'Referral Program' },
        { type: 'doc', id: 'campaigns/pioneer', label: 'Pioneer Program' },
      ],
    },
    {
      type: 'category',
      label: 'Links',
      collapsed: true,
      items: [
        { type: 'doc', id: 'links/useful', label: 'Useful Links' },
      ],
    },
  ],
};

module.exports = sidebars;
