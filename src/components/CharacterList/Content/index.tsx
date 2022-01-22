import ErrorMessage from "./ErrorMessage";
import { Wrapper } from "./Wrapper";
import { Loader } from "./styled";

interface ContentProps {
  status: string;
  children: React.ReactNode;
}

const Content = ({ status, children }: ContentProps) => {
  if (status === "loading") {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }
  if (status === "error") {
    return <ErrorMessage />;
  }
  return <>{children}</>;
};

export default Content;