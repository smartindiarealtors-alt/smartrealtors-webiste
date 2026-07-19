const projectsData = [
  {
    name: "Lodha Bellezza",
    type: "Apartment",
    location: "Kokapet, Hyderabad",
    city: "Hyderabad",
    status: "Ready to Move",
    size: "3,450 sq.ft",
    price: "₹3.85 Crore",
    budgetCategory: "3Cr+",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80"
  },
  {
    name: "Prestige Golfshire",
    type: "Villa",
    location: "Gachibowli, Hyderabad",
    city: "Hyderabad",
    status: "Under Construction",
    size: "5,200 sq.ft",
    price: "₹7.20 Crore",
    budgetCategory: "3Cr+",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80"
  },
  {
    name: "Sobha Royal Pavilion",
    type: "Apartment",
    location: "Whitefield, Bangalore",
    city: "Bangalore",
    status: "Ready to Move",
    size: "2,500 sq.ft",
    price: "₹2.10 Crore",
    budgetCategory: "1Cr-3Cr",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
  },
  {
    name: "Godrej Woodside Estate",
    type: "Plot",
    location: "Hinjewadi, Pune",
    city: "Pune",
    status: "Under Construction",
    size: "2,200 sq.ft",
    price: "₹95 Lakh",
    budgetCategory: "50L-1Cr",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80"
  },
  {
    name: "Urban Elite",
    type: "Apartment",
    location: "Gachibowli, Hyderabad",
    city: "Hyderabad",
    status: "Ready to Move",
    size: "1,850 sq.ft",
    price: "₹1.45 Crore",
    budgetCategory: "1Cr-3Cr",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80"
  },
  {
    name: "Skyline Residency",
    type: "Apartment",
    location: "Kokapet, Hyderabad",
    city: "Hyderabad",
    status: "Under Construction",
    size: "1,450 sq.ft",
    price: "₹1.10 Crore",
    budgetCategory: "1Cr-3Cr",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
  },
  {
    name: "Prime Hub Commercial",
    type: "Commercial",
    location: "Whitefield, Bangalore",
    city: "Bangalore",
    status: "Ready to Move",
    size: "1,200 sq.ft",
    price: "₹1.80 Crore",
    budgetCategory: "1Cr-3Cr",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
  },
  {
    name: "Greenfield Meadows",
    type: "Plot",
    location: "Wakad, Pune",
    city: "Pune",
    status: "Ready to Move",
    size: "1,800 sq.ft",
    price: "₹75 Lakh",
    budgetCategory: "50L-1Cr",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80"
  }
];

document.addEventListener("DOMContentLoaded", function() {
  const searchBtn = document.getElementById("btnSearchProjects");
  if (searchBtn) {
    searchBtn.addEventListener("click", performSearch);
  }

  // Populate all projects by default so it looks great on page load
  renderResults(projectsData);

  // Inquiry form submit handler
  const inquiryForm = document.getElementById("heroInquiryForm");
  if (inquiryForm) {
    inquiryForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("heroInquiryName").value.trim();
      const phone = document.getElementById("heroInquiryPhone").value.trim();
      const type = document.getElementById("heroInquiryType").value;
      const alertEl = document.getElementById("heroInquiryAlert");

      if (!name || !phone || !type) return;

      const submitBtn = inquiryForm.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "SUBMITTING...";
      }

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: name,
          email: "inquiry@smartindiarealtors.in",
          phone: phone,
          subject: `Hero Inquiry: ${type}`,
          message: `Client ${name} inquired from the homepage carousel looking for property type: ${type}.`
        })
      })
      .then(res => res.text())
      .then(data => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "SUBMIT INQUIRY";
        }
        if (alertEl) {
          alertEl.classList.remove("d-none", "text-danger");
          alertEl.classList.add("text-success");
          alertEl.style.color = "#22c55e"; // bright green
          alertEl.textContent = "Thank you! Inquiry submitted successfully.";
        }
        inquiryForm.reset();
      })
      .catch(err => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "SUBMIT INQUIRY";
        }
        if (alertEl) {
          alertEl.classList.remove("d-none", "text-success");
          alertEl.classList.add("text-danger");
          alertEl.style.color = "#ef4444"; // bright red
          alertEl.textContent = "Submission failed. Please try again.";
        }
      });
    });
  }

  // Pause/resume Swiper autoplay on input interaction to ensure user typing is smooth
  const carouselContainer = document.querySelector(".hero-slider-layout");
  if (carouselContainer) {
    carouselContainer.addEventListener("focusin", function() {
      if (window.hero_slider_layout && window.hero_slider_layout.autoplay) {
        window.hero_slider_layout.autoplay.stop();
      }
    });
    carouselContainer.addEventListener("focusout", function() {
      if (window.hero_slider_layout && window.hero_slider_layout.autoplay) {
        window.hero_slider_layout.autoplay.start();
      }
    });
  }
});

