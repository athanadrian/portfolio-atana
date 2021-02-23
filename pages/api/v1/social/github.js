export default async (req, res) => {
  const headers = {
    Authorization: 'Token ' + process.env.GITHUB_KEY,
  };
  // public repositories
  const url1 = 'https://api.github.com/users/athanadrian';
  const response1 = await fetch(url1, { headers: headers });
  const json1 = await response1.json();
  const numProjects = json1.public_repos;
  // followers
  const url3 = 'https://api.github.com/users/athanadrian/followers';
  const response3 = await fetch(url3, { headers: headers });
  const json3 = await response3.json();
  const numFollowers = Object.keys(json3).length;
  // forks
  const url2 = 'https://api.github.com/users/athanadrian/repos';
  const response2 = await fetch(url2, { headers: headers });
  const json2 = await response2.json();
  //const numProjects = Object.keys(json2).length;
  var forksCount = 0;
  json2.forEach((f) => {
    forksCount += f.forks_count;
  });
  return res.status(200).json({
    numFollowers,
    numProjects,
    forksCount,
  });
};
