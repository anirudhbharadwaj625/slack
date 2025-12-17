import "dotenv/config";

export const ENV = {
  PORT: process.env.PORT || 5001,
  MONGO_URI: process.env.MONGO_URI || "random_uri",
  NODE_ENV: process.env.NODE_ENV || "development",
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY || "random_key",
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY || "random_key",
  STREAM_API_KEY: process.env.STREAM_API_KEY || "random_key",
  STREAM_API_SECRET: process.env.STREAM_API_SECRET || "random_key",
  SENTRY_DSN: process.env.SENTRY_DSN || "random_key",
  INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY || "random_key",
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY || "random_key",
};
