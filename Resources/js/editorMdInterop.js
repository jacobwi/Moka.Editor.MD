window.initEditorMd = async (editorId, dotNetRef, options) => {
    try {
    // Ensure the DOM is fully loaded
    $(function () {
        const editorConfig = {
            markdown: options.value,
            path: '_content/Moka.Editor.Md/lib/editor.md/',
            theme: options.theme,
            syncScrolling: options.syncScrolling,
            saveHTMLToTextarea: options.saveHtmlToTextarea,
            height: options.height,
            readOnly: options.isReadOnly,
            language: 'en', // Default to English if not specified
            // Event listeners
            onchange: debounce(() => {
                const markdown = editor.getMarkdown();
                dotNetRef.invokeMethodAsync('UpdateContentAsync', markdown);
            }, 300),
            // Add other editor.md options here
        };

        const editor = editormd(editorId, editorConfig);
        dotNetRef.invokeMethodAsync('NotifyEditorInitialized');
        
        if (options.isPreviewActive) {
            // Enable the preview mode if specified
            editor.previewing(); // Replace with the actual API if editor.md provides it
        }

        if (options.isFullScreen) {
            // Enable full screen if specified
            editor.fullscreen(); // Replace with the actual API if editor.md provides it
        }

        editor.on('change', function () {
            const markdown = editor.getMarkdown();
            dotNetRef.invokeMethodAsync('UpdateContentAsync', markdown);
        });

        // Handle full screen toggle event, if editor.md emits such an event
        editor.on('fullscreen', function (isFullScreen) {
            dotNetRef.invokeMethodAsync('ToggleFullScreenAsync', isFullScreen);
        });
    });
    } catch (e) {
        console.error("Error initializing the editor:", e);
    }
};
window.disposeEditorMd = (editorId) => {
    // Dispose logic for the editor
    // This might include removing event listeners, 
    // destroying the editor instance, etc.
};

// Debounce function to limit the rate at which a function can fire.
function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};