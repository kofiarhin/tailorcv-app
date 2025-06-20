import "./uploadComponent.styles.scss";
import { useState } from "react";
import useCvMutation from "../../hooks/useCvMutation";

const UploadComponent = () => {
  const [jobDescription, setJobDescription] = useState("");
  const { data, mutate, isLoading } = useCvMutation();

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobDescription.trim()) return;
    mutate(jobDescription);
  };

  if (isLoading) {
    return <h1 className="heading">Loading...</h1>;
  }

  return (
    <div>
      <h2 className="heading center">Paste Job Description</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setJobDescription(e.target.value)}
            value={jobDescription}
            placeholder="Paste job description here..."
          />
          <button>Submit</button>
        </form>
      </div>

      {/* Render HTML response safely */}
      {data && (
        <div
          className="cv-preview"
          dangerouslySetInnerHTML={{ __html: data.message }}
        />
      )}
    </div>
  );
};

export default UploadComponent;
