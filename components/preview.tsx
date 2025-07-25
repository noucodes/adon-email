"use client";
import { Calendar, Copy, Globe, Inbox } from "lucide-react";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  generateOutlookSignature,
  generateMondaySignature,
} from "@/utils/signatureGenerator";
import { SignatureData, DesignType } from "@/types/signature";
import { designOptions } from "@/app/data/designOptions";
import { toast } from "sonner";

type Props = {
  designData: SignatureData;
  selectedDesign: DesignType;
};

const SignaturePreview: React.FC<Props> = ({ selectedDesign, designData }) => {
  const copyRenderedSignature = (elementId: string, platform: string) => {
    console.log("clicked");
    const el = document.getElementById(elementId);
    if (!el) return;

    const range = document.createRange();
    range.selectNodeContents(el);

    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        toast.success("Copied!", {
          description: `${platform} signature copied to clipboard`,
        });
      } else {
        throw new Error("Copy command was unsuccessful");
      }
    } catch (err) {
      toast.error("Error", {
        description: "Failed to copy rich HTML content",
      });
      console.log("error:", err);
    }

    selection?.removeAllRanges(); // Cleanup
  };

  const selectedDesignOption = designOptions.find(
    (d) => d.value === selectedDesign
  );

  return (
    <Card className="backdrop-blur-md bg-white/70 border-white/20 shadow-xl ">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-green-600" />
          Platform-Optimized Previews
        </CardTitle>
        <CardDescription>
          <div className="flex items-center gap-2">
            {selectedDesignOption && (
              <selectedDesignOption.icon className="h-4 w-4" />
            )}
            <span>
              Current design: <strong>{selectedDesignOption?.label}</strong>
            </span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="outlook" className="w-full">
          <TabsList className="grid w-full grid-cols-2 backdrop-blur-sm bg-white/50">
            <TabsTrigger value="outlook" className="flex items-center gap-2">
              <Inbox className="h-4 w-4" />
              Gmail/Outlook
            </TabsTrigger>
            <TabsTrigger value="monday" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Monday
            </TabsTrigger>
          </TabsList>

          {/* === Outlook Tab === */}
          <TabsContent value="outlook" className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Outlook Version</h3>
              <Button
                onClick={() =>
                  copyRenderedSignature("outlook-copy-source", "Outlook")
                }
                size="sm"
                className="gap-2 bg-black text-white"
              >
                <Copy className="h-4 w-4" />
                Copy Signature
              </Button>
            </div>
            <div className="border rounded-lg p-4 bg-white/80 backdrop-blur-sm max-h-96 overflow-y-auto">
              <div
                dangerouslySetInnerHTML={{
                  __html: generateOutlookSignature(designData, selectedDesign),
                }}
              />
            </div>
            {/* <div className="p-3 bg-gray-50/80 backdrop-blur-sm rounded-lg">
              <Label className="text-sm font-medium text-gray-700">
                HTML Code:
              </Label>
              <pre className="mt-2 text-xs bg-gray-100/80 p-2 rounded overflow-x-auto max-h-64">
                <code>
                  {generateOutlookSignature(designData, selectedDesign)}
                </code>
              </pre>
            </div> */}
            <div
              id="outlook-copy-source"
              style={{ position: "absolute", left: "-9999px" }}
              dangerouslySetInnerHTML={{
                __html: generateOutlookSignature(designData, selectedDesign),
              }}
            />
          </TabsContent>

          {/* === Monday Tab === */}
          <TabsContent value="monday" className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Monday.com Version</h3>
              <Button
                onClick={() =>
                  copyRenderedSignature("monday-copy-source", "Monday.com")
                }
                size="sm"
                className="gap-2 bg-black text-white"
              >
                <Copy className="h-4 w-4 " />
                Copy Signature
              </Button>
            </div>
            <div className="border rounded-lg p-4 bg-white/80 backdrop-blur-sm max-h-96 overflow-y-auto">
              <div
                dangerouslySetInnerHTML={{
                  __html: generateMondaySignature(designData, selectedDesign),
                }}
              />
            </div>
            {/* <div className="p-3 bg-gray-50/80 backdrop-blur-sm rounded-lg">
              <Label className="text-sm font-medium text-gray-700">
                HTML Code:
              </Label>
              <pre className="mt-2 text-xs bg-gray-100/80 p-2 rounded overflow-x-auto max-h-64">
                <code>
                  {generateMondaySignature(designData, selectedDesign)}
                </code>
              </pre>
            </div> */}
            <div
              id="monday-copy-source"
              style={{ position: "absolute", left: "-9999px" }}
              dangerouslySetInnerHTML={{
                __html: generateMondaySignature(designData, selectedDesign),
              }}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SignaturePreview;
