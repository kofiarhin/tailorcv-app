import "./uploadComponent.styles.scss";
import { useState } from "react";
import useCvMutation from "../../hooks/useCvMutation";

const UploadComponent = () => {
  const [jobDescription, setJobDescription] = useState("");
  const { data, mutate, isLoading, isError, error } = useCvMutation();

  console.log("ddddddd", isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobDescription.trim()) return;
    mutate(jobDescription); // 🔥 you're sending just the string — this matches your current hook
  };

  return (
    <div className="upload-container">
      <h2 className="heading center">Paste Job Description</h2>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste job description here..."
            rows={10}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Generating..." : "Submit"}
          </button>
        </form>
      </div>

      {isError && (
        <p className="error">
          ❌ Error: {error.message || "Something went wrong"}
        </p>
      )}

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
