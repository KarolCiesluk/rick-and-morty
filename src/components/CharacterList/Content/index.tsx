import ErrorMessage from "./ErrorMessage";
import { Wrapper } from "./Wrapper";
import { Loader } from "./styled";

interface ContentProps {
  status: "loading" | "error" | "success";
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
  if (status === "success") {
    return <>{children}</>;
  }
  throw new Error("Incorrect status!");
};

export default Content;