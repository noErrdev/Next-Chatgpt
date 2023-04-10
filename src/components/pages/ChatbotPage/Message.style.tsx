import { createStyles } from "@mantine/core";

const useStyles = createStyles(theme => ({
  messageBotBg: {
    background: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
  },
  messageContent: {
    "&>p": {
      margin: 0,
    },
    "&>pre": {
      margin: 0,
    },
  },
  inlineCode: {
    display: "inline-block",
    background: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
    paddingLeft: "0.25rem",
    paddingRight: "0.25rem",
    borderRadius: "0.5rem",
    fontStyle: "italic",
    opacity: 0.8,
  },
}));

export default useStyles;