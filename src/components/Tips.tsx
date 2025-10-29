import React from 'react';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

const Tips: React.FC = () => {
  const tips = [
    'Gunakan kata kunci utama di awal title tag',
    'Buat description yang menarik dan mengajak klik',
    'Hindari keyword stuffing, tulis secara natural',
    'Sertakan call-to-action di description',
    'Update meta tags secara berkala'
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-6 md:p-8 border border-yellow-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-yellow-100 p-2 rounded-lg">
          <Lightbulb className="w-5 h-5 text-yellow-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Tips SEO</h2>
      </div>

      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tips;
