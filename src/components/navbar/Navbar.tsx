import { Button } from "../../shadcn/components/ui/button";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="w-full  flex justify-between  items-center p-4 border border-[#e7ebee] rounded-full">
      <div className="text-2xl pl-2">Brunel</div>
      <div className="flex gap-4">
        <Button variant={"outline"} className="rounded-full">
          Get Project
        </Button>
        <Button className="rounded-full">Onboard Talent</Button>
      </div>
    </div>
  );
}
