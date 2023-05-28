window.addEventListener('DOMContentLoaded', () => {
  const folderContainer = document.querySelector('.folderContainer');

  // Function to load and display folders
  function loadFolders() {
    fetch("http://169.254.28.50:3000/folders")
      .then(response => response.json())
      .then(data => {
        data.forEach(folder => {
          const folderName = folder["name"]

          const folderOuterElement = document.createElement('div');
          folderOuterElement.classList.add("folderOuterElement");

          const previewImage = document.createElement('img');
          previewImage.classList.add("previewImage")
          previewImage.src = `https://raw.githubusercontent.com/EnderFlop/iowacitygraffiti/main/photos/${folderName}/preview.jpg`

          const folderLinkElement = document.createElement('a');
          folderLinkElement.href = 'photos.html?folder=' + folderName;
          folderLinkElement.innerText = folderName;
          
          folderOuterElement.appendChild(previewImage)
          folderOuterElement.appendChild(folderLinkElement)
          folderContainer.appendChild(folderOuterElement);
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }

  loadFolders()
})