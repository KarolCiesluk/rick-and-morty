interface ContentProps {
  status: string;
  children: React.ReactNode;
}

const Content = ({ status, children }: ContentProps) => {
  if (status === "loading") {
    return <div>Loading…</div>;
  }
  if (status === "error") {
    return <div>Error!</div>
  }
  return <>{children}</>;
};

export default Content;