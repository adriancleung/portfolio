const GITHUB_API = "https://api.github.com";

export interface GetRepoResponse {
  name: string;
  description: string;
  full_name: string;
  html_url: string;
  language: string | null;
}

interface GitHub {
  repos: {
    get: () => Promise<GetRepoResponse[]>;
  };
}

const github: GitHub = {
  repos: {
    get: async () => {
      return await (
        await fetch(`${GITHUB_API}/users/adriancleung/repos`, {
          headers: { Accept: "application/vnd.github.v3+json" },
        })
      ).json();
    },
  },
};

export default github;
