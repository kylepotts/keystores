defmodule Keystores.PageController do
  use Keystores.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
