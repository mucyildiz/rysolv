const {
  createActivity,
  getRepoActivity,
  getUserActivity,
} = require('./queries/activity');
const { toggleAttempting } = require('./queries/attempting');
const { createComment, getIssueComments } = require('./queries/comments');
const {
  checkDuplicateIssue,
  closeIssue,
  createIssue,
  downvoteIssue,
  getFilterOptions,
  getIssueAttemptList,
  getIssueList,
  getIssues,
  getIssueWatchList,
  getOneIssue,
  searchIssues,
  transformIssue,
  upvoteIssue,
} = require('./queries/issues');
const {
  createLanguage,
  deleteUserLanguages,
  getUserLanguages,
  setPreferredLanguage,
} = require('./queries/languages');
const {
  checkDuplicateRepo,
  createRepo,
  getOneRepo,
  getOrganizationContributors,
  getRepoList,
  getRepos,
  getReposWhere,
  searchRepos,
  transformRepo,
  updateOrganizationArray,
} = require('./queries/organizations');
const {
  submitAccountDepositUser,
  submitExternalPayment,
  submitInternalPayment,
} = require('./queries/payments');
const {
  checkDuplicatePullRequest,
  createPullRequest,
  deletePullRequest,
  deleteUserPullRequests,
  getPullRequestList,
  getUserPullRequests,
} = require('./queries/pullRequests');
const { getQuestions, postUserResponse } = require('./queries/questions');
const { getStats } = require('./queries/stats');
const {
  checkDuplicateGithubId,
  checkDuplicateUserEmail,
  checkExistingGithubAccount,
  checkGithubIdMatch,
  createUser,
  getOneUser,
  getOneUserSignUp,
  getUserAttemptList,
  getUserPullRequestDetail,
  getUsers,
  getUserSettings,
  getUserWatchList,
  searchUsers,
  transformUser,
  updateUserArray,
} = require('./queries/users');
const { toggleWatching } = require('./queries/watching');
const {
  createWithdrawal,
  transformUserBalance,
} = require('./queries/withdrawal');

module.exports = {
  checkDuplicateGithubId,
  checkDuplicateIssue,
  checkDuplicatePullRequest,
  checkDuplicateRepo,
  checkDuplicateUserEmail,
  checkExistingGithubAccount,
  checkGithubIdMatch,
  closeIssue,
  createActivity,
  createComment,
  createIssue,
  createLanguage,
  createPullRequest,
  createRepo,
  createUser,
  createWithdrawal,
  deletePullRequest,
  deleteUserLanguages,
  deleteUserPullRequests,
  downvoteIssue,
  getFilterOptions,
  getIssueAttemptList,
  getIssueComments,
  getIssueList,
  getIssues,
  getIssueWatchList,
  getOneIssue,
  getOneRepo,
  getOneUser,
  getOneUserSignUp,
  getOrganizationContributors,
  getPullRequestList,
  getQuestions,
  getRepoActivity,
  getRepoList,
  getRepos,
  getReposWhere,
  getStats,
  getUserActivity,
  getUserAttemptList,
  getUserLanguages,
  getUserPullRequestDetail,
  getUserPullRequests,
  getUsers,
  getUserSettings,
  getUserWatchList,
  postUserResponse,
  searchIssues,
  searchRepos,
  searchUsers,
  setPreferredLanguage,
  submitAccountDepositUser,
  submitExternalPayment,
  submitInternalPayment,
  toggleAttempting,
  toggleWatching,
  transformIssue,
  transformRepo,
  transformUser,
  transformUserBalance,
  updateOrganizationArray,
  updateUserArray,
  upvoteIssue,
};
