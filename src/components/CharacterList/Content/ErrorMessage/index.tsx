import { Wrapper } from "../Wrapper";
import RefreshButton from "./RefreshButton";
import { ErrorIcon, Paragraph } from "./styled";

const ErrorMessage = () => {
  return (
    <Wrapper>
      <ErrorIcon />

      <Paragraph>
        Ooops! Something went&nbsp;wrong…
      </Paragraph>

      <Paragraph>
        Please check your network connection<br />and try again
      </Paragraph>

      <RefreshButton />
    </Wrapper >
  );
};

export default ErrorMessage;