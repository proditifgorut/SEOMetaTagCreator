import React from 'react';
import { Eye, Globe } from 'lucide-react';

interface MetaPreviewProps {
  title: string;
  description: string;
  url: string;
}

const MetaPreview: React.FC<MetaPreviewProps> = ({ title, description, url }) => {
  const displayUrl = url || 'https://www.contoh.com';
  const displayTitle = title || 'Judul Website Anda';
  const displayDescription = description || 'Deskripsi website Anda akan muncul di sini...';

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-100 p-2 rounded-lg">
          <Eye className="w-5 h-5 text-purple-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Preview Google Search</h2>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <Globe className="w-4 h-4 text-gray-600" />
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span className="font-medium">{displayUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-medium text-blue-700 hover:underline cursor-pointer mb-2 line-clamp-1">
          {displayTitle}
        </h3>
        
        <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
          {displayDescription}
        </p>

        <div className="mt-4 pt-4 border-t border-gray-300">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Panjang Title: <span className={`font-semibold ${title.length > 60 ? 'text-red-600' : 'text-green-600'}`}>{title.length || 0}/60</span></span>
            <span>Panjang Description: <span className={`font-semibold ${description.length > 160 ? 'text-red-600' : 'text-green-600'}`}>{description.length || 0}/160</span></span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-xs text-blue-900">
          <strong>💡 Tips:</strong> Pastikan title 50-60 karakter dan description 150-160 karakter untuk hasil optimal di Google Search.
        </p>
      </div>
    </div>
  );
};

export default MetaPreview;
