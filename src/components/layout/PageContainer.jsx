export default function PageContainer({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full px-[4vw] ${className}`}
    >
      {children}
    </div>
  );
}