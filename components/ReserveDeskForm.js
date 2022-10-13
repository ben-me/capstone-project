import styled from 'styled-components';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSWRConfig } from 'swr';

export default function ReserveDeskForm({
  selectedRoomId,
  selectedDesk,
  reserveWindowControl,
  selectedDate,
}) {
  const { mutate } = useSWRConfig();

  function handleClick(event) {
    event.preventDefault();
    reserveWindowControl(false);
  }

  function notify(text) {
    toast.error(text, {
      position: 'bottom-center',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'colored',
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputStartTime = form.starttime.value;
    const inputEndTime = form.endtime.value;
    const privateReservation = form.private.checked;

    const newReservation = {
      starttime: inputStartTime,
      endtime: inputEndTime,
      date: selectedDate.toISOString().substring(0, 10),
      user: 'user1',
      isPrivate: privateReservation,
      roomID: selectedRoomId,
      deskname: selectedDesk.name,
    };

    await fetch(`/api/rooms/desks/reservations/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReservation),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Failed') {
          notify('Invalid Entry!');
        }
        mutate('/api/rooms/' + selectedRoomId);
      });

    form.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <ReserveHeader>Reserve {selectedDesk?.name}</ReserveHeader>
        <StyledBigLabel htmlFor="starttime">Start Time:</StyledBigLabel>
        <StyledBigInput
          type="time"
          id="starttime"
          name="starttime"
          min="06:00"
          max="20:01"
          required
        />
        <StyledBigLabel htmlFor="endtime">End Time:</StyledBigLabel>
        <StyledBigInput
          type="time"
          id="endtime"
          name="endtime"
          min="06:00"
          max="20:01"
          required
        />
        <PrivateInput type="checkbox" name="private" id="private" />
        <PrivateLabel htmlFor="private">Private reservation</PrivateLabel>
        <CancelButton type="button" onClick={handleClick}>
          Cancel
        </CancelButton>
        <ReserveButton type="submit">Reserve</ReserveButton>
      </StyledForm>
      <StyledToast
        position="bottom-center"
        autoClose={2500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

const StyledForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1rem auto auto auto;
  grid-row-gap: 0.3rem;
  background-color: rgba(101, 181, 255, 0.8);
  border-radius: 22px;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledBigLabel = styled.label`
  grid-column: span 2;
`;

const StyledBigInput = styled.input`
  text-align: center;
  grid-column: span 2;
`;

const ReserveHeader = styled.h3`
  grid-column: span 3;
  margin: 0;
  text-decoration: underline;
`;

const ReserveButton = styled.button`
  grid-column: span 2;
  grid-row-start: 5;
  border: none;
  height: 2rem;
  width: 7rem;
  border-radius: 1rem;
  background-color: rgba(77, 255, 73, 0.7);
  margin-top: 0.5rem;
  font-size: 1.2rem;
  justify-self: center;
`;

const CancelButton = styled(ReserveButton)`
  background-color: rgba(255, 74, 74, 0.7);
`;

const PrivateInput = styled.input`
  grid-row-start: 4;
  margin-left: 0;
`;

const PrivateLabel = styled.label`
  grid-column-start: 2;
  grid-column: span 3;
  grid-row-start: 4;
  flex-grow: 1;
`;

const StyledToast = styled(ToastContainer)`
  --toastify-color-error: #e74c3c;
  --toastify-toast-width: 80vw;
  --toastify-toast-background: #fff;
  --toastify-icon-color-error: var(--toastify-color-error);
  --toastify-toast-min-height: 64px;
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-toast-max-height: 800px;
  --toastify-text-color-warning: #fff;
  --toastify-color-progress-error: var(--toastify-color-error);

  &&&.Toastify__toast-container {
    width: var(--toastify-toast-width);
    left: 50%;
    bottom: 0;
    position: absolute;
    transform: translateX(-50%);
    max-height: var(--toastify-toast-max-height);
    padding: 0;
    margin: 0;
  }

  .Toastify__toast {
    position: relative;
    min-height: var(--toastify-toast-min-height);
    box-sizing: border-box;
    margin-bottom: 1rem;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1),
      0 2px 15px 0 rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    max-height: var(--toastify-toast-max-height);
    overflow: hidden;
    font-family: var(--toastify-font-family);
    cursor: pointer;
    direction: ltr;
    z-index: 0;
  }

  .Toastify__toast-body {
    margin: auto 0;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 6px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }

  .Toastify__toast-body > div:last-child {
    flex: 1;
  }

  .Toastify__toast-icon {
    margin-inline-end: 10px;
    width: 20px;
    flex-shrink: 0;
    display: flex;
  }

  .Toastify--animate {
    animation-fill-mode: both;
    animation-duration: 0.7s;
  }

  .Toastify--animate-icon {
    animation-fill-mode: both;
    animation-duration: 0.3s;
  }

  .Toastify__progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    z-index: var(--toastify-z-index);
    opacity: 0.7;
    transform-origin: left;
  }
  @keyframes Toastify__zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
    }
  }

  @keyframes Toastify__zoomOut {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    to {
      opacity: 0;
    }
  }

  .Toastify__zoom-enter {
    animation-name: Toastify__zoomIn;
  }

  .Toastify__zoom-exit {
    animation-name: Toastify__zoomOut;
  }

  .Toastify__toast-theme--colored.Toastify__toast--error {
    color: var(--toastify-text-color-error);
    background: var(--toastify-color-error);
  }

  .Toastify__progress-bar--error {
    background: var(--toastify-color-progress-error);
  }

  .Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
    background: var(--toastify-color-transparent);
  }

  .Toastify__close-button {
    color: #fff;
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s ease;
    align-self: flex-start;
  }
  .Toastify__close-button > svg {
    fill: currentColor;
    height: 16px;
    width: 14px;
  }

  .Toastify__bounce-enter--bottom-center {
    animation-name: Toastify__bounceInUp;
  }
  .Toastify__bounce-exit--bottom-center {
    animation-name: Toastify__bounceOutDown;
  }
  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }

    100% {
      transform: scaleX(0);
    }
  }

  .Toastify__progress-bar--animated {
    animation: Toastify__trackProgress linear 1 forwards;
  }

  .Toastify__progress-bar--controlled {
    transition: transform 0.2s;
  }
  @keyframes Toastify__bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }

    75% {
      transform: translate3d(0, 10px, 0);
    }

    90% {
      transform: translate3d(0, -5px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes Toastify__bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0);
    }

    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }

    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }
`;
