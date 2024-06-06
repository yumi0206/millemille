"use client";
import { useState, FormEvent } from "react";

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

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ここでフォームの内容を送信する処理を行う
    console.log("Form Data:", formData);
    // フォームの内容をクリアする
    setFormData({
      name: "",
      email: "",
      message: "",
    });
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
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cocoa-500 focus:border-soft"
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
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-soft focus:border-soft"
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
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-soft focus:border-soft"
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-soft hover:bg-soft/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-soft"
      >
        送信
      </button>
    </form>
  );
};

export default ContactForm;
