const cardData = {
  1: {
    img: "Images/oil_and_gas.jpg",
    title: `<h3 class="text-2xl font-bold">Empowering the Oil & Gas Industry with Tailored Solutions</h3>`,
    text: `<p class="text-gray-700">
            We deliver end-to-end engineering solutions across upstream, midstream, and downstream operations. Our expertise covers instrumentation, automation, and process design tailored to the energy sector. With a strong focus on safety, reliability, and efficiency, we support clients through advanced project management and technical excellence. Our solutions are sustainable, innovative, and cost-effective, meeting global industry standards.
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
    img: "Images/IT_E_Images.jpg",
    title: `<h3 class="text-2xl font-bold">Information Technology (IT)</h3>`,
    text: `<p class="text-gray-700">
            We provide digital transformation services that empower businesses to scale and innovate. Our expertise includes ERP, SAP, and Salesforce implementation, along with advanced solutions in Cloud Computing, Artificial Intelligence, and Machine Learning. We design customized enterprise software to drive innovation and scalability, enhance operational efficiency with automation, and build future-ready digital ecosystems for global clients.
      </p>`
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