function performSearch() {
  const locationQuery = document.getElementById("searchLocation").value.trim().toLowerCase();
  const selectedType = document.getElementById("searchType").value;
  const selectedBudget = document.getElementById("searchBudget").value;

  const filtered = projectsData.filter(project => {
    // Location Match
    if (locationQuery && 
        !project.location.toLowerCase().includes(locationQuery) && 
        !project.city.toLowerCase().includes(locationQuery)) {
      return false;
    }
    // Type Match
    if (selectedType && project.type !== selectedType) {
      return false;
    }
    // Budget Match
    if (selectedBudget && project.budgetCategory !== selectedBudget) {
      return false;
    }
    return true;
  });

  // Update alert count and display
  const countEl = document.getElementById("matchingCount");
  const alertEl = document.getElementById("resultsAlertBanner");
  
  if (countEl && alertEl) {
    countEl.textContent = filtered.length;
    alertEl.classList.remove("d-none");
  }

  renderResults(filtered);
}

function renderResults(results) {
  const gridEl = document.getElementById("searchResultsGrid");
  if (!gridEl) return;

  if (results.length === 0) {
    gridEl.innerHTML = `
      <div class="col-lg-12 text-center py-5">
        <h4 style="color: #667282;">No projects match your current selection. Please try expanding your filters.</h4>
      </div>
    `;
    return;
  }

  let html = "";
  results.forEach(project => {
    const statusBadgeClass = project.status === "Ready to Move" ? "sir-badge-status-ready" : "sir-badge-status-construction";
    
    html += `
      <div class="col-lg-4 col-md-6 col-12">
        <div class="sir-search-card">
          <div class="sir-card-badge-container">
            <span class="sir-badge-type">${project.type}</span>
            <span class="${statusBadgeClass}">${project.status}</span>
          </div>
          <h3 class="sir-card-title">${project.name.toLowerCase()}</h3>
          <div class="sir-card-location">
            <i class="fa-solid fa-location-dot" style="color: #c9a84c;"></i>
            <span>${project.location}</span>
          </div>
          <div class="sir-card-size">
            <i class="fa-solid fa-maximize" style="color: #8892a0;"></i>
            <span>${project.size}</span>
          </div>
          <div class="sir-card-price-container">
            <div class="sir-price-label">STARTING PRICE</div>
            <div class="sir-price-value">${project.price}</div>
          </div>
          <div class="sir-card-actions">
            <button onclick="bookSiteVisit('${project.name}')" class="sir-btn-book">
              <i class="fa-solid fa-lock"></i> BOOK SITE VISIT / INQUIRE
            </button>
          </div>
        </div>
      </div>
    `;
  });

  gridEl.innerHTML = html;
}

// Global booking handler
window.bookSiteVisit = function(projectName) {
  // Set subject and message values in contact form
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  
  if (subjectInput) {
    subjectInput.value = `Site Visit: ${projectName}`;
  }
  if (messageInput) {
    messageInput.value = `Hi, I am interested in scheduling a private site visit tour for ${projectName}. Please contact me with details.`;
  }
  
  // Smooth scroll to contact section
  const contactSec = document.getElementById("contact-us");
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: "smooth" });
  }
};
