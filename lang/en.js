// ---------- Navbar titles
const enNavbarData = {
  title: "YoungWoo Kim",
  Home: "Home",
  publications: "Publications",
  StudySeminar: "Study & Seminar",
  Projects: "Projects",
  Jobs: "Experience",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: "YoungWoo Kim",
  jobTitle: "Ph.D. Candidate in Computer Engineering",
  home_title: "Profile",
  home_content: `
  <div>
    <p>
      I am a Ph.D. candidate in Computer Engineering at KOREATECH and a researcher in the SPIN Lab.
    </p>
    <p>
      My research focuses on GPU computing, hardware-accelerated ray tracing, geometric proximity queries, physical simulation, and 3D reconstruction for digital twin and spatial AI systems.
    </p>
    <p>
      Recent work includes ray-tracing-core acceleration for Hausdorff distance computation, penetration depth estimation, and visibility-based surface reconstruction, with applications spanning simulation, holography, and robotics.
    </p>
    <h2 class='title'> Education </h2>
    <ul>
      <li>Ph.D. in Computer Engineering, KOREATECH, Feb 2022 - Aug 2026 (expected), GPA 4.21/4.50, dissertation: Hardware-Accelerated Ray Tracing-based acceleration for Hausdorff distance computation</li>
      <li>M.S. in Computer Engineering, KOREATECH, Mar 2020 - Feb 2022, GPA 4.25/4.50, thesis: Real-Time Lens Distortion Algorithm on an Edge Device with GPU</li>
      <li>B.S. in Computer Engineering, KOREATECH, Mar 2013 - Feb 2020, GPA 2.63/4.50</li>
    </ul>
    <h2 class='title'> Research Interests </h2>
    <ul>
      <li>Spatial AI and digital twins</li>
      <li>High-performance computing</li>
      <li>Physical simulation and proximity queries</li>
      <li>Virtual and augmented reality</li>
    </ul>
    <h2 class='title'> Skills </h2>
    <ul>
      <li>Programming: C++, CUDA, Python, Java</li>
      <li>GPU Computing: CUDA, NVIDIA OptiX, RT Cores, Tensor Cores</li>
      <li>Physical AI and Spatial Computing: Digital Twins, 3D Reconstruction, Scene Understanding, Physical Simulation</li>
      <li>Computer Graphics: Point Clouds, Mesh Processing, Geometric Computing, Ray Tracing</li>
      <li>Development Tools: Git, Linux, Visual Studio, CMake</li>
    </ul>
  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "SCI",
  type_one_items: [
    {
      title: `A Large-Depth-Range Layer-Based Hologram Dataset for Machine Learning-Based 3D Computer-Generated Holography.`,
      published_in: `Optics & Laser Technology, Vol. 203, pp. 115636, 2026.`,
      date: "2026",
      link: "https://hpc-lab-koreatech.github.io/KOREATECH-CGH/",
      github: "https://github.com/HPC-Lab-KOREATECH/KOREATECH-CGH",
      writers: ["Jaehong Lee", "YouChan No", "YoungWoo Kim", "Duksu Kim"],
    },
    {
      title: `RT-HDIST: Ray-Tracing Core-based Hausdorff Distance Computation`,
      published_in: `Computer Graphics Forum (Pacific Graphics), Vol. 44, No. 7, 2025.`,
      date: "2025",
      links: [
        { label: "Project", url: "https://hpc-lab-koreatech.github.io/RT-HDIST/" },
        { label: "Paper", url: "https://onlinelibrary.wiley.com/doi/10.1111/cgf.70229" },
        { label: "Source", url: "https://github.com/HPC-Lab-KOREATECH/RT-HDIST/tree/main" },
      ],
      writers: ["YoungWoo Kim", "Jaehong Lee", "Duksu Kim"],
    },
    {
      title: `RTPD: Penetration Depth calculation using Hardware accelerated Ray-Tracing`,
      published_in: `The Visual Computer, Vol. 41, pp. 9885-9899, 2025.`,
      date: "2025",
      links: [
        { label: "Paper", url: "https://rdcu.be/eq1gA" },
      ],
      writers: ["YoungWoo Kim", "Sungmin Kwon", "Duksu Kim"],
    },
    {
      title: `Real-time Lens Distortion Algorithm on an Edge Device with GPU`,
      published_in: `IEEE Access, Vol. 10, pp. 41748-41757, 2022.`,
      date: "2022",
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/document/9757191" },
      ],
      writers: ["Young-Woo Kim", "Hyeon-seok Yang", "Duksu Kim"],
    },
  ],

  type_two_title: "SCOPUS",
  type_two_items: [
    {
      title: `Deep-Learning Pipeline for Object Pose Estimation from an RGB-D Image.`,
      published_in: `Journal of Institute of Control, Robotics and Systems, Vol. 27, No. 8, pp. 593-601, 2021.`,
      date: "2021",
      link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE10586063",
      github: "",
      writers: ["YouChan No", "YoungWoo Kim", "DaeGeon Kim", "HyunKyu Han", "YoungKi Song", "Duksu Kim"],
    },
  ],

  type_three_title: "KCI",
  type_three_items: [
    {
      title: `Development of Recommendation Model for Image Keypoint Detection and Descriptor Extraction Algorithm.`,
      published_in: `Journal of KIIT, Vol. 19, No. 4, pp. 27-35, 2021.`,
      date: "2021",
      link: "http://ki-it.com/_common/do.php?a=full&b=22&bidx=2536&aidx=28905",
      github: "",
      writers: ["YoungWoo Kim", "Duksu Kim", "SeungHee Kim"],
    },
  ],

  type_four_title: "Conference Papers",
  type_four_items: [
    {
      title: `RT-VIS: Hardware Ray Tracing for Visibility-based Surface Reconstruction.`,
      published_in: `Proceedings of the Korea Computer Graphics Society Conference, 2026.`,
      date: "2026",
      link: "",
      github: "",
      writers: ["YoungWoo Kim", "Duksu Kim"],
    },
    {
      title: `Penetration Depth Calculation Using Hardware Accelerated Ray Tracing Core.`,
      published_in: `Proceedings of the Korea Computer Graphics Society Conference, pp. 77-78, 2023.`,
      date: "2023",
      link: "",
      github: "",
      writers: ["YoungWoo Kim", "Duksu Kim"],
    },
  ],

  type_five_title: "Posters",
  type_five_items: [
    {
      title: `Color-Corrected Full Ray-Based Computer-Generated Holography.`,
      published_in: `Proceedings of SIGGRAPH Asia 2025 Posters, pp. 1-2, 2025.`,
      date: "2025",
      link: "",
      github: "",
      writers: ["Jaehong Lee", "YoungWoo Kim", "Duksu Kim"],
    },
    {
      title: `Acceleration of 3D Surface Reconstruction Using Hardware-Accelerated Ray Tracing.`,
      published_in: `Proceedings of the Korea Computer Graphics Society Conference, pp. 113-114, 2024.`,
      date: "2024",
      link: "",
      github: "",
      writers: ["YoungWoo Kim", "Duksu Kim"],
    },
    {
      title: `Real-time Lens Distortion Algorithm on Embedded GPU Systems`,
      published_in: `Poster session, SIGGRAPH 2022.`,
      date: "2022",
      links: [
        { label: "Extended Abstract", url: "https://dl.acm.org/doi/abs/10.1145/3532719.3543241" },
      ],
      writers: ["YoungWoo Kim", "Duksu Kim"],
    },
    {
      title: `Simulation-Based Dataset Generation Method for Computer Vision Problems.`,
      published_in: `Proceedings of the Korea Computer Graphics Society Conference, pp. 95-96, 2022.`,
      date: "2022",
      link: "",
      github: "",
      writers: ["YoungWoo Kim", "YouChan No", "Sanghyun Lee", "Duksu Kim"],
    },
  ],
};

// ---------- Study & Seminar page data
const enStudySeminarPageData = {
  title: "Study & Seminar",
  content: `
    <div class='publication_container'>
      <div class='publications_item'>
        <div class='publications_header'>
          <h2>Paper Seminar and Study Archive</h2>
        </div>
        <p>
          This section records paper seminars and technical study sessions I presented or organized during my graduate program. It is a learning archive built around reading, summarizing, and discussing prior work rather than a list of my own research contributions.
        </p>
      </div>
      <div class='publications_item'>
        <div class='publications_header'>
          <h2>Topics Covered</h2>
        </div>
        <p>
          The seminars span GPU computing, 3D reconstruction, ray tracing applications, rendering, and LiDAR or robotics papers. Each entry represents a paper-based study session or a seminar topic prepared from existing literature.
        </p>
      </div>
      <div class='publications_item'>
        <div class='publications_header'>
          <h2>How to Read This Section</h2>
        </div>
        <p>
          The archive is organized chronologically so that it shows how my reading and seminar themes evolved over time. Conference and journal names indicate the source paper discussed in the session, not publications authored by me unless they are separately listed on the Publications page.
        </p>
      </div>
      <div class='publications_item'>
        <div class='publications_header'>
          <h2>Archive View</h2>
        </div>
        <p>
          A detailed timeline view of the seminar records is available in the dedicated archive page below.
        </p>
        <ul class='publications_footer'>
          <li><a href="/study-seminar/data.html">Open seminar timeline</a></li>
        </ul>
      </div>
    </div>
  `,
};

// ---------- Projects page data
const enProjectsPageData = {
  title: "Research Grants & Projects",
  items: [
    {
      title:
        "Real-Time 3D Simulation Acceleration Technology Development based on Proximity Query and 3D Reconstruction using Ray Tracing Cores",
      period: "2024 - 2026",
      abstract:
        "Research project on real-time 3D simulation via ray-tracing-core-based proximity queries and 3D reconstruction.",
      highlights: [
        "Funding source: NRF",
      ],
      link: "",
      github: "",
    },
    {
      title: "High-Performance CGH Technology for Ultra-High-Resolution Hologram Generation",
      period: "2021 - 2026",
      abstract:
        "Long-term hologram generation research project focused on high-performance computer-generated holography.",
      highlights: [
        "Funding source: NRF",
      ],
      link: "",
      github: "",
    },
    {
      title: "Holo-TV Core Technology Development for Hologram Video Services",
      period: "2024",
      abstract:
        "Core technology development project for hologram video services.",
      highlights: [
        "Funding source: IITP",
      ],
      link: "",
      github: "",
    },
    {
      title: "NPU-based Deep Learning Model Acceleration Research",
      period: "2024",
      abstract:
        "Industry project focused on acceleration algorithm development for deep learning models on NPU platforms.",
      highlights: [
        "Responsibility: Acceleration algorithm development",
        "Partner: MarkAny Co., Ltd.",
      ],
      link: "",
      github: "",
    },
    {
      title: "Industry-funded Project with Samsung Electronics",
      period: "2023",
      abstract:
        "Confidential industry-funded project conducted with Samsung Electronics.",
      highlights: [
        "Partner: Samsung Electronics",
      ],
      link: "",
      github: "",
    },
    {
      title: "Development of Haptic Controller",
      period: "2020 - 2022",
      abstract:
        "Project for haptic controller development and related virtual reality application development.",
      highlights: [
        "Funding source: IITP",
      ],
      link: "",
      github: "",
    },
    {
      title: "Development of an Autonomous Cart Platform with Scalability",
      period: "2020 - 2022",
      abstract:
        "Applied systems development project for a scalable autonomous cart platform.",
      highlights: [
        "Funding source: LINC+",
      ],
      link: "",
      github: "",
    },
    {
      title: "AI-based Affordable 3D Robot Vision Platform Development",
      period: "2020 - 2021",
      abstract:
        "Joint research project on an AI-based low-cost 3D robot vision platform.",
      highlights: [
        "Responsibility: Dataset generation program development and data visualization",
        "Collaborator: Hana Vision Tech Co.",
        "Funding source: TIPA",
      ],
      link: "",
      github: "",
    },
    {
      title: "High-Performance Scientific Visualization Algorithms on Heterogeneous Parallel Computing Environments",
      period: "2020 - 2021",
      abstract:
        "Research project on scientific visualization algorithms for heterogeneous parallel computing environments.",
      highlights: [
        "Funding source: NRF",
      ],
      link: "",
      github: "",
    },
    {
      title: "Visualization of 30 Years of KOREATECH Campus Evolution Using a Shape-Changing Display",
      period: "2020 - 2021",
      abstract:
        "Visualization project exploring campus history with a shape-changing display system.",
      highlights: [
        "Funding source: KOREATECH",
      ],
      link: "",
      github: "",
    },
    {
      title: "High-Performance Diffraction Computation for Accelerating Ultra-High-Resolution Hologram Generation",
      period: "2021",
      abstract:
        "Focused on accelerating diffraction computation for ultra-high-resolution hologram generation.",
      highlights: [
        "Funding source: ETRI",
      ],
      link: "",
      github: "",
    },
    {
      title: "Large-Scale Matrix Processing Module for Accelerating Hologram Generation",
      period: "2020",
      abstract:
        "Research project on a large-scale matrix processing module for hologram generation acceleration.",
      highlights: [
        "Funding source: ETRI",
      ],
      link: "",
      github: "",
    },
  ],
};

// ---------- Jobs page data
const enJobsPageData = {
  title: "Experience",
  items: [
    {
      title: `Researcher / Graduate Research Assistant`,
      company: "KOREATECH SPIN Lab",
      startData: "Mar 2020",
      endDate: "",
      location: "Cheonan, Republic of Korea",
      abstract:
        "Conducting research in SPIN Lab on GPU computing, ray-tracing-core acceleration, geometric proximity queries, and 3D reconstruction for simulation and digital twin applications.",
      achievements: [
        "Led RT-HDIST, published in Computer Graphics Forum through the Pacific Graphics 2025 journal track.",
        "Developed RTPD, published in The Visual Computer.",
        "Contributed to visibility-based surface reconstruction and holography-related research pipelines.",
      ],
    },
    {
      title: `Part-time Lecturer`,
      company: "School of Computer Engineering, KOREATECH",
      startData: "Spring 2024",
      endDate: "Fall 2025",
      location: "Cheonan, Republic of Korea",
      abstract:
        "Taught undergraduate courses as a part-time lecturer while continuing doctoral research.",
      achievements: [
        "Multi-core Programming, Spring 2024.",
        "Java Programming, Fall 2025.",
      ],
    },
    {
      title: `Teaching Assistant`,
      company: "School of Computer Engineering, KOREATECH",
      startData: "Spring 2020",
      endDate: "Fall 2023",
      location: "Cheonan, Republic of Korea",
      abstract:
        "Supported laboratory sessions, exercises, and course operations for core computer engineering classes.",
      achievements: [
        "Supported courses including Multi-core Programming, Computer Graphics, Microprocessors, Algorithms, and C Programming.",
        "Worked across multiple semesters from Spring 2020 to Fall 2023.",
      ],
    },
  ],
};

