import React from 'react';

export const renderMarkdown = (text:any) => {
    const lines = text.split('\n');
    const elements:any[] = [];

    lines.forEach((line:any, lineIndex:any) => {
        if (line.trim().startsWith('*')) {
            const listItemText = line.substring(line.indexOf('*') + 1).trim();
            elements.push(<li className={"list-none my-2"} key={lineIndex}>{renderText(listItemText)}</li>);
        } else {
            elements.push(<p key={lineIndex}>{renderText(line)}</p>);
        }
    });

    return <>{elements}</>;
};

const renderText = (text:any) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part:any, index:any) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            const boldText = part.substring(2, part.length - 2);
            return <strong className={"text-[17px]"} key={index}>{boldText}</strong>;
        }
        return part;
    });
};