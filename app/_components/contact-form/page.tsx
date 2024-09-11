"use client";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import { submitContact } from "@/lib/contact";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      await submitContact({
        name: formData.name,
        email: formData.email,
        content: formData.message,
        contactType: 'general', // または適切なデフォルト値
      });
      setSubmitMessage("お問い合わせが正常に送信されました。");
      // フォームの内容をクリアする
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitMessage("送信中にエラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium ">
          お名前
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cocoa-500 "
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium ">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-soft "
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium ">
          お問い合わせ内容
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-soft "
        ></textarea>
      </div>
      <div className="flex flex-col items-center">
        <Button
          className="w-fit px-20 mb-2"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "送信中..." : "送信"}
        </Button>
        {submitMessage && (
          <p className={`text-sm ${submitMessage.includes("エラー") ? "text-red-500" : "text-green-500"}`}>
            {submitMessage}
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;