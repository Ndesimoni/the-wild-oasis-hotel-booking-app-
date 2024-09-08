import Button from "./button";
import Heading from "./Heading";
import Input from "./input";

const TestApp = () => {
  return (
    <div>
      <Heading as="h1"> heading 1</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        repellendus ab laudantium aut numquam suscipit! Nesciunt molestiae culpa
        architecto ducimus nulla incidunt deleniti provident ea.
      </p>
      <Input />
      <Button type="b1">learn more</Button>

      <Heading as="h2"> heading 1</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        repellendus ab laudantium aut numquam suscipit! Nesciunt molestiae culpa
        architecto ducimus nulla incidunt deleniti provident ea.
      </p>
      <Input />
      <Button type="b2">learn more</Button>

      <Heading as="h3"> heading 1</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        repellendus ab laudantium aut numquam suscipit! Nesciunt molestiae culpa
        architecto ducimus nulla incidunt deleniti provident ea.
      </p>
      <Input />
      <Button onClick={() => alert("making progress")} type="b3">
        learn more
      </Button>
    </div>
  );
};

export default TestApp;
