// src/global.d.ts

interface Window {
    ewConfirm: (options: {
        title: string;
        content: string;
        showCancel: boolean;
        sure: (context: { close: () => void }) => void;
    }) => void;
}
