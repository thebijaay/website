import { Flex, Meta, Schema } from "@once-ui-system/core";
import BookView from "@/components/book/BookView";
import { baseURL, book, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: book.title,
    description: book.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(book.title)}`,
    path: book.path,
  });
}

export default function Book() {
  return (
    <Flex maxWidth="m" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={book.title}
        description={book.description}
        path={book.path}
        image={`/api/og/generate?title=${encodeURIComponent(book.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${book.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <BookView />
    </Flex>
  );
}
