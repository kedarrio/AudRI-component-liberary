import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Button } from '@lib';
import styles from './CodeBlock.module.css';

/**
 * CodeBlock component for library previews.
 * Uses Prism for syntax highlighting.
 */
export interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'tsx' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.lang}>{language}</span>
        <Button
          size="xs"
          variant="ghost"
          icon={copied ? 'check' : 'content_copy'}
          onClick={handleCopy}
          className={styles.copyBtn}
        >
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </div>
      <Highlight
        theme={themes.github}
        code={code.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, margin: 0, padding: '16px', fontSize: '12px', background: 'transparent' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
