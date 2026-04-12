// ---------- Navbar titles
const krNavbarData = {
  title: "김영우",
  Home: "홈",
  publications: "논문",
  Research: "연구",
  Jobs: "경력",
  Contact: "연락처",
};

// ---------- Home page data
const krHomePageData = {
  name: "김영우",
  jobTitle: "컴퓨터공학 박사과정",
  home_title: "프로필",
  home_content: `
  <div>
    <p>
      저는 한국기술교육대학교 컴퓨터공학 박사과정에 재학 중이며 SPIN Lab에서 연구하고 있습니다. 주요 관심 분야는 GPU 가속 기하 연산, 레이 트레이싱 코어 기반 계산, 근접 질의, 물리 시뮬레이션, 그리고 3차원 재구성입니다.
    </p>
    <p>
      최근에는 Hausdorff distance 계산, penetration depth 추정, 실시간 3D surface reconstruction을 중심으로 연구하고 있으며, 디지털 트윈과 VR/AR 환경에서 실제로 사용할 수 있는 고성능 기하 처리 파이프라인을 만드는 데 집중하고 있습니다.
    </p>
    <h2 class='title'> 학력 </h2>
    <ul>
      <li>한국기술교육대학교 컴퓨터공학 박사과정, 2022.02 - 2026.08(예정), GPA 4.21/4.5</li>
      <li>한국기술교육대학교 컴퓨터공학 석사, 2020.03 - 2022.02, GPA 4.25/4.5</li>
      <li>한국기술교육대학교 컴퓨터공학 학사, 2013.03 - 2020.02, GPA 2.63/4.5</li>
    </ul>
    <h2 class='title'> 연구 관심 분야 </h2>
    <ul>
      <li>가상현실 및 증강현실</li>
      <li>3차원 재구성과 디지털 트윈</li>
      <li>고성능 컴퓨팅</li>
      <li>근접 질의와 물리 시뮬레이션</li>
    </ul>
    <h2 class='title'> 기술 스택 </h2>
    <ul>
      <li>프로그래밍: C++, CUDA, OptiX</li>
      <li>3D 그래픽스: OpenGL, Unity, Mesh Processing</li>
      <li>라이브러리: Thrust, CGAL, OpenMVS, OpenCV</li>
    </ul>
  </div>
  `,
};

