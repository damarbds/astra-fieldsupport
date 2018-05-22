export const navItems = [
  {
    name: 'Track FS Position',
    url: '/track-fs',
    icon: 'icon-location-pin'
  },
  {
    name: "Report",
    url: "/report",
    icon: "icon-docs"
  },
  {
    name: 'News / Alert',
    url: '/news/list',
    icon: 'icon-envelope-letter'
  },
  // {
  //   name: 'Master Data',
  //   url: '/data-master',
  //   icon: 'icon-puzzle'
  // },
  // {
  //   name: 'Master Alert',
  //   url: '/master-alert',
  //   icon: 'icon-docs'
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       url: '/buttons/brand-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  {
    name: 'Master Data',
    url: '/master',
    icon: 'icon-puzzle',
    children: [
      {
        name: "Master Options",
        url: "/data-master",
        icon: "icon-docs"
      },
      {
        name: 'Master Alert',
        url: '/master-alert',
        icon: 'icon-puzzle'
      }
    ]
  }
];
