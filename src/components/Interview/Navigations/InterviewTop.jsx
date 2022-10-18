import { Link } from "react-router-dom";

function InterviewTop() {
  return (
    <>
      <div className="flex-space-evenly">
        <Link to="html">HTML / CSS</Link>
        <Link to="code">CODING</Link>
        <Link to="javascript">JAVASCRIPT</Link>
        <Link to="react">REACT</Link>
      </div>
    </>
  );
}
export default InterviewTop;
