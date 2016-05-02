defmodule KeyStores.AuthController do
    use Keystores.Web, :controller
    alias Keystores.User

  def register(conn, %{"username" => username, "password"=> password}) do
    u = %User{username: "kyle",password_hash: "djdlkfjdslk"}
    text conn, "Hello World"
  end

end
