import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactQA = () => {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Q. ホールケーキの予約はできますか？
          </AccordionTrigger>
          <AccordionContent>
            A.店頭、電話、メールにて予約を賜っております。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Q. 定休日はいつですか？</AccordionTrigger>
          <AccordionContent>
          A.毎週月・火が定休日です。<br/>その他夏季休業・冬季休業・臨時休業をする場合がございます。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Q. 駐車場はありますか？</AccordionTrigger>
          <AccordionContent>
            A.当店正面とお向かいに駐車場をご用意しております。
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default ContactQA;
