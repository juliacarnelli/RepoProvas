/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import {
  HomeOutlined,
  BookOutlined,
  FormOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Container, iconStyle } from "../styles/userDashboard.styles";

const SideBar = () => (
  <Container>
    <div>
      <Link to="test-teacher">
        <BookOutlined style={iconStyle} />
        <p>Professores</p>
      </Link>
      <Link to="test-class">
        <FormOutlined style={iconStyle} />
        <p>Disciplinas</p>
      </Link>
    </div>
  </Container>
);

export default SideBar;
