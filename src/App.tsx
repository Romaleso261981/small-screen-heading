import "./styles.scss";
import Container from "./Container";
import { containers } from "./mocData";

const InterviewTask = () => {
  return (
    <section>
      <div className="desc">
        <h2>Interview Test Task</h2>

        <div className="info">
          <p>
            <strong>Challenge:</strong> Both containers are 320px wide and
            contain h1 headings with font-size: 42px.
          </p>
          <p>
            <strong>Your task:</strong> Create a flexible solution that would
            prevent the heading from causing horizontal overflow while keeping
            the font size as large as possible. The text should be resized to
            fit within the container.
          </p>
          <p>
            <strong>Current state:</strong> Container 2 and 3 have horizontal
            scroll due to long words.
          </p>
        </div>

        <p>
          <strong>Requirements:</strong>
        </p>
        <ul>
          <li>Each container is 320px wide</li>
          <li>No horizontal scrolling should occur</li>
          <li>
            Do not use <code>word-wrap: break-word</code> or{" "}
            <code>overflow-wrap: break-word</code> or any CSS that would make
            the word break
          </li>
        </ul>
      </div>

      {containers.map(({ label, heading }) => (
        <Container key={label} label={label} heading={heading} />
      ))}
    </section>
  );
};

export default InterviewTask;
