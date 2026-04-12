// ---------- Navbar titles
const enNavbarData = {
  title: "YoungWoo Kim",
  Home: "Home",
  publications: "Publications",
  Research: "Research",
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
      I am a Ph.D. candidate in Computer Engineering at Korea University of Technology and Education (KOREATECH), working in the SPIN Lab. My research focuses on GPU-accelerated geometry processing, ray-tracing-core computing, proximity queries, and physically grounded 3D simulation.
    </p>
    <p>
      My recent work spans Hausdorff distance computation, penetration depth estimation, and real-time 3D surface reconstruction. I am particularly interested in turning hardware-accelerated ray tracing into a practical compute primitive for digital twins, VR/AR, and large-scale geometric analysis.
    </p>
    <h2 class='title'> Education </h2>
    <ul>
      <li>Ph.D. in Computer Engineering, KOREATECH, Feb 2022 - Aug 2026 (expected), GPA 4.21/4.5</li>
      <li>M.S. in Computer Engineering, KOREATECH, Mar 2020 - Feb 2022, GPA 4.25/4.5</li>
      <li>B.S. in Computer Engineering, KOREATECH, Mar 2013 - Feb 2020, GPA 2.63/4.5</li>
    </ul>
    <h2 class='title'> Research Interests </h2>
    <ul>
      <li>Virtual and augmented reality</li>
      <li>3D reconstruction and digital twins</li>
      <li>High-performance computing</li>
      <li>Proximity queries and physical simulation</li>
    </ul>
    <h2 class='title'> Technical Stack </h2>
    <ul>
      <li>Programming: C++, CUDA, OptiX</li>
      <li>3D graphics: OpenGL, Unity, mesh processing</li>
      <li>Libraries: Thrust, CGAL, OpenMVS, OpenCV</li>
    </ul>
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

// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
      <p>
        My research centers on accelerating geometric computation with modern GPU architectures. I build methods that use ray tracing cores and parallel processing to solve proximity queries, reconstruction, and simulation problems that are typically too expensive for real-time or large-scale use.
      </p>
      <br />
      <h4 style="font-size: 1.1rem">RT-HDIST: Ray-Tracing-Core Hausdorff Distance</h4>
      <p>
        From 2023 to 2025, I developed a GPU pipeline for Hausdorff distance computation at KOREATECH SPIN Lab. The project combines BVH-based ray traversal, nearest-neighbor search, and CUDA/OptiX implementation strategies to make large geometric comparisons practical on RTX hardware.
      </p>
      <p>
        The work reported a 334.87x speedup over the CPU baseline and was published in <em>Computer Graphics Forum</em> through the Pacific Graphics 2025 journal track.
      </p>
      <br />
      <h4 style="font-size: 1.1rem">RTRecons: GPU Surface Reconstruction</h4>
      <p>
        Since 2024, I have been working on GPU-accelerated 3D surface reconstruction using ray marching, ray-triangle intersection, and Delaunay-tetrahedral graph processing. This research targets faster scene reconstruction pipelines for digital-twin and geometric analysis workloads.
      </p>
      <p>
        In internal evaluation against an OpenMVS CPU baseline, the method achieved a 52.11x acceleration while maintaining a practical reconstruction workflow.
      </p>
      <br />
      <h4 style="font-size: 1.1rem">Penetration Depth and Simulation Queries</h4>
      <p>
        I also worked on hardware-accelerated penetration depth estimation from 2022 to 2023. The method uses penetration surface analysis with ray tracing and Hausdorff-distance-style proximity computation to support collision-aware simulation.
      </p>
      <p>
        The GPU implementation achieved a 37.66x speedup over the CPU version and a 5.33x speedup over a previous GPU baseline, leading to publication in <em>The Visual Computer</em>.
      </p>
    </div>
  `,
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
