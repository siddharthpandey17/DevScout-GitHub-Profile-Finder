// DevScout — starter project. Complete the TODOs yourself.
const API_BASE = "https://api.github.com";
let recentSearches = [];
let currentUsername = "";

// TODO 1: Select all required HTML elements by their IDs.
// TODO 2: Add submit handler to searchForm. Prevent page reload and call searchUser(username).
// TODO 3: Write async searchUser(username):
// fetch(`${API_BASE}/users/${encodeURIComponent(username)}`), check response.ok,
// parse JSON, handle missing users and network errors with statusMessage.
// TODO 4: Write renderProfile(user) using avatar_url, name, login, html_url,
// bio, public_repos, followers, following, location, company, created_at.
// Use textContent for user-provided text.
// TODO 5: Load repos from `${API_BASE}/users/${encodeURIComponent(currentUsername)}/repos?sort=updated&per_page=10`.
// Render name, description, language, stargazers_count and html_url.
// Handle empty repositories and API errors.
// TODO 6: Save the last 5 searched usernames in localStorage; show clickable chips.
// Implement the Clear button.
// TODO 7 (bonus): Toggle dark mode using body.classList.toggle("dark") and persist it.
// TODO 8 (bonus): Add loading state and prevent duplicate requests.
// Note: GitHub's public API has unauthenticated rate limits.
// Suggested order: selectors → form → fetch profile → render profile → repos → recent searches.
