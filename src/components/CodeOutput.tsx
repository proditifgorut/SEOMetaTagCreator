import React, { useState } from 'react';
import { Code, Copy, Check } from 'lucide-react';

interface CodeOutputProps {
  title: string;
  description: string;
  keywords: string;
}

const CodeOutput: React.FC<CodeOutputProps> = ({ title, description, keywords }) => {
  const [copied, setCopied] = useState(false);

  const generateCode = () => {
    return `<!-- Meta Tags untuk SEO -->
<title>${title || 'Judul Website Anda'}</title>
<meta name="description" content="${description || 'Deskripsi website Anda'}" />
<meta name="keywords" content="${keywords || 'kata kunci, website'}" />

<!-- Open Graph Meta Tags -->
<meta property="og:title" content="${title || 'Judul Website Anda'}" />
<meta property="og:description" content="${description || 'Deskripsi website Anda'}" />
<meta property="og:type" content="website" />

<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title || 'Judul Website Anda'}" />
<meta name="twitter:description" content="${description || 'Deskripsi website Anda'}" />`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-lg">
            <Code className="w-5 h-5 text-green-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Kode HTML</h2>
        </div>
        
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            copied 
              ? 'bg-green-100 text-green-700 border border-green-300' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">Tersalin!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span className="hidden sm:inline">Salin Kode</span>
            </>
          )}
        </button>
      </div>

      <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
        <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap break-all">
          <code>{generateCode()}</code>
        </pre>
      </div>

      <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
        <p className="text-xs text-green-900">
          <strong>📋 Cara Pakai:</strong> Salin kode di atas dan paste di dalam tag <code className="bg-green-200 px-1 rounded">&lt;head&gt;</code> di file HTML website Anda.
        </p>
      </div>
    </div>
  );
};

export default CodeOutput;
