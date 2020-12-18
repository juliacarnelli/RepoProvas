import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { Container } from "../../styles/sign-up.styles";

const SignUpForm = () => {
  const history = useHistory();
  const [loading, setLoading] = useState("");

  function consultTest() {
    if (loading) return;
    setLoading(true);
    history.push("/dashboard");
  }

  function uploadTest() {
    if (loading) return;
    setLoading(true);
    history.push("/upload-test");
  }
  return (
    <Container>
      <Button label="Consultar Prova" loading={loading} onClick={consultTest} />
      <Button label="Upload de Prova" loading={loading} onClick={uploadTest} />
    </Container>
  );
};
export default SignUpForm;
