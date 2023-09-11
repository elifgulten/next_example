export default function Layout({ children }) {
  return (
    <div className="layout">
      About Head
      <div>{children}</div>
      About Foot
    </div>
  );
}
