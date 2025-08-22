document.addEventListener('DOMContentLoaded', function () {
  const courseModal = document.getElementById('courseModal');

  courseModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget; // Button that triggered the modal
    const card = button.closest('.card');

    // Update modal content
    document.getElementById('modalImage').src = card.dataset.modalImage;
    document.getElementById('modalTitle').textContent = card.dataset.title;
    document.getElementById('durationText').textContent = card.dataset.duration;
    document.getElementById('ratingValue').textContent = card.dataset.rating;
    document.getElementById('formatText').textContent = card.dataset.format || '';
    document.getElementById('modalDescription').textContent = card.dataset.description;

    // Process features
    const featureList = document.getElementById('featureList');
    featureList.innerHTML = '';
    const features = card.dataset.features.split('|');
    features.forEach(feature => {
      const div = document.createElement('div');
      div.className = 'feature-item';
      div.innerHTML = `
                        <i class="bi bi-check-circle-fill feature-icon"></i>
                        <span>${feature}</span>
                    `;
      featureList.appendChild(div);
    });
  });

  // Button actions
  document.querySelector('.btn-enroll').addEventListener('click', function () {
    alert('Enrollment process would start here!');
  });

  document.querySelector('.btn-syllabus').addEventListener('click', function () {
    alert('Syllabus download would start here!');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const openId = urlParams.get("open");

  if (openId) {
    const cardContainer = document.getElementById(openId);
    if (cardContainer) {
      // Find the clickable card inside
      const cardElement = cardContainer.querySelector('.card');

      if (cardElement) {
        // Simulate a click to populate modal data
        cardElement.dispatchEvent(new Event("click", { bubbles: true }));

        // OR open modal directly using Bootstrap API
        const modal = new bootstrap.Modal(document.getElementById('courseModal'));
        modal.show();
      }

      // Optional: scroll to the card before opening modal
      cardContainer.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});


