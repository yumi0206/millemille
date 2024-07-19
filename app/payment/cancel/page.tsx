import React from 'react';
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const CancelPage = () => {
  return (
    <div className="container mt-12 mb-28 mx-auto flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold mt-4">決済キャンセル</h1>
      <Alert variant="destructive" className="max-w-md">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>キャンセルされました</AlertTitle>
        <AlertDescription>
          ケーキの注文がキャンセルされました。決済は行われていません。
        </AlertDescription>
      </Alert>
      <p className="text-center text-gray-600 max-w-md">
        ご注文プロセスに問題がありましたか？ご不明な点がございましたら、お気軽にお問い合わせください。
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> ホームに戻る
          </Link>
        </Button>
        <Button asChild className="w-full sm:w-auto">
          <Link href="/shop">
            商品一覧に戻る
          </Link>
        </Button>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">お問い合わせ</h2>
        <p className="text-gray-600">Patisserie mille.mille</p>
        <p className="text-gray-600">パティスリー　ミル.ミル</p>
        <p className="text-gray-600">〒085-0058 北海道釧路市愛国東３丁目１−１２</p>
        <p className="text-gray-600">TEL：XXX-XXX-XXXX</p>
      </div>
    </div>
  );
};

export default CancelPage;