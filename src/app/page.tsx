import Navbar from "./components/Navbar";
import Card from "./about/components/Card";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
        <div>
          <Card title="komponen 1" description="ini adalah komponen pertama" />
          <Card title="komponen 2" description="ini adalah komponen kedua" />
        </div>
    </>
  );
}