// ---------- Publications page data
const krPublicationsPageData = {
  type_one_title: "저널 논문",

  type_one_items: [
    {
      title: `RT-HDIST: Ray-Tracing Core-based Hausdorff Distance Computation.`,
      abstract: `Pacific Graphics 2025 Journal Track을 통해 Computer Graphics Forum에 게재된 논문으로, RTX 레이 트레이싱 코어를 이용해 대규모 기하 데이터의 Hausdorff distance 계산을 가속합니다.`,
      date: "2025",
      link: "",
      github: "",
      writers: ["YoungWoo Kim", "Jaehong Lee", "Duksu Kim"],
    },
    {
      title: `RTPD: Penetration Depth Calculation Using Hardware-Accelerated Ray Tracing.`,
      abstract: `The Visual Computer 게재 논문으로, 하드웨어 레이 트레이싱을 활용한 penetration depth 계산 파이프라인을 제안합니다.`,
      date: "2025",
      link: "",
      github: "",
      writers: ["YoungWoo Kim", "Sungmin Kwon", "Duksu Kim"],
    },
    {
      title: `Real-time Lens Distortion Algorithm on an Edge Device with GPU.`,
      abstract: `IEEE Access 게재 논문으로, 임베디드 GPU 환경에서의 실시간 렌즈 왜곡 보정 알고리즘을 다룹니다.`,
      date: "2022",
      link: "",
      github: "",
      writers: ["Young-Woo Kim", "Hyeon-seok Yang", "Duksu Kim"],
    },
  ],

  type_two_title: "포스터 및 프로시딩",
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

  type_three_title: "프리프린트",
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
const krResearchPageData = {
  title: "연구",
  content: `
    <div class='research_content'>
      <p>
        제 연구는 최신 GPU 아키텍처를 활용해 고비용의 기하 연산을 실용적인 성능으로 끌어내는 데 초점을 둡니다. 특히 레이 트레이싱 코어를 계산 자원으로 활용하여 proximity query, reconstruction, simulation 문제를 빠르게 해결하는 방법을 연구하고 있습니다.
      </p>
      <br />
      <h4 style="font-size: 1.1rem">RT-HDIST: 레이 트레이싱 코어 기반 Hausdorff Distance</h4>
      <p>
        2023년부터 2025년까지 KOREATECH SPIN Lab에서 BVH 기반 ray traversal, nearest-neighbor 탐색, CUDA/OptiX 최적화를 결합한 Hausdorff distance 계산 파이프라인을 개발했습니다.
      </p>
      <p>
        해당 연구는 CPU 대비 334.87배의 속도 향상을 보였고, Pacific Graphics 2025 Journal Track을 통해 <em>Computer Graphics Forum</em>에 게재되었습니다.
      </p>
      <br />
      <h4 style="font-size: 1.1rem">RTRecons: GPU 기반 3D Surface Reconstruction</h4>
      <p>
        2024년부터는 ray marching, ray-triangle intersection, Delaunay tetrahedral graph 처리를 이용한 GPU 기반 3D surface reconstruction을 연구하고 있습니다. 목표는 디지털 트윈과 대규모 장면 분석에 적합한 빠른 재구성 파이프라인을 만드는 것입니다.
      </p>
      <p>
        내부 비교에서 OpenMVS CPU baseline 대비 52.11배의 가속 성능을 확인했습니다.
      </p>
      <br />
      <h4 style="font-size: 1.1rem">Penetration Depth 및 Simulation Query</h4>
      <p>
        2022년부터 2023년까지는 penetration surface 분석과 ray tracing 기반 proximity computation을 활용한 penetration depth 계산 연구를 수행했습니다.
      </p>
      <p>
        GPU 구현은 CPU 대비 37.66배, 기존 GPU 대비 5.33배 속도 향상을 보였으며, 결과는 <em>The Visual Computer</em>에 게재되었습니다.
      </p>
    </div>
  `,
};

// ---------- Jobs page data
const krJobsPageData = {
  title: "경력",
  items: [
    {
      title: `연구원 / 대학원 연구원`,
      company: "KOREATECH SPIN Lab",
      startData: "2020.03",
      endDate: "",
      location: "천안, 대한민국",
      abstract:
        "GPU 컴퓨팅, 레이 트레이싱 코어 가속, 기하 근접 질의, 3D 재구성 관련 연구를 수행하고 있습니다.",
      achievements: [
        "RT-HDIST 연구를 주도하여 Computer Graphics Forum 논문으로 발표했습니다.",
        "하드웨어 레이 트레이싱 기반 penetration depth 계산 연구를 수행해 The Visual Computer에 게재했습니다.",
        "CUDA, OptiX, Thrust, CGAL 기반의 GPU 3D reconstruction 파이프라인을 개발했습니다.",
      ],
    },
    {
      title: `시간강사`,
      company: "KOREATECH",
      startData: "2024년 봄학기",
      endDate: "2025년 가을학기",
      location: "천안, 대한민국",
      abstract:
        "박사과정 연구와 병행하며 학부 과목 강의를 담당했습니다.",
      achievements: ["2024년 봄학기 강의 담당", "2025년 가을학기 강의 담당"],
    },
    {
      title: `조교`,
      company: "KOREATECH",
      startData: "2020년 가을학기",
      endDate: "2023년 가을학기",
      location: "천안, 대한민국",
      abstract:
        "컴퓨터공학 주요 과목의 실습, 과제, 수업 운영을 지원했습니다.",
      achievements: [
        "2020년부터 2023년까지 여러 학기에 걸쳐 조교 수행",
        "C Programming II 및 그래픽스 관련 과목 지원",
      ],
    },
  ],
};
