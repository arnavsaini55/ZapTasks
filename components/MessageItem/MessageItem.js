import React, { memo } from 'react';
import { Animated, Text } from 'react-native';
import { styles } from './styles';

const MessageItem = memo(({ item }) => {
  return (
    <Animated.View
      style={[
        styles.messageContainer,
        {
          alignSelf:
            item.sender === "user"
              ? "flex-end"
              : item.sender === "system"
              ? "center"
              : "flex-start",
          backgroundColor: item.isError
            ? "#FF4444"
            : item.sender === "user"
            ? "#1E90FF"
            : item.sender === "system"
            ? "#FFD700"
            : "#555",
        },
      ]}
    >
      <Text
        style={[styles.messageText, item.sender === "system" && { color: "#000" }]}
      >
        {item.content || item.text}
      </Text>
    </Animated.View>
  );
});

MessageItem.displayName = 'MessageItem';

export default MessageItem;
