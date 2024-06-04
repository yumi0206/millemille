import ContactForm from "../_components/ContactForm/page";
import ContactQA from "../_components/ContactQA/page";

const Contact = () => {
  return (
    <div className="max-w-4xl container mx-auto pt-16 pb-16">
      <h1 className="text-3xl font-bold mb-4">お問い合わせ</h1>
      <p className="mb-4">
        お問い合わせは、メールまたはお電話でお受けしています。
      </p>
      <ul className="mb-8">
        <li className="mb-2">
          ●メールでのお問い合せ：お返事に時間がかかる場合がございます。（2～3営業日以内に返信がない場合は大変恐れ入りますが改めてご連絡をお願い致します。）
        </li>
        <li>
          ●電話でのお問い合わせ：お電話のお問い合わせは営業日の対応時間内（12:00～17：00）にお願い致します。TEL045-592-9093
        </li>
      </ul>
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8">
        <strong>
          ※以下のお問い合わせフォームからご注文はお受けしておりません。
        </strong>
        ご注文はお電話からお願いいたします。
      </div>

      <div className="">
        <div className="pt-12 pb-16">
          <h2 className="text-2xl font-bold my-2">よくあるお問い合せ</h2>
          <ContactQA />
        </div>
        <div className=" pt-12 pb-16">
          <h2 className="text-2xl font-bold my-2">お問い合わせフォーム</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
