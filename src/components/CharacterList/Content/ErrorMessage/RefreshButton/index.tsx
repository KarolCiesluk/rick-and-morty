import { useNavigate } from "react-router-dom";

import { StyledButton } from "./styled";

const RefreshButton = () => {
  const navigate = useNavigate();

  return (
    <StyledButton onClick={() => navigate(0)}>
      Refresh
    </StyledButton>
  );
};

export default RefreshButton;