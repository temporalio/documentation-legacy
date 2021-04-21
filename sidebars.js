module.exports = {
  serverSidebar: [
    'server/introduction',
    'server/quick-install',
    'server/production-deployment',
    'server-architecture',
    'server/versions-and-dependencies',
    'server/namespaces',
    'server/workflow-search',
    'server/elasticsearch-setup',
    'server/options',
    'server/security',
    'server/configuration',
    'server/archive-data',
    'server/event-types',
    {
      type: 'category',
      label: 'Quick links',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Concepts',
          href: '/docs/concept-overview',
        },
        {
          type: 'link',
          label: 'SDKs',
          href: '/application-development',
        },
        {
          type: 'link',
          label: 'System tools',
          href: '/docs/system-tooling-introduction',
        },
        {
          type: 'link',
          label: 'Additional resources',
          href: '/docs/external-resources',
        },
      ],
    },
  ],
  toolingSidebar: [
    'system-tooling-introduction',
    'tctl',
    'web-ui',
    {
      type: 'category',
      label: 'Quick links',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Concepts',
          href: '/docs/concept-overview',
        },
        {
          type: 'link',
          label: 'Server',
          href: '/docs/server/introduction',
        },
        {
          type: 'link',
          label: 'SDKs',
          href: '/application-development',
        },
        {
          type: 'link',
          label: 'Additional resources',
          href: '/docs/external-resources',
        },
      ],
    },
  ],
  goSidebar: [
    'go-sdk-introduction',
    {
      type: 'link',
      label: 'Reference',
      href: 'https://pkg.go.dev/go.temporal.io/sdk',
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: false,
      items: ['go-sdk-tutorial-prerequisites', 'go-run-your-first-app', 'go-hello-world', 'go-sdk-video-tutorial'],
    },
    {
      type: 'category',
      label: 'Basic concepts',
      collapsed: false,
      items: ['go-workflows', 'go-activities', 'go-workers', 'go-signals', 'go-queries'],
    },
    'go-sync-vs-async-start',
    'go-create-workflows',
    'go-child-workflows',
    'go-retries',
    'go-error-handling',
    'go-selectors',
    'go-continue-as-new',
    'go-side-effect',
    'go-testing',
    'go-versioning',
    'go-sessions',
    'go-distributed-cron',
    'go-tracing',
    'go-search-apis',
    {
      type: 'category',
      label: 'Quick links',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Concepts',
          href: '/docs/concept-overview',
        },
        {
          type: 'link',
          label: 'Server',
          href: '/docs/server/introduction',
        },
        {
          type: 'link',
          label: 'SDKs',
          href: '/application-development',
        },
        {
          type: 'link',
          label: 'System tools',
          href: '/docs/system-tooling-introduction',
        },
        {
          type: 'link',
          label: 'Additional resources',
          href: '/docs/external-resources',
        },
      ],
    },
  ],
  javaSidebar: [
    'java-sdk-introduction',
    {
      type: 'link',
      label: 'Reference',
      href: 'https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/index.html',
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: false,
      items: ['java-sdk-tutorial-prerequisites', 'java-run-your-first-app', 'java-hello-world'],
    },
    {
      type: 'category',
      label: 'Basic concepts',
      collapsed: false,
      items: ['java-activities'],
    },
    'java-quick-start',
    'java-workflow-interface',
    'java-implementing-workflows',
    'java-starting-workflow-executions',
    'java-versioning',
    'java-testing-and-debugging',
    'java-distributed-cron',
    {
      type: 'category',
      label: 'Quick links',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Concepts',
          href: '/docs/concept-overview',
        },
        {
          type: 'link',
          label: 'Server',
          href: '/docs/server/introduction',
        },
        {
          type: 'link',
          label: 'SDKs',
          href: '/application-development',
        },
        {
          type: 'link',
          label: 'System tools',
          href: '/docs/system-tooling-introduction',
        },
        {
          type: 'link',
          label: 'Additional resources',
          href: '/docs/external-resources',
        },
      ],
    },
  ],
  phpSidebar: [
    'php-sdk-introduction',
    {
      type: 'category',
      label: 'Basic concepts',
      collapsed: false,
      items: ['php-workers', 'php-signals', 'php-queries'],
    },
    'php-workflow-interface',
    'php-implementing-workflows',
    'php-activity-interface',
    'php-implementing-activities',
    'php-sync-vs-async-start',
    'php-activity-async-completion',
    'php-child-workflows',
    'php-retries',
    'php-error-handling',
    'php-continue-as-new',
    'php-side-effect',
    'php-versioning',
    'php-distributed-cron',
    {
      type: 'category',
      label: 'Quick links',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Concepts',
          href: '/docs/concept-overview',
        },
        {
          type: 'link',
          label: 'Server',
          href: '/docs/server/introduction',
        },
        {
          type: 'link',
          label: 'SDKs',
          href: '/application-development',
        },
        {
          type: 'link',
          label: 'System tools',
          href: '/docs/system-tooling-introduction',
        },
        {
          type: 'link',
          label: 'Additional resources',
          href: '/docs/external-resources',
        },
      ],
    },
  ],
  nodejsSidebar: [
    'node/introduction',
    {
      type: 'link',
      label: 'Reference',
      href: 'https://nodejs.temporal.io',
    },
    'node/getting-started',
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: false,
      items: ['node/hello-world'],
    },
    { type: 'doc', id: 'node/package-initializer', label: 'Package initializer' },
    'node/logging',
    'node/determinism',
    'node/versioning',
    'node/workflow-scopes-and-cancellation',
  ],
  coreConcepts: [
    {
      type: 'category',
      label: 'Core concepts',
      collapsed: false,
      items: [
        'concept-overview',
        'concept-workflows',
        'concept-activities',
        'concept-workers',
        'concept-task-queues',
        'concept-signals',
        'concept-queries',
      ],
    },
    {
      type: 'category',
      label: 'Additional resources',
      collapsed: false,
      items: ['external-resources', 'cadence-to-temporal', 'glossary'],
    },
    {
      type: 'category',
      label: 'Quick links',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Server',
          href: '/docs/server/introduction',
        },
        {
          type: 'link',
          label: 'SDKs',
          href: '/application-development',
        },
        {
          type: 'link',
          label: 'System tools',
          href: '/docs/system-tooling-introduction',
        },
      ],
    },
  ],
};
