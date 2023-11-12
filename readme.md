# 🖋️ Moka.Editor.Md

[![NuGet](https://img.shields.io/nuget/v/Moka.Editor.Md.svg)](https://www.nuget.org/packages/Moka.Editor.Md/) [![NuGet](https://img.shields.io/nuget/dt/Moka.Editor.Md.svg)](https://www.nuget.org/packages/Moka.Editor.Md/)

🚀 **Moka.Editor.Md** is a 💪 **powerful Markdown editor** designed for **Blazor applications**. It offers 🎨 **rich text editing capabilities** and 🔄 **seamless integration**, providing a smooth and intuitive experience for users and developers alike.

## Features

- 📝 Full Markdown editing capabilities.
- 💅 Theming support with customizable styles.
- 🔄 Synchronous scrolling.
- 💾 Save HTML to Textarea functionality.
- 🔍 Preview mode.
- 🔒 Read-only mode.
- 📐 Customizable toolbar.
- 🌐 Multilanguage support.
- 🖥 Fullscreen editing mode.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- .NET 7.0+
- Node.js
- Yarn/Node package manager

### Installation

1. Install the necessary Node.js packages:

```bash
yarn
```
2. Run the Gulp tasks to bundle and prepare your assets:
```bash
yarn build
```
3. Build the library:
```bash
dotnet build
```

### Usage
After installing the package and running Gulp tasks, simply reference the bundled files in your header tag in index HTML file.
For CSS:

```html
<link href="_content/Moka.Editor.Md/css/moka.bundle.min.css" rel="stylesheet" />
```

For JS:

```html
<script src="_content/Moka.Editor.Md/js/moka.bundle.min.js" />
```

```csharp
<EditorMdComponent Value="@markdownContent" ValueChanged="@OnContentChanged" />

@code {
    private string markdownContent = "";

    private void OnContentChanged(string newContent)
    {
        markdownContent = newContent;
    }
}
```

#### Parameters and Properties
- **Value** (string): The Markdown content to be displayed in the editor.
- **ValueChanged** (EventCallback<string>): Event triggered when the content of the editor changes.
- **Theme** (string): Specifies the theme for the editor. Default is "default".

#### Events

- **OnChange**: Triggered when the editor content changes.

#### Customization
```html
<EditorMdComponent CustomStyle="height: 500px; border: 1px solid gray;" />
```

### 🍷 Gulp Tasks
I use Gulp to automate the bundling and optimization of assets. Here's what each task does:

- scripts: Concatenates and minifies JavaScript files.
- styles: Concatenates and minifies CSS files and includes Font Awesome styles.
- fonts: Copies Font Awesome font files to the appropriate directory.
- copy-folder: Copies an entire folder with its content (if necessary).
- default: Runs all the above tasks in sequence.
You can run a specific task with the following command:
```
yarn gulp <task-name>
```
For example, to only run the styles task:

```bash
yarn gulp styles
```
### 🫂 Contributing

Contributions are welcome as this is an open-source project in such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

#### 🪜 Steps:
- Fork the Project
- Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request


### License

Distributed under the MIT License. See LICENSE for more information.

🫡 Jacob William - me@jacobwi.net

### WIP
- [ ] Upload to NuGet
- [ ] Add more tests
- [ ] Add more documentation
- [ ] Add more examples
- [X] Add more features