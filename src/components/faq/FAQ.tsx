// @ts-nocheck
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../shadcn/components/ui/accordion";
import arrowSymbol from "../../assets/arrow-symbol.svg";
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
         <object data={arrowSymbol} type=""></object>
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
