import * as core from "@actions/core";
import { Octokit } from "@octokit/rest";

function getValueAfterMark(text) {
  const regex = /\s*💎\s*(\w+)/;
  const match = text.match(regex);
  return match ? match[1] : null;
}

export async function run() {
  try {
    const octokit = new Octokit({
      auth: process.env.PROJECT_TOKEN,
    });

    const issueNumber = process.env.GITHUB_HEAD_REF.split("RS-").pop();
    const owner = process.env.GITHUB_REPOSITORY.split("/")[0];
    const repo = process.env.GITHUB_REPOSITORY.split("/")[1];

    const { data } = await octokit.request(
      `GET /repos/${owner}/${repo}/issues/${issueNumber}`,
      {
        owner,
        repo,
        issue_number: issueNumber,
      }
    );

    console.log(`Reward del issue: ${data.title}`);
    console.log(`Asignado del issue: ${data.assignee.login}`);

    core.setOutput("issueReward", getValueAfterMark(data.title));
    core.setOutput("issueAssignee", data.assignee.login);
    core.setOutput("issueNumber", issueNumber);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

run();
