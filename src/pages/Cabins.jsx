// import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showCabin, setShowCabin] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />

        <Button onClick={() => setShowCabin((show) => !show)}>
          Add new Cabin{" "}
        </Button>
        {showCabin && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
