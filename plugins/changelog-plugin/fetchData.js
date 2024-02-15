const fs = require('fs');
const path = require('path');
// const fetch = require('node-fetch');

async function fetchData(siteConfig) {
  const accessToken = siteConfig.customFields.githubAccessToken;
  const owner = siteConfig.customFields.organizationName;
  const repo = siteConfig.customFields.projectName;
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases`;

  const outputDirectory = path.join(__dirname, '../../docs/changelogs-v2');

  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);
  }

  let counter = 1;
  const categoryFilePath = path.join(outputDirectory, '_category_.json');

  // Function to retrieve issue details from GitHub API
  async function getIssueDetails(issueNumber) {
    const issueApiUrl = `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`;
    const response = await fetch(issueApiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  }

  // Function to create a link for a GitHub username
  function getGitHubLink(username) {
    return `[${username}](https://github.com/${username})`;
  }

  // Fetch releases from GitHub API
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': `Bearer ${accessToken}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const releases = await response.json();

    // Process the GitHub releases data here
    for (const release of releases) {
      const version = release.tag_name;
      const releaseUrl = release.html_url;
      const issueNumberMatch = release.body.match(/#(\d+)/);
      const issueNumber = issueNumberMatch ? parseInt(issueNumberMatch[1], 10) : null;

      let issueLink = '';
      if (issueNumber) {
        const issueDetails = await getIssueDetails(issueNumber);
        issueLink = ` [Issue #${issueNumber}: ${issueDetails.title}](${issueDetails.html_url})`;
      }

      const changes = release.body;

      let markdownContent = `---\nsidebar_position: ${counter}\n---\n# ${version}\n\nFor more details, [GitHub Issues](${releaseUrl})\n\nHighlighted Issue: ${issueLink}\n\n${changes}\n`;

      // Write to a separate markdown file for each version
      const outputFilePath = path.join(outputDirectory, `changelog-${version}.mdx`);
      fs.writeFileSync(outputFilePath, markdownContent, 'utf-8');

      console.log(`Changelog for version ${version} has been exported to: ${outputFilePath}`);

      counter++;
    }

    // Create _category_.json file
    const categoryContent = {
      label: 'Changelog',
      position: 5,
      link: {
        type: 'generated-index',
        description: 'Changelog for Jan',
      },
    };

    fs.writeFileSync(categoryFilePath, JSON.stringify(categoryContent, null, 2), 'utf-8');

    console.log(`_category_.json has been created at: ${categoryFilePath}`);
  } catch (error) {
    console.error('Error fetching GitHub releases:', error.message);
  }
}

module.exports = fetchData;
