window.initEditorMd = async (editorId, dotNetRef, options) => {
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
            
            // Add other editor.md options here
        };

        const editor = editormd(editorId, editorConfig);

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
};
