defmodule KeyStores.AuthController do
    import Joken
    import Ecto.Query, only: [from: 2]
    use Keystores.Web, :controller
    alias Keystores.User

  def register(conn, params) do
    resp = case params do
      %{"username" => username, "password" => password} -> register_user(username,password)

      %{"username" => _} -> %{type: "error", error: "Missing password field"}

      %{"password" => _} -> %{type: "error", error: "Missing username field"}
    end

    json conn, resp
  end

  defp register_user(username,password) do

    query = from user in User,
            where: user.username == ^username,
            select: user
    user_list = Repo.all(query)

    if length(user_list) == 0 do
      hash = Comeonin.Bcrypt.hashpwsalt(password)
      user_token = token
      |> with_signer(hs256("my_secret"))
      |> sign
      |>get_compact
      user = %User{username: username, password_hash: hash, token: user_token}
      inserted_user = Repo.insert!(user)
      IO.inspect(inserted_user)
      %{type: "success", token: user_token, id: inserted_user.id}

    else
      %{type: "error", error: "A account with that username already exists, Try logging in"}
    end
  end

  def login(conn, params) do
    resp = case params do
      %{"username" => username, "password" => password} -> login_user(username,password)

      %{"username" => _} -> %{type: "error", error: "Missing password field"}

      %{"password" => _} -> %{type: "error", error: "Missing username field"}
    end

    json conn, resp
  end

  def login_user(username,password) do
    query = from user in User,
            where: user.username == ^username,
            select: user
    user = List.first(Repo.all(query))
    if user != nil do
      correct_pass = Comeonin.Bcrypt.checkpw(password,user.password_hash)
      verified_token = user.token
      |> token
      |> with_signer(hs256("my_secret"))
      |> verify
      if verified_token.error == nil do
        %{type: "success", token: user.token, id: user.id}
      else
        ""
      end
    else
      %{type: "error", error: "Incorrect password"}
    end
  end

end
