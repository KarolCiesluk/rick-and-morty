import ErrorMessage from "./ErrorMessage";
import { Loader } from "./styled";
import { Wrapper } from "./Wrapper";

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