import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, CheckCircle } from "lucide-react";

interface ResumeUploadProps {
  onFileUpload: (file: File) => void;
}

export const ResumeUpload = ({ onFileUpload }: ResumeUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === "application/pdf" || droppedFile.type.includes("document"))) {
      setFile(droppedFile);
      onFileUpload(droppedFile);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      onFileUpload(selectedFile);
    }
  };

  return (
    <Card className="p-8">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive ? "border-primary bg-primary/5" : "border-border"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
      >
        {file ? (
          <div className="space-y-4">
            <CheckCircle className="mx-auto h-12 w-12 text-success" />
            <div>
              <h3 className="text-lg font-semibold">{file.name}</h3>
              <p className="text-muted-foreground">Resume uploaded successfully</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
            <div>
              <h3 className="text-lg font-semibold">Upload Your Resume</h3>
              <p className="text-muted-foreground">
                Drag & drop your resume here, or click to browse
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Supports PDF and DOCX files
              </p>
            </div>
            <div>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileInput}
                className="hidden"
                id="resume-upload"
              />
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('resume-upload')?.click()}
                className="cursor-pointer"
              >
                <FileText className="mr-2 h-4 w-4" />
                Choose File
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};