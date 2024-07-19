import React from 'react';
import { CheckCircle, Cake } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="container mt-12 mb-28 mx-auto flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold mt-4">Thank You for Your Purchase!</h1>
      <Alert className="max-w-2xl">
        <CheckCircle className="h-6 w-6" />
        <AlertTitle>Payment Successful</AlertTitle>
        <AlertDescription>
          Your cake order has been confirmed and is being prepared with love.
        </AlertDescription>
      </Alert>

      <div className="flex items-center gap-4 bg-green-100 p-6 rounded-lg">
        <Cake className="w-12 h-12 text-green-600" />
        <div>
          <p className="font-semibold text-lg">Your Delicious Cake</p>
          <p className="text-sm text-gray-600">Will be ready for pickup soon</p>
        </div>
      </div>

      <div className="text-center max-w-2xl">
        <p className="mb-4">
          We have sent a confirmation email to your registered email address.
          Please check your inbox for order details and pickup instructions.
        </p>
        <p className="text-sm text-gray-600">
          Order ID: #12345 (Replace with actual order ID)
        </p>
      </div>

      <div className="flex gap-4 mt-8">
        <Button asChild className="px-8">
          <Link href="/">Return to Home</Link>
        </Button>
        <Button asChild variant="outline" className="px-8">
          <Link href="/order-status">Check Order Status</Link>
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;