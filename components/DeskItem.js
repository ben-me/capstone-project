import styled from 'styled-components';

export default function DeskItem({
  deskDetails,
  onShowDetails,
  currentHighlightedDesk,
}) {
  const active = currentHighlightedDesk === deskDetails.name;

  return (
    <Desk active={active}>
      <StyledButton
        active={active}
        type="button"
        onClick={() => onShowDetails(deskDetails)}
      >
        {deskDetails.name}
      </StyledButton>
    </Desk>
  );
}

const Desk = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 4.375rem;
  border-radius: 7px;
  background-color: ${(props) => (props.active ? 'white' : 'var(--primary)')};
  box-shadow: 0px 4px 20px rgba(101, 181, 255, 0.4);
`;

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  font-size: 1.375rem;
  border: none;
  color: ${(props) => (props.active ? 'var(--primary)' : 'white')};
`;
