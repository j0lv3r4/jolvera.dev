import Link from "./link";
import { Box, Text, Flex } from "rebass";
import PublishedAt from "./utils/published-at";
import Status from "./status";

const Post = ({ title, summary, date, path, status }) => {
  return (
    <Box as="article" mb={5}>
      <Box as="header" mb={3}>
        <Text as="h2" mb={0}>
          <Link
            href={`/posts/${path}`}
            tabIndex="0"
            sx={{ textDecoration: "none" }}
          >
            {title}
          </Link>
        </Text>

        <Flex mt={2}>
          <PublishedAt
            link={path}
            date={date}
            sx={{ textDecoration: "none", color: "text" }}
          />

          <Status ml={3} status={status} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Post;
