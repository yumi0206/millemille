// import { NextRequest, NextResponse } from "next/server";
// import axios from "axios";

// const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message/push";
// const LINE_CHANNEL_ACCESS_TOKEN =
//   "OPSMpqWzHhPCHCMisqQnQARUI0HuH5mRQeJ/B5rksTslcp/naEuYgXoFM1BM1u/yHNYA+NVWR8IosKQVMFiCtlFeeVVhC9NjV/5hmoSUEEdyrj2nNjJNiqbuLBkxf6rCZOXR37M41yPh3xhmTo6JowdB04t89/1O/w1cDnyilFU=";
// const LINE_USER_ID = "Ufa02558693bb2f17ae73bae695860630";

// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   const { product, quantity, pickupDate, pickupTime } = body;

//   const formattedPickupDate = new Date(pickupDate)
//     .toLocaleString("ja-JP", {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     })
//     .replace(/\//g, "-")
//     .replace(" ", " ");

//   const message = `新しい注文があります！\n商品: ${product}\n数量: ${quantity}\n受け取り日: ${formattedPickupDate}\n受け取り時間: ${pickupTime}`;
//   try {
//     await axios.post(
//       LINE_MESSAGING_API,
//       {
//         to: LINE_USER_ID,
//         messages: [
//           {
//             type: "text",
//             text: message,
//           },
//         ],
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
//         },
//       }
//     );

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error sending message to LINE:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to send message to LINE" },
//       { status: 500 }
//     );
//   }
// }
