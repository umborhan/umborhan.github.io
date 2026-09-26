const SITE_DATA = {
  publications: [
    {
      year: 2026, status: "Published", featured: true,
      title: "Performance, Adaptability, and Security in AI-Driven IIoT: A Survey",
      authors: "U. M. Borhan, A. Raza, T. Uddin, M. Islam, A. K. M. Muzahidul Islam, J. Chen",
      venue: "IEEE Internet of Things Journal",
      links: [
        {label: "DOI", url: "https://doi.org/10.1109/JIOT.2026.3701588"}
      ]
    },
    {
      year: 2026, status: "Published", featured: true,
      title: "Reliable Policy Transfer for Safety-Aware End-to-End Driving with Deep Reinforcement Learning",
      authors: "U. M. Borhan, A. Raza, Z. Lin, L. Wang, J. Li, J. Chen",
      venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2026), pp. 32134–32143",
      links: [
        {label: "Paper", url: "https://openaccess.thecvf.com/content/CVPR2026/html/Borhan_Reliable_Policy_Transfer_for_Safety-Aware_End-to-End_Driving_with_Deep_Reinforcement_CVPR_2026_paper.html"},
        {label: "Code", url: "https://github.com/szu-ai/safe-driving-drl"}
      ]
    },
    {
      year: 2026, status: "Published", featured: true,
      title: "EdgeSAC: Graph Neural Soft Actor-Critic for Hierarchical IoV Resource Management",
      authors: "A. Raza, U. M. Borhan, Y. Che, J. Chen, L. Wang",
      venue: "IEEE Transactions on Mobile Computing",
      links: [
        {label: "DOI", url: "https://doi.org/10.1109/TMC.2026.3691088"}
      ]
    },
    {
      year: 2025, status: "Published", featured: true,
      title: "Emergency UAV Landing on Unknown Field Using Depth-Enhanced Graph Structure",
      authors: "J. Chen, W. Du, J. Lin, U. M. Borhan, Y. Lin, B. Du",
      venue: "IEEE Transactions on Automation Science and Engineering, vol. 22, pp. 4434–4445",
      links: [
        {label: "DOI", url: "https://doi.org/10.1109/TASE.2024.3391017"}
      ]
    },
    {
      year: 2024, status: "Published", featured: false,
      title: "Robust UAV Policy Learning for Urban Infrastructure Surface Screening",
      authors: "B. Du, U. M. Borhan, T. Chen, J. Chen, J. Li, J. Chen",
      venue: "IEEE International Conference on Advanced Robotics and Mechatronics (ICARM 2024), Tokyo, pp. 1–8",
      links: [
        {label: "DOI", url: "https://doi.org/10.1109/ICARM62033.2024.10715841"}
      ]
    },
    {
      year: 2023, status: "Published", featured: false,
      title: "Autonomous Emergency Landing on 3D Terrains: Approaches for Monocular Vision-Based UAVs",
      authors: "W. Du, J. Lin, B. Du, U. M. Borhan, J. Li, J. Chen",
      venue: "IEEE International Conference on Advanced Robotics and Mechatronics (ICARM 2023), Sanya, pp. 105–112",
      links: [
        {label: "DOI", url: "https://doi.org/10.1109/ICARM58088.2023.10218933"}
      ]
    },
    {
      year: 2021, status: "Published", featured: false,
      title: "Application of Internet of Things for Early Detection of COVID-19 Using Wearables",
      authors: "T. Uddin, U. M. Borhan, A. K. M. Muzahidul Islam, S. Islam, S. Shatabda",
      venue: "ICSECS-ICOCSIM 2021, Pekan, Malaysia, pp. 405–410",
      links: [
        {label: "DOI", url: "https://doi.org/10.1109/ICSECS52883.2021.00080"}
      ]
    },
    {
      year: 2020, status: "Published", featured: false,
      title: "Solving Constraint Satisfaction Problem in TSP Using GA and DFS Algorithms",
      authors: "U. M. Borhan, T. Uddin",
      venue: "International Journal of Emerging Technologies and Innovative Research, 7(11), 417–421",
      links: []
    },
    {
      year: 2020, status: "Published", featured: false,
      title: "A Study on Mamdani Fuzzy Logic to Implement the Programs of Washing Machine",
      authors: "S. Ahmmed, U. M. Borhan",
      venue: "International Journal of Emerging Technologies and Innovative Research, 7(10), 3734–3738",
      links: []
    },

    {
      year: 2027, status: "Under review / resubmission", featured: true,
      title: "Omni4D: Object-Centric Policy Transfer for Humanoid Manipulation",
      authors: "U. M. Borhan, A. Raza, P. Haimei, J. Chen",
      venue: "AAAI 2027",
      links: []
    },
    {
      year: 2026, status: "Under review / resubmission", featured: true,
      title: "Ego-Relational Policy Transfer for Safety-Aware End-to-End Autonomous Driving",
      authors: "U. M. Borhan, A. Raza, Z. Lin, J. Peng, J. Li, J. Chen",
      venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
      links: []
    },
    {
      year: 2026, status: "Under review / resubmission", featured: false,
      title: "Autonomous Policy Transfer for GPS-Denied UAV Infrastructure Inspection",
      authors: "U. M. Borhan, B. Du, A. Raza, J. Li, J. Chen",
      venue: "IEEE Transactions on Intelligent Vehicles",
      links: []
    },
    {
      year: 2026, status: "Under review / resubmission", featured: false,
      title: "Robust Speed Control for UAV Infrastructure Inspection Under Visual Localization Degradation",
      authors: "U. M. Borhan, A. Raza, B. Lv, J. Li, J. Chen",
      venue: "IEEE Transactions on Automation Science and Engineering",
      links: []
    },
    {
      year: 2026, status: "Under review / resubmission", featured: false,
      title: "Edge Intelligence for Resource Management in Hybrid RF-VLC Internet of Vehicles",
      authors: "A. Raza, U. M. Borhan, M. W. A. Ashraf, M. M. Abro, J. Chen, L. Wang",
      venue: "IEEE Internet of Things Journal",
      links: []
    },
    {
      year: 2026, status: "Under review / resubmission", featured: false,
      title: "Joint Radio-Compute Resource Management for Clustered Vehicular Edge Networks",
      authors: "A. Raza, U. M. Borhan, A. Nasir, J. Li, J. Chen, L. Wang",
      venue: "IEEE Transactions on Mobile Computing",
      links: []
    },
    {
      year: 2026, status: "Under review / resubmission", featured: false,
      title: "Adaptive Post-Quantum Authentication for SDN-Managed Smart-Home IoT",
      authors: "Sameera Sameera, U. M. Borhan, A. Raza, Q. Liu, K. Sharif",
      venue: "IEEE Transactions on Dependable and Secure Computing",
      links: []
    },
    {
      year: 2027, status: "Under review / resubmission", featured: false,
      title: "Federated Risk Learning for Adaptive Post-Quantum IoT Authentication",
      authors: "U. M. Borhan, Sameera Sameera, A. Raza, F. Saeed, K. Sharif",
      venue: "ICLR 2027",
      links: []
    },
    {
      year: 2027, status: "Under review / resubmission", featured: false,
      title: "Selective Feature-Node Transformation for Heterophilic Graph Learning",
      authors: "A. Raza, U. M. Borhan, Sameera Sameera, L. Ouyang, J. Chen",
      venue: "ICLR 2027",
      links: []
    },
    {
      year: 2027, status: "Under review / resubmission", featured: false,
      title: "BCPT-Med: Credal Bounded-Consensus Partial Transport for Imbalanced Medical Image Clustering",
      authors: "Sameera Sameera, A. Raza, R. Ali, U. M. Borhan",
      venue: "AAAI 2027",
      links: []
    },
    {
      year: 2027, status: "Under review / resubmission", featured: false,
      title: "Conformal Safety Filtering under Enforcement Mismatch",
      authors: "A. Raza, U. M. Borhan, Y. Yu, J. Chen",
      venue: "AAAI 2027",
      links: []
    },
    {
      year: 2026, status: "Under review / resubmission", featured: false,
      title: "Distilling Reliable Guidance from Suboptimal Trajectories via Hierarchical Expert-Calibrated Alignment",
      authors: "Z. Lin, Z. Chen, U. M. Borhan, J. Li",
      venue: "NeurIPS 2026",
      links: []
    },
    {
      year: 2026, status: "Under review / resubmission", featured: false,
      title: "Artificial Intelligence and Machine Learning in Combating COVID-19: Lessons Learned for Future Pandemics for South Asia",
      authors: "L. Al Amin, U. M. Borhan, M. Islam, M. M. J. Ayan, G. M. I. Mahmud, M. B. Shahid, S. Bhowmick, R. K. Das, A. A. Bondhon, T. Uddin, A. K. M. Muzahidul Islam, T. T. Nguyen",
      venue: "Artificial Intelligence in Health",
      links: []
    }
  ],

  news: [
    {
      date: "June 2026",
      tag: "Publication",
      title: "First-author paper published at CVPR 2026",
      text: "Reliable Policy Transfer for Safety-Aware End-to-End Driving with Deep Reinforcement Learning appeared in the CVPR 2026 proceedings.",
      url: "https://openaccess.thecvf.com/content/CVPR2026/html/Borhan_Reliable_Policy_Transfer_for_Safety-Aware_End-to-End_Driving_with_Deep_Reinforcement_CVPR_2026_paper.html",
      image: "assets/news-placeholder.svg"
    },
    {
      date: "2026",
      tag: "Leadership",
      title: "Team Leader, SZU-PIONEER",
      text: "Led the SZU-PIONEER team for the 2026 Global Humanoid Robot Challenge, coordinating humanoid-robotics experimentation and team activities.",
      url: "",
      image: "assets/news-placeholder.svg"
    },
    {
      date: "January 2025",
      tag: "Profile",
      title: "Featured by Shenzhen University",
      text: "Shenzhen University profiled Borhan's research journey in AI, deep reinforcement learning, and Sim2Real policy transfer.",
      url: "https://lxs.szu.edu.cn/en/info/1002/2702.htm",
      image: "assets/news-placeholder.svg"
    },
    {
      date: "October 2024",
      tag: "Scholarship",
      title: "Universiade International Scholarship recognition",
      text: "Recognized at the Shenzhen Universiade International Scholarship ceremony and selected as an outstanding recipient speaker.",
      url: "https://lxs.szu.edu.cn/en/info/1002/2642.htm",
      image: "assets/news-placeholder.svg"
    },
    {
      date: "July 2023",
      tag: "Award",
      title: "Best Conference Paper Finalist at IEEE ICARM 2023",
      text: "The UAV emergency-landing paper was selected as a Best Conference Paper Finalist at the 8th IEEE International Conference on Advanced Robotics & Mechatronics.",
      url: "",
      image: "assets/news-placeholder.svg"
    },
    {
      date: "Coming soon",
      tag: "Update",
      title: "Research and deployment update",
      text: "Reserved for your next paper, award, conference, project milestone, or laboratory deployment update.",
      url: "",
      image: "assets/news-placeholder.svg"
    }
  ]
};
