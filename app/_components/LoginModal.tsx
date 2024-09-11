"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GoogleLogin } from "@/lib/firebase";
import useUserStore from "../store/useStore";

interface LoginModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onOpenChange }) => {
  const { updateUser } = useUserStore();

  const handleLogin = async () => {
    try {
      const user = await GoogleLogin();
      updateUser(true, user.email, user.displayName, user.photoURL);
      onOpenChange(false);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Please log in to access all features.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4">
          <Button onClick={handleLogin}>Login with Google</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
