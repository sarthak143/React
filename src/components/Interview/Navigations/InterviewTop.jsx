import { Link } from "react-router-dom";

function InterviewTop() {
  return (
    <>
      <div className="flex-space-evenly">
        <Link to="html">HTML / CSS</Link>
        <Link to="javascript">JAVASCRIPT</Link>
        <Link to="code">JS CODING</Link>
        <Link to="react">REACT</Link>
        <Link to="reactcode">REACT Coding</Link>
      </div>
    </>
  );
}
export default InterviewTop;
