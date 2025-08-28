interface SeverityProbs {
  severity: "error" | "warning";
  children: React.ReactNode;
}

const severity = ({ severity, children }: SeverityProbs) => (
  <div className={severity == "warning" ? "warning" : "error"}>{children}</div>
);

export default severity;
