import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import Button from "../../components/Button";
import { TextError, Form } from "../../styles/completeSignUpForm";
import signUpCompleted from "../../services/User.services";
import PersonalInfo from "./PersonalInfo";
import AdressInfo from "./AdressInfo";

const CompleteSignUpForm = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  console.log(name);
  console.log(link);


  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log("enviando os dados pro back");
    setLoading(false);
  }

  function goBack() {
    setLoading(true);
    history.push("./");
  }

  return (
    <Form onSubmit={handleSubmit} flexDirection="row">
      <div>
        <PersonalInfo
          name={name}
          setName={setName}
          link={link}
          setLink={setLink}
        />
      </div>
      <Button
        disabled={loading}
        type="submit"
        label="Enviar prova"
        loading={loading}
        height="4rem"
      />
      <Button
        disabled={loading}
        label="Voltar"
        loading={loading}
        height="4rem"
        onClick={goBack}
      />
      {error && <TextError>{errorMessage}</TextError>}
    </Form>
  );
};
export default CompleteSignUpForm;

// {
//   userId: 1,
//   token: token,
//   tipoTicket: hotel
// }
