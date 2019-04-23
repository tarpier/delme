import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Card, Text, Image } from 'rebass';

const DetailBox = styled(Box)`
  border-top: 1px solid black;
  margin-top: 5px;
  padding-top: 2px;
  color: darkgray;
`;

const CharacterList = props => {
  return (
    <Flex flexWrap={'wrap'}>
      {props.chars.map(character => (
        <Box p={1} width={1 / 4}>
          <Card
            bg="#f6f6ff"
            borderRadius={8}
            boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
          >
            <Image src={character.image} />
            <Text>{character.name}</Text>
            <DetailBox>
              <Text fontSize={1}>{character.location.name}</Text>
              <Text fontSize={1}>{character.species}</Text>
            </DetailBox>
          </Card>
        </Box>
      ))}
    </Flex>
  );
};

export default CharacterList;
