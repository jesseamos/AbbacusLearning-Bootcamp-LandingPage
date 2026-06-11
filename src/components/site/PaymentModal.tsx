import { Building, Copy, Wallet, Check } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const bankDetails = {
  bank: "GTBank",
  name: "Abbacus Learning Solutions",
  number: "0123456789",
};

const whatsappNumber = "+23490928666";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-blue hover:text-brand-blue/80 transition-colors cursor-pointer"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export function PaymentModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Join the Community</DialogTitle>
          <DialogDescription className="text-center">
            Complete your payment to access the AbbacusLearning community
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Program Fee</p>
            <p className="text-4xl font-bold tracking-tight">₦50,000</p>
            <p className="text-xs text-muted-foreground mt-1">One-time payment</p>
          </div>

          <div className="rounded-xl border bg-card p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Bank Transfer</span>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Bank</span>
                <span className="font-medium">{bankDetails.bank}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Account Name</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{bankDetails.name}</span>
                  <CopyButton text={bankDetails.name} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Account Number</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-base">{bankDetails.number}</span>
                  <CopyButton text={bankDetails.number} />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-amber-50 border-amber-200 p-4 space-y-2">
            <div className="flex items-start gap-2">
              <Wallet className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-amber-800">After Payment</p>
                <p className="text-xs text-amber-700 mt-1">
                  Send your payment receipt screenshot to our WhatsApp line to gain instant access to the community.
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-green-600 text-white text-sm font-medium px-4 py-2.5 hover:bg-green-700 transition cursor-pointer"
            >
              Send Screenshot on WhatsApp
            </a>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Having issues? Reach out to{" "}
            <a href={`https://wa.me/${whatsappNumber}`} className="text-brand-blue underline underline-offset-2">
              our support team
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
