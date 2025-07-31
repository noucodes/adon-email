"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Palette } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

import Instruction from "@/components/instructions";
import { SignatureData, DesignType } from "@/types/signature";
import { designOptions } from "@/app/data/designOptions";
import SignaturePreview from "@/components/preview";

export default function EmailSignatureMaker() {
  const [selectedDesign, setSelectedDesign] = useState<DesignType>("design1");
  const [signatureData, setSignatureData] = useState<SignatureData>({
    name: "John Doe",
    title: "Senior Developer",
    phone: "07 5586 1400",
    website1: "www.adongroup.com.au",
    website2: "www.adonworkforce.com.au",
  });

  const handleInputChange = (field: keyof SignatureData, value: string) => {
    setSignatureData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const selectedDesignOption = designOptions.find(
    (d) => d.value === selectedDesign
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-zinc-200 to-neutral-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto p-6">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "white",
            },
          }}
        />
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-950 bg-clip-text text-transparent mb-4">
            ADONPH
          </h1>
          <p className="text-gray-600 text-lg">
            Create professional email signatures with multiple design options
          </p>
        </div>

        <div className="grid grid-cols-[2fr_3fr] gap-8 max-w-7xl mx-auto">
          <Card className="backdrop-blur-md bg-white/70 border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Signature Details
              </CardTitle>
              <CardDescription>
                Fill in your information and choose a design template
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Design Selector */}
              <div className="space-y-3">
                <Label className="text-base font-semibold flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Choose Design Template
                </Label>
                <Select
                  value={selectedDesign}
                  onValueChange={(value: DesignType) =>
                    setSelectedDesign(value)
                  }
                >
                  <SelectTrigger className="backdrop-blur-sm bg-white/50 border-gray-200 hover:border-gray-300 focus:outline-hidden">
                    <SelectValue>
                      <div className="flex items-center gap-2">
                        {selectedDesignOption && (
                          <selectedDesignOption.icon className="h-4 w-4" />
                        )}
                        <span>{selectedDesignOption?.label}</span>
                        <span className="text-sm text-gray-500">
                          - {selectedDesignOption?.description}
                        </span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-white  border-gray-200 hover:border-gray-300 focus:outline-hidden">
                    {designOptions.map((design) => (
                      <SelectItem key={design.value} value={design.value}>
                        <div className="flex items-center gap-2">
                          <design.icon className="h-4 w-4" />
                          <div>
                            <div className="font-medium">{design.label}</div>
                            <div className="text-sm text-gray-500">
                              {design.description}
                            </div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Separator className="bg-white/30" />

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={signatureData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
                    className="backdrop-blur-sm bg-white/50 border-gray-200 hover:border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title *</Label>
                  <Input
                    id="title"
                    value={signatureData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Senior Developer"
                    className="backdrop-blur-sm bg-white/50 border-gray-200 hover:border-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={signatureData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="backdrop-blur-sm bg-white/50 border-gray-200 hover:border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website1">Website 1</Label>
                <Input
                  id="website1"
                  value={signatureData.website1}
                  onChange={(e) =>
                    handleInputChange("website1", e.target.value)
                  }
                  placeholder="https://adonph.com"
                  className="backdrop-blur-sm bg-white/50 border-gray-200 hover:border-gray-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website2">Website 2</Label>
                <Input
                  id="website2"
                  value={signatureData.website2}
                  onChange={(e) =>
                    handleInputChange("website2", e.target.value)
                  }
                  placeholder="https://adonph.com"
                  className="backdrop-blur-sm bg-white/50 border-gray-200 hover:border-gray-300"
                />
              </div>
            </CardContent>
          </Card>
          {/* Preview Section with Glass Effect */}
          <SignaturePreview
            selectedDesign={selectedDesign}
            designData={signatureData}
          />
        </div>

        {/* Design Showcase */}
        <div className="mt-8 hidden">
          <Card className="max-w-6xl mx-auto backdrop-blur-md bg-white/70 border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Design Templates Overview
              </CardTitle>
              <CardDescription className="text-center">
                Choose from 6 professionally designed signature templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {designOptions.map((design) => (
                  <div
                    key={design.value}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedDesign === design.value
                        ? "border-blue-500 bg-blue-50/50"
                        : "border-gray-200 hover:border-gray-300 bg-white/50"
                    }`}
                    onClick={() =>
                      setSelectedDesign(design.value as DesignType)
                    }
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <design.icon className="h-5 w-5 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">{design.label}</h3>
                        <p className="text-sm text-gray-600">
                          {design.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {design.value === "design1" &&
                        "Clean design with colored accents and design1 typography"}
                      {design.value === "design2" &&
                        "Traditional serif fonts with professional styling"}
                      {design.value === "minimal" &&
                        "Simple, clean layout with minimal visual elements"}
                      {design.value === "creative" &&
                        "Colorful gradient background with playful elements"}
                      {design.value === "corporate" &&
                        "Formal business style with structured layout"}
                      {design.value === "card" &&
                        "Business card inspired layout with avatar placeholder"}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Instruction />
      </div>
    </div>
  );
}
