// Import with `import * as Sentry from "@sentry/nextjs"` if you are using ESM
import Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: "https://705366d817e157542116f77d00a022a8@o4509739783290880.ingest.us.sentry.io/4510827733254144",

  // Tracing must be enabled for agent monitoring to work
  tracesSampleRate: 1.0,
  // Add data like inputs and responses to/from LLMs and tools;
  // see https://docs.sentry.io/platforms/javascript/data-management/data-collected/ for more info
  sendDefaultPii: true,
});