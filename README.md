# Conduit (Medium Clone) — DripCode Starter

Build a Medium.com clone with React against the RealWorld API. This is the
starter code for the [DripCode Build Projects](https://skill-grid-weld.vercel.app/projects/conduit) Conduit project.

## What you will build

- Articles feed, article detail, create / edit / delete your articles
- Comments, favorites, follow authors, profile + settings
- JWT auth — no backend to build, the hosted RealWorld API provides it

## The API (you do NOT build a backend)

- Base URL: `https://api.realworld.show/api`
- No API key needed. Demo accounts are provided by RealWorld.
- Full spec: https://docs.realworld.show/ (OpenAPI 3.0.1)
- Endpoints: `/users`, `/users/login`, `/user`, `/articles`, `/articles/feed`,
  `/articles/:slug`, `/articles/:slug/comments`, `/articles/:slug/favorite`,
  `/tags`, `/profiles/:username`, `/profiles/:username/follow`
- Test it first: `GET https://api.realworld.show/api/tags` returns real tags.

## Run it

```bash
npm install
npm run dev
```

## Files

- `src/api.js` — API base URL + fetch helpers (auth header, endpoints)
- `src/App.jsx` — router wiring (stub — `TODO` marks the spots)

## License note

RealWorld's repo license is "Other (NOASSERTION)" on GitHub — this starter
links to the spec and attributes RealWorld; it does not copy spec text.

## Steps

Follow the steps on the [project page](https://skill-grid-weld.vercel.app/projects/conduit).

No solution code is included — you write it.
