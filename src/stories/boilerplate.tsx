/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { JsxComponentDescriptors, SandpackConfig, Wrapper } from '..'
import dataCode from './assets/dataCode.ts?raw'

const defaultSnippetContent = `
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
`

const virtuosoSampleSandpackConfig: SandpackConfig = {
  defaultPreset: 'react',
  presets: [
    {
      name: 'react',
      sandpackTemplate: 'react',
      sandpackTheme: 'light',
      snippetFileName: '/App.js',
      defaultSnippetLanguage: 'jsx',
      defaultSnippetContent,
    },
    {
      name: 'virtuoso',
      sandpackTemplate: 'react-ts',
      sandpackTheme: 'light',
      snippetFileName: '/App.tsx',
      dependencies: {
        'react-virtuoso': 'latest',
        '@ngneat/falso': 'latest',
      },
      files: {
        '/data.ts': dataCode,
      },
    },
  ],
}

const jsxDescriptors: JsxComponentDescriptors = [
  {
    name: 'MyLeaf',
    kind: 'text',
    source: './external',
    props: [
      { name: 'foo', type: 'string' },
      { name: 'bar', type: 'string' },
    ],
  },
  {
    name: 'BlockNode',
    kind: 'flow',
    source: './external',
    props: [],
  },
]

interface WrappedEditorProps {
  markdown: string
  onChange?: (markdown: string) => void
}

export const WrappedLexicalEditor: React.FC<WrappedEditorProps> = ({ markdown, onChange }) => {
  return (
    <Wrapper
      markdown={markdown}
      headMarkdown={markdown}
      sandpackConfig={virtuosoSampleSandpackConfig}
      jsxComponentDescriptors={jsxDescriptors}
      onChange={onChange}
    />
  )
}