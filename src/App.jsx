import "./App.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.trim() === "") {
      toast.error("Please Enter a Github Username", {
        theme: "dark",
        style: { fontSize: "14px" },
      });
      return;
    }

    setLoading(true);
    setProfile(null);
    setRepos([]);

    try {
      const profileRes = await axios.get(
        `https://api.github.com/users/${username}`,
      );

      const reposRes = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=stars`,
      );

      setProfile(profileRes.data);
      setRepos(reposRes.data);

      setUsername("");

      toast.success("Profile found!", {
        theme: "dark",
        autoClose: 3000,
        style: { fontSize: "14px" },
      });
    } catch (err) {
      if (err.response && err.response.status === 404) {
        toast.error("User not found. Check the username.", {
          theme: "dark",
          style: { fontSize: "14px" },
        });
      } else if (err.response && err.response.status === 403) {
        toast.error("Rate limit exceeded. Try again in an hour.", {
          theme: "dark",
          style: { fontSize: "14px" },
        });
      } else {
        toast.error("Something went wrong. Check your connection.", {
          theme: "dark",
          style: { fontSize: "14px" },
        });
      }
    } finally {
      setLoading(false);
    }
  }

  const topRepos = repos.slice(0, 5);

  const languages = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }

    return acc;
  }, {});

  return (
    <>
      <Header />
      <ToastContainer />

      <div className="container">
        <h1 style={{ color: "white" }}>
          Deep insights into any{" "}
          <span style={{ color: "#238636" }}>GitHub profile.</span>
        </h1>

        <p
          style={{
            color: "#8B949E",
            marginBlock: "10px",
          }}
        >
          Search any username and explore their stats, repos, and languages.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="searchBox">
            <input
              type="text"
              id="search"
              placeholder="e.g. chahtishamtahir"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>
      </div>

      {profile && (
        <div className="parent">
          <div className="profileCard">
            <img className="profilePic" src={profile.avatar_url} alt="avatar" />

            <h2 style={{ color: "white" }}>{profile.name || "No name"}</h2>

            <p className="handle">@{profile.login}</p>

            <p className="bio">{profile.bio || "No bio"}</p>

            <div className="statsRow">
              <div className="statItem">
                <span className="statNumber">{profile.followers}</span>

                <span className="statLabel">Followers</span>
              </div>

              <div className="statItem">
                <span className="statNumber">{profile.following}</span>

                <span className="statLabel">Following</span>
              </div>

              <div className="statItem">
                <span className="statNumber">{profile.public_repos}</span>

                <span className="statLabel">Repos</span>
              </div>
            </div>

            <p
              style={{
                color: "#8b949e",
                fontSize: "13px",
              }}
            >
              Joined {new Date(profile.created_at).getFullYear()}
            </p>
          </div>

          <div className="rightPanel">
            <div className="reposSection">
              <h3
                style={{
                  color: "white",
                  marginBottom: "1rem",
                }}
              >
                Top Repos
              </h3>

              {topRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="repoCard"
                >
                  <div>
                    <p className="repoName">{repo.name}</p>

                    <p className="repoDesc">
                      {repo.description || "No description"}
                    </p>
                  </div>

                  <div className="repoStats">
                    <span>⭐ {repo.stargazers_count}</span>

                    <span>🍴 {repo.forks_count}</span>

                    {repo.language && (
                      <span className="repoLang">{repo.language}</span>
                    )}
                  </div>
                </a>
              ))}
            </div>

            <div className="langSection">
              <h3
                style={{
                  color: "white",
                  marginBottom: "1rem",
                }}
              >
                Languages Used
              </h3>

              <div className="langList">
                {Object.entries(languages)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 6)
                  .map(([lang, count]) => (
                    <span key={lang} className="langBadge">
                      {lang} {count}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
