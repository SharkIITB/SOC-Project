import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';

const initialFiles = {
  "script.js": {
    name: "script.js",
    language: 'javascript',
    value: "let name = 5"
  },
  "script.py": {
    name: "script.py",
    language: 'python',
    value: "print('hello world')"
  },
  "file.cpp": {
    name: "file.cpp",
    language: 'cpp',
    value: "char c = 'ayush';"
  },
  "file.java": {
    name: "file.java",
    language: 'java',
    value: "int a = 5;"
  }
};

const App = () => {
  const [files, setFiles] = useState(initialFiles);
  const [fileName, setFileName] = useState("script.js");
  const [showFileModal, setShowFileModal] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [newFileLanguage, setNewFileLanguage] = useState("javascript");
  const editorRef = useRef(null);

  const file = files[fileName];

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function handleCreateNewFile() {
    if (newFileName.trim() !== "") {
      setFiles({
        ...files,
        [newFileName]: {
          name: newFileName,
          language: newFileLanguage,
          value: ""
        }
      });
      setShowFileModal(false);
      setNewFileName("");
      setNewFileLanguage("javascript");
    } else {
      alert("File name can't be empty");
    }
  }

  return (
    <div>
      <div>
        {Object.keys(files).map(key => (
          <button key={key} onClick={() => setFileName(key)}>
            {files[key].name}
          </button>
        ))}
      </div>
      <button onClick={() => setShowFileModal(true)}>New File</button>
      <Editor
        height="100vh"
        width="100vw"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
      {showFileModal && (
        <div className="createfile">
          <div className="createfilecontent">
            <div className="cfile1">
              <h1>Create New File</h1>
              <img
                className="closebtnfile"
                style={{ filter: "invert()" }}
                src="./svgs and photos/close.svg"
                alt=""
                onClick={() => setShowFileModal(false)}
              />
            </div>
            <div className="cfile2">
              <input
                id="cfile2input"
                type="text"
                placeholder="File Name"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
              />
              <select
                id="languageSelector"
                value={newFileLanguage}
                onChange={(e) => setNewFileLanguage(e.target.value)}
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="cpp">C++</option>
                <option value="java">Java</option>
              </select>
              <button className="createnewfilebtn" onClick={handleCreateNewFile}>
                Create File
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
