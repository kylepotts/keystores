use Mix.Config

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with brunch.io to recompile .js and .css sources.
config :keystores, Keystores.Endpoint,
  http: [port: 4000],
  debug_errors: true,
  code_reloader: true,
  check_origin: false,
  watchers: [{Path.expand("webpack.dev.js"), []}]
# Watch static and templates for browser reloading.
config :keystores, Keystores.Endpoint,
  live_reload: [
    patterns: [
      ~r{priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$},
      ~r{priv/gettext/.*(po)$},
      ~r{web/views/.*(ex)$},
      ~r{web/templates/.*(eex)$}
    ]
  ]

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development.
# Do not configure such in production as keeping
# and calculating stacktraces is usually expensive.
config :phoenix, :stacktrace_depth, 20

# Configure your database
config :keystores, Keystores.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "ksflvppa",
  password: "xjHuOXBVD-q4ROUnHEs6_cuYj3_87qe1",
  database: "ksflvppa",
  hostname: "pellefant-02.db.elephantsql.com",
  pool_size: 20
