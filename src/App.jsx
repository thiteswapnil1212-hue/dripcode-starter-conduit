// Conduit — starter. Your logic goes here.
// Steps: https://skill-grid-weld.vercel.app/projects/conduit
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  // TODO 1: Register / Login — save the JWT token to localStorage.
  // TODO 2: Global feed (GET /articles) + tags sidebar (GET /tags).
  // TODO 3: Article detail (GET /articles/:slug) + comments.
  // TODO 4: New / edit / delete your own articles.
  // TODO 5: Favorite + follow. Settings page (PUT /user).
  return (
    <div>
      <header>
        <Link to="/">Conduit</Link>
      </header>
      <Routes>
        <Route path="/" element={<p>Feed goes here.</p>} />
      </Routes>
    </div>
  );
}
