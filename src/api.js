// RealWorld API helpers. No key needed — the hosted API is public.
// Spec: https://docs.realworld.show/
export const API_URL = "https://api.realworld.show/api";

function authHeaders() {
  const token = localStorage.getItem("conduit-token");
  return token ? { Authorization: `Token ${token}` } : {};
}

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
      ...(options.headers || {}),
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.errors ? JSON.stringify(data.errors) : res.statusText);
  return data;
}

// TODO: use these in your pages:
//   request("/tags") — list tags
//   request("/articles?limit=10") — global feed
//   request("/articles/feed?limit=10") — your feed (login required)
//   request(`/articles/${slug}`) — one article
//   request("/users/login", { method: "POST", body: JSON.stringify({ user: { email, password } }) })
//   request("/articles", { method: "POST", body: JSON.stringify({ article }) })
export { request };
