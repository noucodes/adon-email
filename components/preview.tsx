import { Label } from "@/components/ui/label";
import { Mail, Calendar, Copy, Globe, Inbox } from "lucide-react";
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
import { toast } from "sonner";
import {
  generateGmailSignature,
  generateOutlookSignature,
  generateMondaySignature,
} from "@/utils/signatureGenerator";
import { SignatureData, DesignType } from "@/types/signature";

type Props = {
  designData: DesignType;
  selectedDesignOption: SignatureData;
};

const SignaturePreview: React.FC<Props> = ({
  selectedDesignOption,
  designData,
}) => {
  const copyToClipboard = async (content: string, platform: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast("Copied!", {
        description: `${platform} signature HTML copied to clipboard`,
      });
    } catch (err) {
      toast.warning("Error", {
        description: "Failed to copy to clipboard",
      });
    }
  };
  return (
    <Card className="backdrop-blur-md bg-white/70 border-white/20 shadow-xl">
      {/* Preview Section with Glass Effect */}
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
        <Tabs defaultValue="gmail" className="w-full">
          <TabsList className="grid w-full grid-cols-3 backdrop-blur-sm bg-white/50">
            <TabsTrigger value="gmail" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Gmail
            </TabsTrigger>
            <TabsTrigger value="outlook" className="flex items-center gap-2">
              <Inbox className="h-4 w-4" />
              Outlook
            </TabsTrigger>
            <TabsTrigger value="monday" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Monday
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gmail" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Gmail Version</h3>
              <Button
                onClick={() =>
                  copyToClipboard(
                    generateGmailSignature(selectedDesignOption, designData),
                    "Gmail"
                  )
                }
                size="sm"
                className="gap-2"
              >
                <Copy className="h-4 w-4" />
                Copy HTML
              </Button>
            </div>
            <div className="border rounded-lg p-4 bg-white/80 backdrop-blur-sm max-h-96 overflow-y-auto">
              <div
                dangerouslySetInnerHTML={{
                  __html: generateGmailSignature(
                    selectedDesignOption,
                    designData
                  ),
                }}
              />
            </div>
            <div className="p-3 bg-gray-50/80 backdrop-blur-sm rounded-lg">
              <Label className="text-sm font-medium text-gray-700">
                HTML Code:
              </Label>
              <pre className="mt-2 text-xs bg-gray-100/80 p-2 rounded overflow-x-auto max-h-32">
                <code>
                  {generateGmailSignature(selectedDesignOption, designData)}
                </code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="outlook" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Outlook Version</h3>
              <Button
                onClick={() =>
                  copyToClipboard(
                    generateOutlookSignature(selectedDesignOption, designData),
                    "Outlook"
                  )
                }
                size="sm"
                className="gap-2"
              >
                <Copy className="h-4 w-4" />
                Copy HTML
              </Button>
            </div>
            <div className="border rounded-lg p-4 bg-white/80 backdrop-blur-sm max-h-96 overflow-y-auto">
              <div
                dangerouslySetInnerHTML={{
                  __html: generateOutlookSignature(
                    selectedDesignOption,
                    designData
                  ),
                }}
              />
            </div>
            <div className="p-3 bg-gray-50/80 backdrop-blur-sm rounded-lg">
              <Label className="text-sm font-medium text-gray-700">
                HTML Code:
              </Label>
              <pre className="mt-2 text-xs bg-gray-100/80 p-2 rounded overflow-x-auto max-h-32">
                <code>
                  {generateOutlookSignature(selectedDesignOption, designData)}
                </code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="monday" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Monday.com Version</h3>
              <Button
                onClick={() =>
                  copyToClipboard(
                    generateMondaySignature(selectedDesignOption, designData),
                    "Monday.com"
                  )
                }
                size="sm"
                className="gap-2"
              >
                <Copy className="h-4 w-4" />
                Copy HTML
              </Button>
            </div>
            <div className="border rounded-lg p-4 bg-white/80 backdrop-blur-sm max-h-96 overflow-y-auto">
              <div
                dangerouslySetInnerHTML={{
                  __html: generateMondaySignature(
                    selectedDesignOption,
                    designData
                  ),
                }}
              />
            </div>
            <div className="p-3 bg-gray-50/80 backdrop-blur-sm rounded-lg">
              <Label className="text-sm font-medium text-gray-700">
                HTML Code:
              </Label>
              <pre className="mt-2 text-xs bg-gray-100/80 p-2 rounded overflow-x-auto max-h-32">
                <code>
                  {generateMondaySignature(selectedDesignOption, designData)}
                </code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SignaturePreview;
