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
import {
  Copy,
  Mail,
  Globe,
  Linkedin,
  Twitter,
  Calendar,
  Inbox,
  Palette,
  User,
  Sparkles,
  Building,
  CreditCard,
  Layout,
} from "lucide-react";

import Instruction from "@/components/instructions";
import { SignatureData, DesignType } from "@/types/signature";
import { designOptions } from "@/app/data/designOptions";
import SignaturePreview from "@/components/preview";

export default function EmailSignatureMaker() {
  const [selectedDesign, setSelectedDesign] = useState<DesignType>("modern");
  const [signatureData, setSignatureData] = useState<SignatureData>({
    name: "John Doe",
    title: "Senior Developer",
    company: "Adonph",
    email: "john.doe@adonph.com",
    phone: "+1 (555) 123-4567",
    website: "https://adonph.com",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Adonph Email Signature
          </h1>
          <p className="text-gray-600 text-lg">
            Create professional email signatures with multiple design options
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
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
                  <SelectTrigger className="backdrop-blur-sm bg-white/50 border-gray-200 hover:border-gray-300">
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
                  <SelectContent className="bg-white">
                    {designOptions.map((design) => (
                      <SelectItem key={design.value} value="light">
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
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  value={signatureData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Adonph"
                  className="backdrop-blur-sm bg-white/50 border-gray-200 hover:border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={signatureData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john.doe@adonph.com"
                  className="backdrop-blur-sm bg-white/50 border-gray-200 hover:border-gray-300"
                />
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
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={signatureData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  placeholder="https://adonph.com"
                  className="backdrop-blur-sm bg-white/50 border-gray-200 hover:border-gray-300"
                />
              </div>

              <Separator className="bg-white/30" />

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">
                  Social Links (Optional)
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-blue-600" />
                    LinkedIn Profile
                  </Label>
                  <Input
                    id="linkedin"
                    value={signatureData.linkedin}
                    onChange={(e) =>
                      handleInputChange("linkedin", e.target.value)
                    }
                    placeholder="https://linkedin.com/in/johndoe"
                    className="backdrop-blur-sm bg-white/50 border-gray-200 hover:border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitter" className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-blue-400" />
                    Twitter Profile
                  </Label>
                  <Input
                    id="twitter"
                    value={signatureData.twitter}
                    onChange={(e) =>
                      handleInputChange("twitter", e.target.value)
                    }
                    placeholder="https://twitter.com/johndoe"
                    className="backdrop-blur-sm bg-white/50 border-gray-200 hover:border-gray-300"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Preview Section with Glass Effect */}
          <SignaturePreview
            selectedDesignOption="selectedDesign"
            designData="signatureData"
          />
        </div>

        {/* Design Showcase */}
        <div className="mt-8">
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
                      {design.value === "modern" &&
                        "Clean design with colored accents and modern typography"}
                      {design.value === "classic" &&
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
