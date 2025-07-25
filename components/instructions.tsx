import { Mail, Inbox, Calendar } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";

const Instruction = () => {
  return (
    <div className="mt-8 text-center">
      <Card className="max-w-4xl mx-auto backdrop-blur-md bg-white/70 border-white/20 shadow-xl">
        <CardContent>
          <h3 className="font-semibold mb-4 text-xl">
            Platform-Specific Instructions
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-blue-600">
                <Mail className="h-5 w-5" />
                Gmail
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Go to Gmail Settings → General</li>
                <li>• Scroll to &quot;Signature&quot; section</li>
                <li>• Paste the copied signature</li>
                <li>• Save changes</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-blue-600">
                <Inbox className="h-5 w-5" />
                Outlook
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• File → Options → Mail</li>
                <li>• Click &quot;Signatures...&quot;</li>
                <li>• New → Paste HTML code</li>
                <li>• Set as default signature</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-blue-600">
                <Calendar className="h-5 w-5" />
                Monday.com
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Profile → Personal Info</li>
                <li>• Email Signature section</li>
                <li>• Switch to HTML mode</li>
                <li>• Paste and save</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Instruction;
