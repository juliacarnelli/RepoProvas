import React, { useContext, useState, useEffect } from "react";
import { TextContainer, Container, Text } from "../../../styles/review.styles";
import Ticket from "../../../services/Activities.services";
import UserContext from "../../../contexts/UserContext";
import UserDashboardContainer from "../Container";

const Review = () => {
  const { user } = useContext(UserContext);
  const [ticket, setTicket] = useState("");

  return (
    <UserDashboardContainer>
      <TextContainer>
        <Text>Seu Resumo</Text>
      </TextContainer>
    </UserDashboardContainer>
  );
};
export default Review;
