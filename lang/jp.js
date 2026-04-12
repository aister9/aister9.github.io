// ---------- Navbar titles
const jpNavbarData = {
  title: "YoungWoo Kim",
  Home: "ホーム",
  publications: "業績",
  Research: "研究",
  Jobs: "経歴",
  Contact: "連絡先",
};

// ---------- Home page data
const jpHomePageData = {
  name: "YoungWoo Kim",
  jobTitle: "Ph.D. Candidate in Computer Engineering",
  home_title: "Profile",
  home_content: `
  <div>
    <p>
      I am a Ph.D. candidate in Computer Engineering at KOREATECH and a member of the SPIN Lab. My work focuses on GPU-accelerated geometry processing, ray-tracing-core computing, proximity queries, and physically grounded 3D simulation.
    </p>
    <p>
      Recent projects include Hausdorff distance computation, penetration depth estimation, and real-time 3D surface reconstruction for digital twin and VR/AR applications.
    </p>
    <h2 class='title'> Education </h2>
    <ul>
      <li>Ph.D. in Computer Engineering, KOREATECH, Feb 2022 - Aug 2026 (expected)</li>
      <li>M.S. in Computer Engineering, KOREATECH, Mar 2020 - Feb 2022</li>
      <li>B.S. in Computer Engineering, KOREATECH, Mar 2013 - Feb 2020</li>
    </ul>
    <h2 class='title'> Research Interests </h2>
    <ul>
      <li>VR/AR</li>
      <li>3D reconstruction and digital twins</li>
      <li>High-performance computing</li>
      <li>Proximity queries and physical simulation</li>
    </ul>
    <h2 class='title'> Technical Stack </h2>
    <ul>
      <li>C++, CUDA, OptiX</li>
      <li>OpenGL, Unity, mesh processing</li>
      <li>Thrust, CGAL, OpenMVS, OpenCV</li>
    </ul>
  </div>
  `,
};

// ---------- Publications page data
const jpPublicationsPageData = {
  type_one_title: "Journal Articles",

  type_one_items: [
    {
      title: `RT-HDIST: Ray-Tracing Core-based Hausdorff Distance Computation.`,
      abstract: `Computer Graphics Forum, Pacific Graphics 2025 journal track.`,
      date: "2025",
      link: "",
      github: "",
      writers: ["YoungWoo Kim", "Jaehong Lee", "Duksu Kim"],
    },
    {
      title: `RTPD: Penetration Depth Calculation Using Hardware-Accelerated Ray Tracing.`,
      abstract: `The Visual Computer.`,
      date: "2025",
      link: "",
      github: "",
      writers: ["YoungWoo Kim", "Sungmin Kwon", "Duksu Kim"],
    },
    {
      title: `Real-time Lens Distortion Algorithm on an Edge Device with GPU.`,
      abstract: `IEEE Access.`,
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

// ---------- Research page data
const jpResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
      <p>
        My research focuses on accelerating geometric computation with ray tracing cores and parallel GPU processing. I work on methods for Hausdorff distance, penetration depth, and reconstruction pipelines for simulation, digital twins, and immersive computing.
      </p>
      <br />
      <h4 style="font-size: 1.1rem">RT-HDIST</h4>
      <p>
        A GPU-based Hausdorff distance pipeline built on BVH traversal, nearest-neighbor search, and CUDA/OptiX implementation. The system reported a 334.87x speedup over the CPU baseline.
      </p>
      <br />
      <h4 style="font-size: 1.1rem">RTRecons</h4>
      <p>
        Ongoing work on GPU-accelerated 3D surface reconstruction using ray marching, ray-triangle intersection, and Delaunay-tetrahedral graph processing. Internal evaluation showed a 52.11x speedup over an OpenMVS CPU baseline.
      </p>
      <br />
      <h4 style="font-size: 1.1rem">RTPD</h4>
      <p>
        Hardware-accelerated penetration depth computation for collision-aware simulation. The method achieved a 37.66x speedup over the CPU version and a 5.33x speedup over a previous GPU baseline.
      </p>
    </div>
  `,
};

// ---------- Jobs page data
const jpJobsPageData = {
  title: "Experience",
  items: [
    {
      title: `Researcher / Graduate Research Assistant`,
      company: "KOREATECH SPIN Lab",
      startData: "Mar 2020",
      endDate: "",
      location: "Cheonan, Republic of Korea",
      abstract:
        "Research on GPU computing, ray-tracing-core acceleration, geometric proximity queries, and 3D reconstruction.",
      achievements: [
        "Led RT-HDIST and published the work in Computer Graphics Forum.",
        "Developed RTPD for hardware-accelerated penetration depth computation.",
        "Built GPU reconstruction pipelines with CUDA, OptiX, Thrust, and CGAL.",
      ],
    },
    {
      title: `Part-time Lecturer`,
      company: "KOREATECH",
      startData: "Spring 2024",
      endDate: "Fall 2025",
      location: "Cheonan, Republic of Korea",
      abstract:
        "Taught undergraduate courses while continuing doctoral research.",
      achievements: ["Served in Spring 2024.", "Served again in Fall 2025."],
    },
    {
      title: `Teaching Assistant`,
      company: "KOREATECH",
      startData: "Fall 2020",
      endDate: "Fall 2023",
      location: "Cheonan, Republic of Korea",
      abstract:
        "Supported exercises and course operations for core computer engineering classes.",
      achievements: [
        "Worked across multiple semesters from 2020 to 2023.",
        "Supported C Programming II and graphics-related courses.",
      ],
    },
  ],
};
