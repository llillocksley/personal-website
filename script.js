<script>
// PROJECT FILTERING
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-bar button');
  const projects = document.querySelectorAll('.project');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add 'active' class to the clicked button
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      projects.forEach(project => {
        const category = project.getAttribute('data-category');
        project.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
      });
    });
  });
});

// DARK MODE TOGGLE
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
</script>
