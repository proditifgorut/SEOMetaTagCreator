import React from 'react';
import { Wand2, Globe, FileText, Tags } from 'lucide-react';
import { MetaData } from '../App';

interface InputFormProps {
  metaData: MetaData;
  setMetaData: (data: MetaData) => void;
  setGeneratedMeta: (meta: { title: string; description: string }) => void;
}

const InputForm: React.FC<InputFormProps> = ({ metaData, setMetaData, setGeneratedMeta }) => {
  const handleGenerate = () => {
    const { title, description, keywords } = metaData;
    
    let generatedTitle = title;
    let generatedDescription = description;

    if (!title && keywords) {
      const keywordArray = keywords.split(',').map(k => k.trim()).filter(k => k);
      if (keywordArray.length > 0) {
        generatedTitle = `${keywordArray[0]} - ${keywordArray.slice(1, 3).join(' & ')} Terbaik 2025`;
      }
    }

    if (!description && keywords) {
      const keywordArray = keywords.split(',').map(k => k.trim()).filter(k => k);
      if (keywordArray.length > 0) {
        generatedDescription = `Temukan ${keywordArray[0]} terbaik di Indonesia. ` +
          `Kami menyediakan ${keywordArray.slice(0, 3).join(', ')} berkualitas tinggi dengan harga terjangkau. ` +
          `Dapatkan penawaran spesial hari ini!`;
      }
    }

    if (generatedTitle.length > 60) {
      generatedTitle = generatedTitle.substring(0, 57) + '...';
    }

    if (generatedDescription.length > 160) {
      generatedDescription = generatedDescription.substring(0, 157) + '...';
    }

    setGeneratedMeta({
      title: generatedTitle || title,
      description: generatedDescription || description
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-2 rounded-lg">
          <FileText className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Informasi Website</h2>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Judul/Topik Website
            </div>
          </label>
          <input
            type="text"
            value={metaData.title}
            onChange={(e) => setMetaData({ ...metaData, title: e.target.value })}
            placeholder="Contoh: Toko Online Sepatu Olahraga"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
          />
          <p className="text-xs text-gray-500 mt-1">Max 60 karakter untuk hasil optimal</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Tags className="w-4 h-4" />
              Kata Kunci (pisahkan dengan koma)
            </div>
          </label>
          <input
            type="text"
            value={metaData.keywords}
            onChange={(e) => setMetaData({ ...metaData, keywords: e.target.value })}
            placeholder="sepatu olahraga, nike, adidas, running shoes"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Deskripsi Singkat
            </div>
          </label>
          <textarea
            value={metaData.description}
            onChange={(e) => setMetaData({ ...metaData, description: e.target.value })}
            placeholder="Jelaskan tentang website Anda..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
          />
          <p className="text-xs text-gray-500 mt-1">Max 160 karakter untuk hasil optimal</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              URL Website (Opsional)
            </div>
          </label>
          <input
            type="text"
            value={metaData.url}
            onChange={(e) => setMetaData({ ...metaData, url: e.target.value })}
            placeholder="https://www.contoh.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
          />
        </div>

        <button
          onClick={handleGenerate}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
        >
          <Wand2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          Generate Meta Tags
        </button>
      </div>
    </div>
  );
};

export default InputForm;
