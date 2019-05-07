import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
    <div>
        <h4>Warning !!!</h4>
        Do you Want to Continue ?
    </div>

    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail
        author="George"
        time="Today at 14:30 PM"
        post="First Blog Post"
        avatar= {faker.image.avatar()}
      />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail
        author="Maria"
        time="Yesterday at 23:50 PM"
        post="Second Blog Post"
        avatar= {faker.image.avatar()}
      />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail
        author="Christina"
        time="Today at 09:00 AM"
        post="Third Blog Post"
        avatar= {faker.image.avatar()}
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
