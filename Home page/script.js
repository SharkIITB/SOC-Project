let inputfield = document.getElementById("cf2input");
let inputfieldfile = document.getElementById("cfile2input");
let languageSelector = document.getElementById("languageSelector");

// Adding event listener to create folder button
document.querySelector(".newfolder").addEventListener("click", () => {
    inputfield.value = ""
    document.querySelector(".createfolder").style.display = "block";
});

// Adding event listener to close button in create folder modal
document.querySelector(".closebtn").addEventListener("click", () => {
    document.querySelector(".createfolder").style.display = "none";
});

// Adding event listener to create file button
document.querySelector(".newfile").addEventListener("click", () => {
    inputfieldfile.value = ""
    document.querySelector(".createfile").style.display = "block";
});

// Adding event listener to close button in create file modal
document.querySelector(".closebtnfile").addEventListener("click", () => {
    document.querySelector(".createfile").style.display = "none";
});

// Adding event listener to create new folder button with input text
document.querySelector(".createnewfolderbtn").addEventListener("click", () => {
    let foldername = inputfield.value;
    // Saving the HTML of the folder
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
        document.querySelector(".foldersbox").innerHTML += folderhtml;
        document.querySelector(".createfolder").style.display = "none";
    } else {
        alert("Name can't be empty");
    }
});

// Adding event listener to create new file button with input text and language selection
document.querySelector(".createnewfilebtn").addEventListener("click", () => {
    let filename = inputfieldfile.value;
    let language = languageSelector.value;
    // Saving the HTML of the file
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
        document.querySelector(".filesbox").innerHTML += filehtml;
        document.querySelector(".createfile").style.display = "none";
    } else {
        alert("Name can't be empty");
    }
});
