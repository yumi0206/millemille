"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductType } from "@/lib/microcms";
import { DateTimeOptions, isWeekday, minDate } from "@/lib/utils";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ProductOrderFormProps {
  product: ProductType;
}

const ProductOrderForm: React.FC<ProductOrderFormProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [pickupTime, setPickupTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // LINEの公式アカウントID（@から始まるID）
    const lineAccountId = "@145xdcub";

    // 注文内容のメッセージを作成
    const message = encodeURIComponent(
      `新しい注文\n` +
        `商品: ${product.title}\n` +
        `数量: ${quantity}\n` +
        `受け取り日: ${pickupDate?.toLocaleDateString()}\n` +
        `受け取り時間: ${pickupTime}`
    );

    // LINE URL schemeを使用してURLを生成
    const lineUrl = `https://line.me/R/oaMessage/${lineAccountId}/?${message}`;

    // 新しいウィンドウでLINEのURLを開く
    window.open(lineUrl, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-lg shadow-md"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          購入数
        </label>
        <div className="flex items-center w-full ">
          <button
            type="button"
            onClick={() => handleQuantityChange(-1)}
            className="px-4 py-2 bg-gray-200 rounded-l hover:bg-gray-300 transition-colors"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-16 text-center focus:outline-none active:outline-none py-2 pl-4" //TODO
          />
          <button
            type="button"
            onClick={() => handleQuantityChange(1)}
            className="px-4 py-2 bg-gray-200 rounded-r hover:bg-gray-300 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label
          htmlFor="pickupDate"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          お受取日
        </label>
        <DatePicker
          selected={pickupDate}
          onChange={(date: Date | null) => setPickupDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={minDate}
          filterDate={isWeekday}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholderText="日付を選択してください"
          required
        />
      </div>

      <div>
        <label
          htmlFor="pickupTime"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          お受取希望時間
        </label>
        <select
          id="pickupTime"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          required
        >
          <option value="">選択してください</option>
          {DateTimeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <Button
        type="submit"
        className="w-full  py-2 px-4 rounded-md font-medium"
      >
        この内容で注文する
      </Button>
    </form>
  );
};

export default ProductOrderForm;
