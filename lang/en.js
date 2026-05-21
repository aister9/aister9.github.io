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
      I am a Ph.D. candidate specializing in GPU-accelerated 3D geometry processing and simulation.
    </p>
    <p>
      My work focuses on leveraging hardware-accelerated ray tracing (RTX RT cores) to solve computationally intensive problems such as Hausdorff distance, penetration depth, and large-scale 3D reconstruction.
    </p>
    <p>
      My research bridges theory and real-world applications, enabling scalable solutions for:
    </p>
    <ul>
      <li>3D reconstruction and digital twin systems</li>
      <li>Computer vision and geometry processing</li>
      <li>Real-time simulation and collision detection</li>
    </ul>
    <p>
      I am particularly interested in applying GPU acceleration to industrial and robotics applications, including large-scale 3D data processing and real-time systems.
    </p>
    <h2 class='title'> Education </h2>
    <ul>
      <li>Ph.D. in Computer Engineering, KOREATECH, Feb 2022 - Aug 2026 (expected), GPA 4.21/4.5</li>
      <li>M.S. in Computer Engineering, KOREATECH, Mar 2020 - Feb 2022, GPA 4.25/4.5</li>
      <li>B.S. in Computer Engineering, KOREATECH, Mar 2013 - Feb 2020, GPA 2.63/4.5</li>
    </ul>
    <h2 class='title'> Research Interests </h2>
    <ul>
      <li>GPU-accelerated geometry processing</li>
      <li>Hardware-accelerated ray tracing for computation</li>
      <li>3D reconstruction and digital twin systems</li>
      <li>Computer vision and geometry processing</li>
      <li>Real-time simulation and collision detection</li>
      <li>Industrial and robotics applications for large-scale 3D data</li>
    </ul>
    <h2 class='title'> Technical Stack </h2>
    <ul>
      <li>GPU Computing: CUDA, OptiX, Thrust</li>
      <li>Graphics & Vision: OpenGL, OpenCV, CGAL</li>
      <li>3D Reconstruction & Geometry Processing</li>
    </ul>
    <p>
      I am open to opportunities in GPU engineering, 3D vision, and simulation systems.
    </p>
  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Journal Articles",
  type_one_items: [
    {
      title: `RT-HDIST: Ray-Tracing Core-based Hausdorff Distance Computation.`,
      abstract: `Accepted to Pacific Graphics 2025 journal track and published in Computer Graphics Forum. This work accelerates Hausdorff distance computation with RTX ray-tracing cores for large point-set and surface comparison workloads.`,
      date: "2025",
      link: "",
      github: "",
      writers: ["YoungWoo Kim", "Jaehong Lee", "Duksu Kim"],
    },
    {
      title: `RTPD: Penetration Depth Calculation Using Hardware-Accelerated Ray Tracing.`,
      abstract: `Published in The Visual Computer. The paper presents a GPU pipeline for penetration depth estimation built on hardware ray tracing and proximity-query acceleration.`,
      date: "2025",
      link: "",
      github: "",
      writers: ["YoungWoo Kim", "Sungmin Kwon", "Duksu Kim"],
    },
    {
      title: `Real-time Lens Distortion Algorithm on an Edge Device with GPU.`,
      abstract: `Published in IEEE Access. The paper studies real-time lens distortion correction on resource-constrained GPU platforms for embedded visual computing.`,
      date: "2022",
      link: "",
      github: "",
      writers: ["Young-Woo Kim", "Hyeon-seok Yang", "Duksu Kim"],
    },
  ],

  type_two_title: "Posters and Proceedings",
  type_two_items: [
    {
      title: `Color-Corrected Full Ray-Based Computer-Generated Holography.`,
      abstract: `SIGGRAPH Asia 2025 Posters.`,
      date: "2025",
      link: "",
      github: "",
      writers: ["Jaehong Lee", "YoungWoo Kim", "Duksu Kim"],
    },
    {
      title: `Real-time Lens Distortion Algorithm on Embedded GPU Systems.`,
      abstract: `ACM SIGGRAPH 2022 Posters.`,
      date: "2022",
      link: "",
      github: "",
      writers: ["YoungWoo Kim", "Duksu Kim"],
    },
  ],

  type_three_title: "Preprints",
  type_three_items: [
    {
      title: `A Large-Depth-Range Layer-Based Hologram Dataset for Machine Learning-Based 3D Computer-Generated Holography.`,
      abstract: `arXiv preprint arXiv:2512.21040.`,
      date: "2025",
      link: "https://arxiv.org/abs/2512.21040",
      github: "",
      writers: ["Jaehong Lee", "YouChan No", "YoungWoo Kim", "Duksu Kim"],
    },
  ],

  type_four_title: "",
  type_four_items: [],
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
  title: "Projects",
  items: [
    {
      title:
        "Real-Time 3D Simulation Acceleration Technology Development based on Proximity Query and 3D Reconstruction using Ray Tracing Cores",
      period: "2024 - 2026",
      abstract:
        "NRF-funded project on real-time 3D simulation acceleration using proximity queries and 3D reconstruction built on ray tracing cores.",
      highlights: [
        "Role: Principal Researcher",
        "Funding source: NRF",
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
      title: "SW Development Security Project",
      period: "2023",
      abstract:
        "Software development project conducted for a security-related program.",
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
        "Funded project for haptic controller development and virtual reality application development.",
      highlights: [
        "Responsibility: Virtual reality application development",
        "Funding source: IITP",
      ],
      link: "",
      github: "",
    },
    {
      title: "AI-based Affordable 3D Robot Vision Platform Development",
      period: "2020 - 2021",
      abstract:
        "Joint research project on an AI-based 3D robot vision platform, including dataset generation tools and data visualization workflows.",
      highlights: [
        "Responsibility: Dataset generation program development and data visualization",
        "Collaborator: Hana Vision Tech Co.",
        "Funding source: TIPA",
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
        "Conducting research on GPU computing, ray-tracing-core acceleration, geometric proximity queries, and 3D reconstruction for simulation and digital-twin applications.",
      achievements: [
        "Led RT-HDIST, a ray-tracing-core Hausdorff distance pipeline published in Computer Graphics Forum.",
        "Developed RTPD for hardware-accelerated penetration depth computation, later published in The Visual Computer.",
        "Built GPU-based 3D reconstruction workflows using CUDA, OptiX, Thrust, and CGAL.",
      ],
    },
    {
      title: `Part-time Lecturer`,
      company: "KOREATECH",
      startData: "Spring 2024",
      endDate: "Fall 2025",
      location: "Cheonan, Republic of Korea",
      abstract:
        "Taught undergraduate courses as a part-time lecturer while continuing doctoral research.",
      achievements: [
        "Served as lecturer in Spring 2024.",
        "Returned as lecturer in Fall 2025.",
      ],
    },
    {
      title: `Teaching Assistant`,
      company: "KOREATECH",
      startData: "Fall 2020",
      endDate: "Fall 2023",
      location: "Cheonan, Republic of Korea",
      abstract:
        "Supported laboratory sessions, exercises, and course operations for core computer engineering classes.",
      achievements: [
        "Worked across multiple semesters from 2020 to 2023.",
        "Supported courses including C Programming II and graphics-related classes.",
      ],
    },
  ],
};
