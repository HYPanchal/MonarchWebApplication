const cardData = {
  1: {
    img: "Images/118212562.cms",
    title: `<h3 class="text-2xl font-bold">Empowering the Oil & Gas Industry with Tailored Solutions</h3>`,
    text: `<p class="text-gray-700">
          At Monarch, we understand the complexities and critical demands of the oil and gas sector. Our comprehensive services are designed to support upstream, midstream, and downstream operations with the latest technology, engineering excellence, and domain-specific expertise.
      </p>
      <h3 class="text-2xl font-bold">Our Services Include:</h3>
      <ul class="list-disc pl-5 text-gray-600">
        <li>
          <h4 class="text-1xl font-bold">Asset Management & Optimization</h4>
          Improve equipment performance, reduce downtime, and extend asset lifecycles through predictive analytics and smart monitoring systems.
        </li>  
        <li>
          <h4 class="text-1xl font-bold">Digital Transformation</h4>
          From SCADA systems to cloud-based dashboards, we help modernize operations with intelligent automation, real-time data insights, and AI-driven decision-making.
        </li>
      </ul>`
  },
  2: {
    img: "Images/download (1).jfif",
    title: "High Tech",
    text: `Delivering cutting-edge solutions for AI, machine learning, and cloud infrastructure to revolutionize how technology empowers industries.`
  }
};

let activeCard = null;
const expanded = document.getElementById("expanded");
const expandedImg = document.getElementById("expandedImg");
const expandedTitle = document.getElementById("expandedTitle");
const expandedText = document.getElementById("expandedText");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;
    if (activeCard === id) return;

    expandedImg.src = cardData[id].img;
    expandedTitle.innerHTML = cardData[id].title;
    expandedText.innerHTML = cardData[id].text;

    expanded.classList.remove("show");
    void expanded.offsetWidth;
    expanded.classList.add("show");

    const headerOffset = 200; 
    const elementPosition = expanded.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    activeCard = id;
  });
});