module.exports = {
  serverSidebar: [
    {
      type: "category",
      label: "Server",
      collapsed: false,
      items: [
        "server/introduction",
        "server/quick-install",
        "server-architecture",
        "server/versions-and-dependencies",
        "server/options",
        "server/configuration",
        "server/production-deployment",
        "server/security",
        "server/workflow-search",
        "server/elasticsearch-setup",
        "server/namespaces",
        "server/multi-cluster",
        "server/archive-data",
        "server/event-types",
      ],
    },
    {
      type: "category",
      label: "Quick links",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Concepts",
          href: "/docs/concepts/introduction",
        },
        {
          type: "link",
          label: "SDKs",
          href: "/application-development",
        },
        {
          type: "link",
          label: "System tools",
          href: "/docs/system-tools/introduction",
        },
        {
          type: "link",
          label: "Additional resources",
          href: "/docs/external-resources",
        },
      ],
    },
  ],
  toolingSidebar: [
    {
      type: "category",
      label: "System Tools",
      collapsed: false,
      items: [
        "system-tools/introduction",
        "system-tools/tctl",
        "system-tools/web-ui",
      ],
    },
    {
      type: "category",
      label: "Quick links",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Concepts",
          href: "/docs/concepts/introduction",
        },
        {
          type: "link",
          label: "Server",
          href: "/docs/server/introduction",
        },
        {
          type: "link",
          label: "SDKs",
          href: "/application-development",
        },
        {
          type: "link",
          label: "Additional resources",
          href: "/docs/external-resources",
        },
      ],
    },
  ],
  goSidebar: [
    {
      type: "category",
      label: "Go",
      collapsed: false,
      items: [
        "go/introduction",
        {
          type: "link",
          label: "Reference",
          href: "https://pkg.go.dev/go.temporal.io/sdk",
        },
        {
          type: "link",
          label: "Samples library",
          href: "/docs/samples-library/#go",
        },
        {
          type: "category",
          label: "Tutorials",
          collapsed: false,
          items: [
            "go/tutorial-prerequisites",
            "go/run-your-first-app-tutorial",
            "go/hello-world-tutorial",
            "go/sdk-video-tutorial",
            {
              type: "link",
              label: "Build an eCommerce app",
              href: "/blog/tags/go-ecommerce-tutorial",
            },
          ],
        },
        "go/workflows",
        "go/activities",
        "go/workers",
        "go/task-queues",
        "go/signals",
        "go/queries",
        "go/retries",
        "go/error-handling",
        "go/selectors",
        "go/side-effect",
        "go/testing",
        "go/versioning",
        "go/sessions",
        "go/distributed-cron",
        "go/tracing",
        "go/search-apis",
      ],
    },
    {
      type: "category",
      label: "Quick links",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Concepts",
          href: "/docs/concepts/introduction",
        },
        {
          type: "link",
          label: "Server",
          href: "/docs/server/introduction",
        },
        {
          type: "link",
          label: "SDKs",
          href: "/application-development",
        },
        {
          type: "link",
          label: "System tools",
          href: "/docs/system-tools/introduction",
        },
        {
          type: "link",
          label: "Additional resources",
          href: "/docs/external-resources",
        },
      ],
    },
  ],
  javaSidebar: [
    {
      type: "category",
      label: "Java",
      collapsed: false,
      items: [
        "java/introduction",
        {
          type: "link",
          label: "Reference",
          href: "https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/index.html",
        },
        {
          type: "link",
          label: "Samples library",
          href: "/docs/samples-library/#java",
        },
        {
          type: "category",
          label: "Tutorials",
          collapsed: false,
          items: [
            "java/tutorial-prerequisites",
            "java/run-your-first-app-tutorial",
            "java/hello-world-tutorial",
          ],
        },
        "java/workflows",
        "java/activities",
        "java/workers",
        "java/task-queues",
        "java/signals",
        "java/queries",
        "java/versioning",
        "java/side-effect",
        "java/distributed-cron",
        "java/testing-and-debugging",
      ],
    },
    {
      type: "category",
      label: "Quick links",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Concepts",
          href: "/docs/concepts/introduction",
        },
        {
          type: "link",
          label: "Server",
          href: "/docs/server/introduction",
        },
        {
          type: "link",
          label: "SDKs",
          href: "/application-development",
        },
        {
          type: "link",
          label: "System tools",
          href: "/docs/system-tools/introduction",
        },
        {
          type: "link",
          label: "Additional resources",
          href: "/docs/external-resources",
        },
      ],
    },
  ],
  phpSidebar: [
    {
      type: "category",
      label: "PHP",
      collapsed: false,
      items: [
        "php/introduction",
        {
          type: "link",
          label: "Samples library",
          href: "/docs/samples-library/#php",
        },
        "php/workflows",
        "php/activities",
        "php/task-queues",
        "php/workers",
        "php/signals",
        "php/queries",
        "php/retries",
        "php/error-handling",
        "php/side-effect",
        "php/versioning",
        "php/distributed-cron",
      ],
    },
    {
      type: "category",
      label: "Quick links",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Concepts",
          href: "/docs/concepts/introduction",
        },
        {
          type: "link",
          label: "Server",
          href: "/docs/server/introduction",
        },
        {
          type: "link",
          label: "SDKs",
          href: "/application-development",
        },
        {
          type: "link",
          label: "System tools",
          href: "/docs/system-tools/introduction",
        },
        {
          type: "link",
          label: "Additional resources",
          href: "/docs/external-resources",
        },
      ],
    },
  ],
  nodejsSidebar: [
    {
      type: "category",
      label: "Node (alpha)",
      collapsed: false,
      items: [
        "node/introduction",
        {
          type: "link",
          label: "Reference",
          href: "https://nodejs.temporal.io",
        },
        "node/getting-started",
        {
          type: "category",
          label: "Tutorials",
          collapsed: false,
          items: ["node/hello-world"],
        },
        {
          type: "category",
          label: "Workflows",
          items: [
            "node/determinism",
            "node/versioning",
            "node/workflow-scopes-and-cancellation",
            "node/workflow-external-dependencies",
          ],
        },
        "node/activities",
        {
          type: "doc",
          id: "node/package-initializer",
          label: "Package initializer",
        },
        "node/tls",
        "node/logging",
      ],
    },
    {
      type: "category",
      label: "Quick links",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Concepts",
          href: "/docs/concepts/introduction",
        },
        {
          type: "link",
          label: "Server",
          href: "/docs/server/introduction",
        },
        {
          type: "link",
          label: "SDKs",
          href: "/application-development",
        },
        {
          type: "link",
          label: "System tools",
          href: "/docs/system-tools/introduction",
        },
        {
          type: "link",
          label: "Additional resources",
          href: "/docs/external-resources",
        },
      ],
    },
  ],
  coreConcepts: [
    {
      type: "category",
      label: "Core concepts",
      collapsed: false,
      items: [
        "concepts/introduction",
        "concepts/workflows",
        "concepts/activities",
        "concepts/workers",
        "concepts/task-queues",
        "concepts/signals",
        "concepts/queries",
      ],
    },
    {
      type: "category",
      label: "Additional resources",
      collapsed: false,
      items: [
        "samples-library",
        "external-resources",
        "cadence-to-temporal",
        "glossary",
      ],
    },

    {
      type: "category",
      label: "Quick links",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Server",
          href: "/docs/server/introduction",
        },
        {
          type: "link",
          label: "SDKs",
          href: "/application-development",
        },
        {
          type: "link",
          label: "System tools",
          href: "/docs/system-tools/introduction",
        },
      ],
    },
  ],
  coreConceptsNew: [
    {
      type: "category",
      label: "Concepts WIP",
      collapsed: true,
      items: ["concepts-new/introduction", "concepts-new/history-entries"],
    },
  ],
};
