import React, { useState } from 'react';
import { ClipboardCopy, Check } from 'lucide-react';

const CopyButton = ({ text }) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 2000);
    }

    return (
        <button
            onClick={handleCopy}
            className="md:p-2 p-1 rounded-xl hover:cursor-pointer bg-gray-600 hover:bg-gray-800 transition"
            title={copied ? "Copied!" : "Copy to clipboard"}
        >
            {copied ? <Check size={20} strokeWidth={5} className="font-bold text-green-600" /> : <ClipboardCopy size={20} />}
        </button>
    )
}

export default CopyButton
