import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


export const renderMarkdown = (text?: string | null) => {
    if (!text) return null;

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                a: ({ node, ...props }) => (
                    <a
                        {...props}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-bold text-gray-100 hover:text-gray-300 transition duration-200"
                    />
                ),
                ul: ({ children, ...props }) => (
                    <ul className="flex flex-col gap-2 list-disc list-inside mb-2" {...props}>
                        {children}
                    </ul>
                ),
                ol: ({ children, ...props }) => (
                    <ol className="flex flex-col gap-2 list-decimal list-inside mb-2" {...props}>
                        {children}
                    </ol>
                ),
                li: ({ children, ...props }) => (
                    <li className=" ml-4" {...props}>
                        {children}
                    </li>
                ),
                p: ({ children, ...props }) => (
                    <p className="leading-6 m-none " {...props}>
                        {children}
                    </p>
                ),
                strong: ({ children }) => <strong className="font-semibold text-[17px]">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                blockquote: ({ children }) => (
                    <blockquote className="border-l-2 pl-3 italic text-gray-300">{children}</blockquote>
                ),
            }}
        >
            {text}
        </ReactMarkdown>
    );
};
