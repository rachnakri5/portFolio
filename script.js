const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navlist'); // Fixed the class name

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active'); // Adds/removes the 'active' class instead of modifying inline styles
});
;


// Function to show experience certificate
function showCertificate() {
  // Always open in new tab
  window.open('./experience.jpg', '_blank');
  
  // Optional: Also show in the page if you want
  const container = document.getElementById('certificate-container');
  container.style.display = container.style.display === 'none' ? 'block' : 'none';
}

// Function to download CV
function downloadCV() {
  // Replace with your actual CV file path
  const cvUrl = './Rachna_CV.pdf';
  
  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'Rachna_Kumari_CV.pdf'; // Name of downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Function to show projects
function showProjects() {
  // Array of project URLs - replace with your actual project links
  const projects = [
    'https://github.com/rachna5/MyFirstProject',
    'https://github.com/yourusername/project2',
    'https://github.com/yourusername/project3'
  ];
  
  // Open each project in a new tab
  projects.forEach(project => {
    window.open(project, '_blank');
  });
}
