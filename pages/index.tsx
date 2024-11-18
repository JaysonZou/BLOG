import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
             This is where I keep track of things.
          </h1>
          <p>
            世上无难事，只要肯登攀。
          </p>
        </div>
      </Container>

      
    </>
  );
}

export default HomePage;
