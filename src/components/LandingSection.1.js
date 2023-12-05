import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { greeting, bio1, bio2 } from "./LandingSection";
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
export const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={8}>
      <VStack spacing={3}>
        <Avatar name="Sashank" src="./Sashank.png" size="2xl"></Avatar>
        <Heading size="md">{greeting}</Heading>
      </VStack>
      <Heading size="2xl">{bio1}</Heading>
      <Heading size="2xl">{bio2}</Heading>


    </VStack>
  </FullScreenSection>
);
