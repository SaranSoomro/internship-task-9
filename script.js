// Form validation
document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const dest = document.getElementById('destination').value.trim();
  const date = document.getElementById('date').value;
  const budget = document.getElementById('budget').value;
  if (!dest || !date || !budget) {
    alert('Please fill all fields!');
  } else {
    alert(`Searching trips for ${dest} on ${date} with budget $${budget}`);
  }
});

// Dark mode toggle
document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Scroll to top
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});
