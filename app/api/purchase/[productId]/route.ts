import { NextRequest, NextResponse } from "next/server";
import initStripe from 'stripe';

export async function GET(req: NextRequest, { params }: { params: { productId: string } }) {
  const stripe = new initStripe(process.env.STRIPE_SECRET_KEY!);

  // 商品情報を取得
  const product = await stripe.products.retrieve(params.productId);

  // 商品に関連する価格を取得
  const prices = await stripe.prices.list({ product: params.productId });
  const price = prices.data[0]; // 最初の価格を使用

  const url = new URL(req.url);
  const quantity = parseInt(url.searchParams.get('quantity') || '1', 10);

  const session = await stripe.checkout.sessions.create({
    mode: 'payment', // 'subscription' から 'payment' に変更
    payment_method_types: ['card'],
    line_items: [
      {
        price: price.id, // 取得した価格IDを使用
        quantity: quantity,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_URL}/payment/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/payment/cancel`,
  });

  return NextResponse.json({
    id: session.id,
    message: 'Session created',
  });
}