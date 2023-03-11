import React from "react";
import IssueRow from "./IssueRow";

export default function IssueTable(props) {
  const rows = props.issues.map((issue) => (
    <IssueRow key={issue.id} issue={issue} />
  ));
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Due Date</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
