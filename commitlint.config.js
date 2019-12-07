module.exports = {
    plugins: ["commitlint-plugin-jira-rules"],
    extends: ["jira"],
    "jira-task-id-separator": [":", "allways"],
    "jira-task-id-max-length": [8, "allways"]
};
