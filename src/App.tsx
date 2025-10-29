import React, { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import MetaPreview from './components/MetaPreview';
import CodeOutput from './components/CodeOutput';
import Tips from './components/Tips';

export interface MetaData {
  title: string;
  description: string;
  keywords: string;
  url: string;
}

function App() {
  const [metaData, setMetaData] = useState<MetaData>({
    title: '',
    description: '',
    keywords: '',
    url: ''
  });

  const [generatedMeta, setGeneratedMeta] = useState<{
    title: string;
    description: string;
  }>({
    title: '',
    description: ''
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <InputForm 
              metaData={metaData}
              setMetaData={setMetaData}
              setGeneratedMeta={setGeneratedMeta}
            />
            <Tips />
          </div>
          
          <div className="space-y-6">
            <MetaPreview 
              title={generatedMeta.title || metaData.title}
              description={generatedMeta.description || metaData.description}
              url={metaData.url}
            />
            <CodeOutput 
              title={generatedMeta.title || metaData.title}
              description={generatedMeta.description || metaData.description}
              keywords={metaData.keywords}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
