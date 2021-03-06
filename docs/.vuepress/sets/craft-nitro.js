module.exports = {
  title: "Craft Nitro Documentation",
  setTitle: "Craft Nitro",
  handle: "nitro",
  icon: "/docs/icons/nitro.svg",
  baseDir: "nitro",
  versions: [
    ["2.x", { label: "2.x" }],
    ["1.x", { label: "1.x" }]
  ],
  defaultVersion: "1.x",
  searchPlaceholder: "Search the Nitro docs (Press “/” to focus)",
  primarySet: true,
  sidebar: {
    "2.x": {
      "/": [
        {
          title: "Introduction",
          collapsable: false,
          children: ["", "installation", "updating", "upgrade"]
        },
        {
          title: "Using Nitro",
          collapsable: false,
          children: ["usage", "commands", "composer", "node", "share"]
        },
        {
          title: "Databases",
          collapsable: false,
          children: [["databases", "Connecting a GUI"], "multiple-databases", ["backups", "Backing Up"], ["importing", "Importing"]]
        },
        {
          title: "Services",
          collapsable: false,
          children: ["services/redis", "services/mailhog", "services/dynamodb", "services/minio"]
        },
         {
           title: "Debugging",
           collapsable: false,
           children: [["xdebug", "Xdebug"], ["ray", "Ray"]]
         },
        {
          title: "Advanced Settings",
          collapsable: false,
          children: [["php-settings", "PHP Settings"], ["extensions", "PHP Extensions"], ["plugin-development", "Plugin Development"], ["containers", "Custom Containers"], "customizing"]
        },
      ]
    },
    "1.x": {
      "/": [
        {
          title: "Introduction",
          collapsable: false,
          children: ["", "installation", "updating"]
        },
        {
          title: "Using Nitro",
          collapsable: false,
          children: ["usage", "commands", "blackfire", "xdebug", "mailhog", "advanced"]
        },
      ]
    },
  }
};
