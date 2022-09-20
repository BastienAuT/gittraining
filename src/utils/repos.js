/* eslint-disable import/prefer-default-export */
export const simplifyRepos = (repos) => (
  repos.map(
    (repo) => ({
      id: repo.id,
      name: repo.name,
      owner: repo.owner.login,
      image: repo.owner.avatar_url,
      description: repo.description,
      url: repo.html_url,
    }),
  )
);
