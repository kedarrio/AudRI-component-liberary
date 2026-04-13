import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './FileUpload.module.css';

export interface FileUploadProps {
  label?: string;
  multiple?: boolean;
  accept?: string;
  onFileSelect: (files: FileList) => void;
  className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label = 'Drop files to analyze',
  multiple = false,
  accept,
  onFileSelect,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
      onFileSelect(e.target.files);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      setSelectedFiles(files);
      onFileSelect(e.dataTransfer.files);
    }
  };

  return (
    <div className={clsx(styles.container, className)}>
      <div 
        className={styles.dropzone}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <span className={clsx('material-symbols-rounded', styles.icon)}>upload_file</span>
        <div className={styles.title}>{label}</div>
        <div className={styles.subtitle}>
          {accept ? `Accepts: ${accept}` : 'PDF · DOCX · XLSX · Scanned Images'}
        </div>
        <input
          ref={inputRef}
          type="file"
          multiple={multiple}
          accept={accept}
          className={styles.input}
          onChange={handleFileChange}
        />
      </div>

      {selectedFiles.length > 0 && (
        <div className={styles.files}>
          {selectedFiles.map((file) => (
            <div key={file.name} className={styles.fileItem}>
              <span>{file.name}</span>
              <span style={{ opacity: 0.5 }}>{(file.size / 1024).toFixed(1)} KB</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
