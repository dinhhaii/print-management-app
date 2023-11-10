import Alert from "@/components/Alert";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Image from "next/image";

// https://www.creative-tim.com/learning-lab/tailwind/html/button/argon-dashboard/

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hey</div>
      <Button>TEst</Button>
      <Alert>Alert</Alert>
      <Badge>Badge</Badge>
      <Card />
      <Checkbox />
      <Input />
    </main>
  );
}
