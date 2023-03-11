import React from "react";

const sampleIssue = {
  status: "New",
  owner: "Pieta",
  title: "Completion date should be optional",
};
class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      status: "New",
    };
    this.props.createIssue(issue);
    form.owner.value = "";
    form.title.value = "";
  }
  render() {
    return (
      <form name="issueAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="owner" placeholder="Owner" />
        <input type="text" name="title" placeholder="Title" />
        <button>Add</button>
      </form>
    );
  }
}

export default IssueAdd;
