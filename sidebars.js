/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [
    {
      type: 'category',
      label: 'Home',
      collapsed: false,
      items: [
        { type: 'doc', id: 'home/overview', label: 'Overview' },
        { type: 'doc', id: 'home/the-new-edge', label: 'The New Edge' },
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
        { type: 'doc', id: 'technologies/ai-transformers', label: 'AI Transformers' },
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
        { type: 'doc', id: 'user-guides/run-node', label: 'Run an Edge Node' },
        { type: 'doc', id: 'user-guides/dashboard', label: 'User Dashboard' },
        { type: 'doc', id: 'user-guides/device-setup', label: 'Device Setup' },
        { type: 'doc', id: 'user-guides/software-setup', label: 'Software Setup' },
        { type: 'doc', id: 'user-guides/node-console', label: 'Node Console' },
      ],
    },
    {
      type: 'category',
      label: 'Token',
      collapsed: true,
      items: [
        { type: 'doc', id: 'token/reach', label: '$REACH' },
      ],
    },
    {
      type: 'category',
      label: 'Campaigns',
      collapsed: true,
      items: [
        { type: 'doc', id: 'campaigns/devnet', label: 'Devnet' },
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
