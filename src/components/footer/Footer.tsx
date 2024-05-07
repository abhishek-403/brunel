import atTheRate from '../../assets/at-the-rate.svg'
type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="bg-[#F5F5F5] flex p-10 rounded-3xl justify-between font-manrope text-sm">
      <div className="flex items-center justify-center font-medium gap-2 ">
        <p>
         <object data={atTheRate} type=""></object>
        </p>
        <p>Talup 2023. All rights reserved</p>
      </div>
      <div className="flex gap-5 underline opacity-90  font-normal">
        <p>Terms & Conditions</p>
        <p className="">Privacy Policy</p>
      </div>
    </div>
  );
}