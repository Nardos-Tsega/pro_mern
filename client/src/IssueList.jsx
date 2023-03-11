import React from "react";
import IssueTable from "./IssueTable";
import IssueAdd from "./IssueAdd";
import IssueFilter from "./IssueFilter";

const initialIssues = [
  {
    id: 1,
    status: "New",
    owner: "Ravan",
    effort: 5,
    created: new Date("2018-08-15"),
    due: undefined,
    title: "Error in console when clicking Add",
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Eddie",
    effort: 14,
    created: new Date("2018-08-16"),
    due: new Date("2018-08-30"),
    title: "Missing bottom border on panel",
  },
];

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }
  loadData() {
    setTimeout(() => {
      this.setState({ issues: initialIssues });
    }, 500);
  }

  componentDidMount() {
    this.loadData();
  }
  createIssue(issue) {
    issue.id = this.state.issues.length + 1;
    issue.created = new Date();
    const newIssue = this.state.issues.slice();
    newIssue.push(issue);
    this.setState({ issues: newIssue });
  }
  render() {
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
      </React.Fragment>
    );
  }
}

export default IssueList;
