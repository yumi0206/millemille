import ContactForm from "../_components/contact-form/page";
import ContactQA from "../_components/contact-qa/page";

const Contact = () => {
  return (
    <div className="max-w-4xl container mx-auto pt-16 pb-16">
      <h1 className="text-3xl font-bold mb-4">お問い合わせ</h1>
      <p className="mb-4">
        お問い合わせは、メールまたはお電話でお受けしています。
      </p>
      <ul className="mb-8">
        <li className="mb-2">
          ●メールでのお問い合せ:お返事に時間がかかる場合がございます。（2～3営業日以内に返信がない場合は大変恐れ入りますが改めてご連絡をお願い致します。）
        </li>
        <li>
          ●電話でのお問い合わせ:お電話のお問い合わせは営業日の対応時間内（11:00～17:00）にお願い致します。
          TEL XXX-XXX-XXXX
        </li>
      </ul>
      <div className="border-red-400 text-red-700 mb-8">
        <strong>
          ※以下のお問い合わせフォームからご注文はお受けしておりません。
        </strong>
        <br />
        ご注文は店頭・お電話またはメールからお願いいたします。
      </div>

      <div className="">
        <div className="pt-12 pb-16">
          <h2 className="text-xl font-bold my-2" id="qa">
            よくあるお問い合せ
          </h2>
          <ContactQA />
        </div>
        <div className=" pt-12 pb-16">
          <h2 className="text-xl font-bold my-2">お問い合わせフォーム</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
