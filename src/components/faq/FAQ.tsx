// @ts-nocheck
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../shadcn/components/ui/accordion";

type Props = {};

export default function FAQ({}: Props) {
  return (
    <div className="w-full bg-[#E8EEE7] rounded-3xl flex h-[600px] ">
      <div>
        <div className="flex flex-1  flex-col p-20">
          <div className="text-[#2DA950] text-[36px] font-normal font-grace ">
            What's on your mind
          </div>
          <div className="text-[44px] font-semibold font-manrope w-[500px] leading-[3.5rem]">
            Ask Questions
          </div>
        </div>
        <div>
          <svg
            width="400"
            viewBox="0 0 491 475"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M251.005 123.04H14.5072V0H255.167C369.093 0 401.151 14.6756 444.456 57.9807C477.934 91.7389 490.999 135.444 490.999 205.385V514.607H349.717V205.385C349.717 204.652 349.706 203.921 349.685 203.191L275.051 253.194L275.078 253.215L144.958 340.344C136.345 346.116 130.769 355.335 130.769 365.723C130.769 383.206 146.563 397.378 166.047 397.378L166.077 397.393H283.781V514.592H166.077H166.05C74.3429 514.592 0 447.884 0 365.596C0 313.559 29.7294 267.753 74.779 241.107L251.005 123.04Z"
              fill="url(#paint0_linear_0_212)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_212"
                x1="245.5"
                y1="2.84126e-08"
                x2="245"
                y2="457.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flex-1 items-center flex pr-10 ">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-manrope font-semibold text-lg">
              Do you offer freelancers?
            </AccordionTrigger>
            <AccordionContent className="font-manrope  text-sm opacity-50">
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, and refer to the agreement. Escalate to platform
              support if needed, considering mediation. Review policies, seek
              collaborative solutions for resolution.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-manrope font-semibold text-lg">
              What’s the guarantee that I will be satisfied with the hired
              talent?
            </AccordionTrigger>
            <AccordionContent className="font-manrope  text-sm opacity-50">
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, and refer to the agreement. Escalate to platform
              support if needed, considering mediation. Review policies, seek
              collaborative solutions for resolution.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-manrope font-semibold text-lg">
              Can I hire multiple talents at once?
            </AccordionTrigger>
            <AccordionContent className="font-manrope  text-sm opacity-50">
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, and refer to the agreement. Escalate to platform
              support if needed, considering mediation. Review policies, seek
              collaborative solutions for resolution.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-manrope font-semibold text-lg">
              Why should I not go to an agency directly?
            </AccordionTrigger>
            <AccordionContent className="font-manrope  text-sm opacity-50">
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, and refer to the agreement. Escalate to platform
              support if needed, considering mediation. Review policies, seek
              collaborative solutions for resolution.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-manrope font-semibold text-lg">
              Who can help me pick a right skillset and duration for me?
            </AccordionTrigger>
            <AccordionContent className="font-manrope  text-sm opacity-50">
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, and refer to the agreement. Escalate to platform
              support if needed, considering mediation. Review policies, seek
              collaborative solutions for resolution.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
