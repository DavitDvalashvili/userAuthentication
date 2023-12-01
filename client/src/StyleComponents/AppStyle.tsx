import styled from "styled-components";

const AppStyled = styled.div`
  label {
    font-size: 1.2rem;
    color: #656262;
  }

  .form_container {
    background-color: #fff;
    padding: 2rem 3rem;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 400px;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  }

  .form_container > h2 {
    margin-block: 1rem;
    padding-block: 0.6rem;
    color: rgba(0, 212, 255, 1);
  }

  .form_container > form {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .inputBox {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .form_container input {
    border: none;
    padding: 0.5rem;
    border-bottom: 1px solid gray;
    font-size: 1.1rem;
    outline: none;
  }

  .form_container input::placeholder {
    font-size: 0.9rem;
    font-style: italic;
  }

  .form_button {
    background-color: rgba(0, 212, 255, 1);
    color: #fff;
    border: none;
    padding: 0.6rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 0.3rem;
  }

  span a {
    text-decoration: none;
    color: rgba(0, 212, 255, 1);
  }

  .home_page {
    height: 100vh;
    width: 100vw;
    background: #000;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 3rem;
    flex-direction: column;
    gap: 1rem;
  }

  .home_page span {
    color: rgba(0, 212, 255, 1);
  }

  .button {
    background-color: rgb(27, 73, 83);
    color: #fff;
    cursor: pointer;
    padding: 1rem 3rem;
    font-size: 2rem;
    border-radius: 2rem;
    transition: ease-in 0.3s;
    border: none;
  }

  .button:hover {
    background-color: rgba(0, 212, 255, 1);
  }

  @media only screen and (max-width: 1200px) {
    .home_page {
      font-size: 1.5rem;
    }
    .button {
      padding: 0.6rem 1rem;
      font-size: 1.5rem;
    }
  }
`;

export default AppStyled;
