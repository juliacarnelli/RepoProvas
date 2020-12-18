/* eslint-disable react/destructuring-assignment */
import React from "react";
import masks from "../../utils/masks";
import Select from "../../components/Select";
import { PersonalInfoBox, Title } from "../../styles/completeSignUpForm";
import Input from "../../components/Input";

const PersonalInfo = (props) => (
  <PersonalInfoBox>
    <Title>Contato</Title>
    <Input
      type="text"
      placeholder="Titulo"
      value={props.name}
      onChange={(e) => props.setName(e.target.value)}
      backgroundColor="transparent"
    />
    <Input
      type="tel"
      placeholder="Link"
      value={props.link}
      onChange={(e) => props.setLink((e.target.value))}
      backgroundColor="transparent"
    />
    <Select
      onChange={(e) => props.setGender(e.currentTarget.value)}
      options={[
        { label: "Disciplina", value: "Genêro" },
        { label: "Feminino", value: "Feminino" },
        { label: "Masculino", value: "Masculino" },
        { label: "Prefiro não informar", value: "Prefiro não informar" },
      ]}
    />
    <Select
      onChange={(e) => props.setGender(e.currentTarget.value)}
      options={[
        { label: "Professor", value: "Genêro" },
        { label: "Feminino", value: "Feminino" },
        { label: "Masculino", value: "Masculino" },
        { label: "Prefiro não informar", value: "Prefiro não informar" },
      ]}
    />
    <Select
      onChange={(e) => props.setGender(e.currentTarget.value)}
      options={[
        { label: "Categoria", value: "Genêro" },
        { label: "Feminino", value: "Feminino" },
        { label: "Masculino", value: "Masculino" },
        { label: "Prefiro não informar", value: "Prefiro não informar" },
      ]}
    />
  </PersonalInfoBox>
);

export default PersonalInfo;
