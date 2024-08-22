import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";

// ChakraProviderDecoratorは、Chakra UIのテーマを適用するためのデコレータです。
// Storybookの各ストーリーにChakra UIのテーマを適用するために使用されます。
const ChakraProviderDecorator = (Story) => (
  <ChakraProvider theme={theme}>
    <Story />
  </ChakraProvider>
);

// decorators配列にChakraProviderDecoratorを追加することで、
// 全てのストーリーにChakra UIのテーマが適用されます。
export const decorators = [ChakraProviderDecorator];