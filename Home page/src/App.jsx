import React, { useState } from 'react';
import './App.css'; // Import your CSS file here


function App() {
  const [folderName, setFolderName] = useState('');
  const [fileName, setFileName] = useState('');
  const [language, setLanguage] = useState('javascript'); // Default language selection

  // Event handlers for folder and file creation
  const handleCreateFolder = () => {
    setFolderName('');
    document.querySelector(".createfolder").style.display = "block";
  };

  const handleCloseFolderModal = () => {
    document.querySelector(".createfolder").style.display = "none";
  };

  const handleCreateFile = () => {
    setFileName('');
    document.querySelector(".createfile").style.display = "block";
  };

  const handleCloseFileModal = () => {
    document.querySelector(".createfile").style.display = "none";
  };

  const handleCreateNewFolder = () => {
    let foldername = document.getElementById("cf2input").value;
    let folderhtml = `<div class="folder">
                        <div class="folderHeader">
                            <div class="foldername">
                                <span><img src="./svgs and photos/folder-1485.svg" alt=""></span> ${foldername}
                            </div>
                            <div class="create">
                                <span><img style="filter: invert();" src="./svgs and photos/delete.svg" alt="Delete Folder"></span>
                                <span><img style="filter: invert();" src="./svgs and photos/edit.svg" alt="Rename Folder"></span>      
                                <span class="newfilebtn"><img src="./svgs and photos/add.svg" alt="Add File"></span>
                                <span class="newfile">New file</span>
                             </div>
                        </div>
                        <div class="filesbox">
                            <div class="file">
                                <div class="start">
                                    <div class="logo"><img src="./svgs and photos/pngwing.com.png" alt=""></div>
                                    <div class="fileinfo">
                                        <div class="filename">Strings</div>
                                        <div class="filelang">Language: Java</div>
                                    </div>
                                </div>
                                <div class="icons">
                                    <span><img style="filter: invert();" src="./svgs and photos/delete.svg" alt="Delete Folder"></span>
                                    <span><img style="filter: invert();" src="./svgs and photos/edit.svg" alt="Rename Folder"></span>
                                </div>
                            </div>
                        </div>
                    </div>`;
    if (foldername.trim() !== "") {
      console.log(foldername);
      // Append new folder HTML
      document.querySelector(".foldersbox").innerHTML += folderhtml;
      handleCloseFolderModal();
    } else {
      alert("Name can't be empty");
    }
  };

  const handleCreateNewFile = () => {
    let filename = document.getElementById("cfile2input").value;
    let filehtml = `<div class="file">
                        <div class="start">
                            <div class="logo"><img src="./svgs and photos/pngwing.com.png" alt=""></div>
                            <div class="fileinfo">
                                <div class="filename">${filename}</div>
                                <div class="filelang">Language: ${language.charAt(0).toUpperCase() + language.slice(1)}</div>
                            </div>
                        </div>
                        <div class="icons">
                            <span><img style="filter: invert();" src="./svgs and photos/delete.svg" alt="Delete Folder"></span>
                            <span><img style="filter: invert();" src="./svgs and photos/edit.svg" alt="Rename Folder"></span>
                        </div>
                    </div>`;
    if (filename.trim() !== "") {
      console.log(filename);
      // Append new file HTML
      document.querySelector(".filesbox").innerHTML += filehtml;
      handleCloseFileModal();
    } else {
      alert("Name can't be empty");
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="img"><img src="./svgs and photos/pngwing.com.png" alt="" /></div>
        <div className="name">
          <span className="name1">Code</span><span className="name2"> Crafter</span>
        </div>

        <div className="title">
          <h2>Code. Compile. Debug.</h2>
        </div>
        <div className="button">
          <button onClick={handleCreateFolder}><span><img src="./svgs and photos/add.svg" alt="" /></span>Craft New Code</button>
        </div>
      </div>
      <div className="right">
        <div className="header">
          <div className="wspc">Workspace</div>
          <div className="newfolder" onClick={handleCreateFolder}><span><img className="createnewfolderbtnwspc" src="./svgs and photos/add.svg" alt="" /></span>New Folder</div>
        </div>
        <div className="foldersbox">
          <div className="folder">
            <div className="folderHeader">
              <div className="foldername">
                <span><img src="./svgs and photos/folder-1485.svg" alt="" /></span> DSA
              </div>
              <div className="create">
                <span><img style={{ filter: 'invert()' }} src="./svgs and photos/delete.svg" alt="Delete Folder" /></span>
                <span><img style={{ filter: 'invert()' }} src="./svgs and photos/edit.svg" alt="Rename Folder" /></span>
                <span className="newfilebtn" onClick={handleCreateFile}><img src="./svgs and photos/add.svg" alt="Add File" /></span>
                <span className="newfile" onClick={handleCreateFile}>New file</span>
              </div>
            </div>
            <div className="filesbox">
              <div className="file">
                <div className="start">
                  <div className="logo"><img src="./svgs and photos/pngwing.com.png" alt="" /></div>
                  <div className="fileinfo">
                    <div className="filename">Strings</div>
                    <div className="filelang">Language: Java</div>
                  </div>
                </div>

                <div className="icons">
                  <span><img style={{ filter: 'invert()' }} src="./svgs and photos/delete.svg" alt="Delete Folder" /></span>
                  <span><img style={{ filter: 'invert()' }} src="./svgs and photos/edit.svg" alt="Rename Folder" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="createfolder">
        <div className="createfoldercontent">
          <div className="cf1">
            <h1>Create New Folder</h1>
            <img className="closebtn" style={{ filter: 'invert()' }} src="./svgs and photos/close.svg" alt="" onClick={handleCloseFolderModal} />
          </div>
          <div className="cf2">
            <input id="cf2input" type="text" placeholder="File Name" value={folderName} onChange={(e) => setFolderName(e.target.value)} />
            <button className="createnewfolderbtn" onClick={handleCreateNewFolder}>Create Folder</button>
          </div>
        </div>
        <div></div>
      </div>
      <div className="createfile">
        <div className="createfilecontent">
          <div className="cfile1">
            <h1>Create New File</h1>
            <img className="closebtnfile" style={{ filter: 'invert()' }} src="./svgs and photos/close.svg" alt="" onClick={handleCloseFileModal} />
          </div>
          <div className="cfile2">
            <input id="cfile2input" type="text" placeholder="File Name" value={fileName} onChange={(e) => setFileName(e.target.value)} />
            <select id="languageSelector" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
            </select>
            <button className="createnewfilebtn" onClick={handleCreateNewFile}>Create File</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
