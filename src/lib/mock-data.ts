import { MediaAnalysisResult, NetworkNode, NetworkEdge, SocialPost, SystemAlert } from '@/types';

export const INITIAL_ALERTS: SystemAlert[] = [
  {
    id: 'ALT-2026-901',
    timestamp: '10:04 AM (Active - 12m ago)',
    severity: 'CRITICAL',
    title: 'Coordinated Dam Collapse Panic Campaign Detected',
    description: 'High-frequency synchronized dissemination claiming Osman Sagar Dam breach with AI audio evacuation mandate.',
    affectedRegion: 'Hyderabad Metropolitan Area & Krishna Basin',
    languagesDetected: ['Telugu', 'Hindi', 'English'],
    campaignCluster: 'Cluster #4 (Syndicate-Delta)',
    status: 'ACTIVE'
  },
  {
    id: 'ALT-2026-898',
    timestamp: '09:42 AM',
    severity: 'HIGH',
    title: 'Synthetic Voice Impersonation of District Collector',
    description: '14.2kHz cutoff spectral anomaly identified in viral 28-second voice note ordering immediate highway shutdowns.',
    affectedRegion: 'Narayanaguda / Secunderabad',
    languagesDetected: ['Telugu'],
    campaignCluster: 'Cluster #2 (Audio-Spoof)',
    status: 'INVESTIGATING'
  },
  {
    id: 'ALT-2026-885',
    timestamp: '09:15 AM',
    severity: 'MEDIUM',
    title: 'Recycled Imagery: 2018 Flood Photographed as Current',
    description: 'Computer vision perceptual hashing matched circulating breach photo to August 2018 Kerala reservoir discharge.',
    affectedRegion: 'Statewide Web Stream',
    languagesDetected: ['English', 'Hindi'],
    campaignCluster: 'Cluster #1 (Media-Repack)',
    status: 'MITIGATED'
  }
];

export const SCENARIO_MEDIA_ANALYSIS: MediaAnalysisResult[] = [
  {
    id: 'MED-DAM-01',
    timestamp: '10:02:15 AM',
    title: 'Video Claim: Osman Sagar Dam Main Gate Structural Failure',
    mediaType: 'video',
    status: 'CONTRADICTED',
    confidenceScore: 97.4,
    deepfakeScore: 94.8,
    language: 'Telugu',
    summary: 'The video composites genuine 2021 heavy water release archival footage with a synthetic GAN-rendered gate collapse cascade. Face swap detected on local engineer badge.',
    sourceAccount: '@HydCalamityWatch (Botnet Tier-1)',
    propagationVelocity: 420,
    reachEstimate: 148500,
    visionForensics: {
      manipulationDetected: true,
      technique: 'Temporal Flow Inconsistency & DeepFake GAN Spillway Synthesis',
      faceSwapConfidence: 96.2,
      elaAnomalyRatio: 0.84,
      metadataAltered: true,
      reverseSearchMatch: {
        originalEvent: 'Osman Sagar Floodgate Opening (Normal Operations)',
        originalDate: 'July 26, 2021',
        originalLocation: 'Hyderabad, Telangana',
        similarityScore: 91.5
      }
    },
    claimVerification: {
      claimText: 'Osman Sagar main gate broken! Water rushing into lower colonies, evacuation immediately!',
      verdict: 'CONTRADICTED by Live Irrigation Dept Telemetry & Real-Time Sensors',
      officialDebunkSource: 'Telangana State Disaster Management Authority (TG-SDMA)',
      officialDebunkUrl: 'https://tg-sdma.gov.in/bulletins/2026-11-12-dam-status',
      contradictsOfficial: true,
      evidenceChain: [
        {
          step: 1,
          source: 'OpenCV Optical Flow & Video Vision Transformer (ViT)',
          finding: 'Identified unnatural pixel shearing in gate #3 water torrent at 0:04 to 0:09 timeline.',
          confidence: 96.8
        },
        {
          step: 2,
          source: 'Multi-Modal Perceptual Hash Index (pHash)',
          finding: 'Background hills and spillway match July 2021 YouTube footage by local news wire.',
          confidence: 94.2
        },
        {
          step: 3,
          source: 'Government Live Sensor Ingestion API',
          finding: 'Water reservoir level steady at 1,788.20 ft (Safe operating threshold 1,790 ft). Outflow 0 cusecs.',
          confidence: 99.9
        }
      ]
    },
    multilingualVariants: [
      {
        language: 'Telugu',
        translatedText: 'ఉస్మాన్ సాగర్ డ్యామ్ గేట్ కొట్టుకుపోయింది! కాలనీల ప్రజలు వెంటనే ఖాళీ చేయాలి!',
        distributionCount: 3820
      },
      {
        language: 'Hindi',
        translatedText: 'उस्मान सागर बांध का मुख्य द्वार टूटा! पानी शहर की ओर बढ़ रहा है, तुरंत सुरक्षित स्थान जाएं!',
        distributionCount: 2190
      },
      {
        language: 'English',
        translatedText: 'URGENT: Major dam collapse near city! Floodwaters entering residential zones, evacuate now!',
        distributionCount: 4120
      }
    ]
  },
  {
    id: 'MED-AUDIO-02',
    timestamp: '10:03:40 AM',
    title: 'Audio Note: District Collector Voice Declaring Code-Red Evacuation',
    mediaType: 'audio',
    status: 'CONTRADICTED',
    confidenceScore: 98.9,
    deepfakeScore: 99.1,
    language: 'Telugu',
    summary: 'Voice cloned using XTTS/ElevenLabs generative architecture. Absence of natural breath cadence, unnatural spectral cutoff at 14.5kHz, zero background ambient telemetry.',
    sourceAccount: 'WhatsApp Broadcast Forward Loop',
    propagationVelocity: 850,
    reachEstimate: 310000,
    audioForensics: {
      voiceCloningDetected: true,
      spectralContinuityScore: 18.2, // abnormally low
      syntheticArtifactsDetected: true,
      voiceBiometricMatch: 'Synthesized voice timbre mimicking Official IAS Public Speeches (98.4% target match)',
      pitchConsistency: 99.2 // robotic consistency
    },
    claimVerification: {
      claimText: 'This is an emergency alert from District Collectorate. All residents within 10km must evacuate before 11:30 AM.',
      verdict: 'CONTRADICTED: District Collector office released verified press release denying any evacuation order.',
      officialDebunkSource: 'Collectorate Hyderabad & PIB Fact Check Desk',
      contradictsOfficial: true,
      evidenceChain: [
        {
          step: 1,
          source: 'Audio Spectrogram & Mel-Cepstral Analysis',
          finding: 'Phase inversion and synthetic phase Vocoder harmonics discovered across whole sample.',
          confidence: 98.7
        },
        {
          step: 2,
          source: 'PIB FactCheck Telemetry Verification',
          finding: 'Collectorate official handle @Collector_Hyd published text & video denial at 10:07 AM.',
          confidence: 100
        }
      ]
    }
  },
  {
    id: 'MED-PHOTO-03',
    timestamp: '10:01:10 AM',
    title: 'Photo: Submerged City Highway Claimed as "Today 9:30 AM"',
    mediaType: 'image',
    status: 'MISLEADING',
    confidenceScore: 99.5,
    deepfakeScore: 12.0, // genuine photo, but repurposed!
    language: 'English',
    summary: 'Outdated media reuse. Authenticity of image is real, but presented context is 100% fabricated. Image was captured in August 2018 during Kerala floods in Aluva.',
    sourceAccount: '@NewsFlashExpress (Suspicious Cluster)',
    propagationVelocity: 310,
    reachEstimate: 92000,
    visionForensics: {
      manipulationDetected: false,
      technique: 'Context Hijack / Outdated Media Recycling',
      faceSwapConfidence: 0.0,
      elaAnomalyRatio: 0.08,
      metadataAltered: true,
      reverseSearchMatch: {
        originalEvent: 'Kerala Flood Inundation on NH-544 Aluva Bridge',
        originalDate: 'August 16, 2018',
        originalLocation: 'Aluva, Ernakulam, Kerala',
        similarityScore: 99.8
      }
    },
    claimVerification: {
      claimText: 'Water already reaching highways near Outer Ring Road. Cars submerged this morning!',
      verdict: 'MISLEADING: Authentic photo repurposed with false temporal and spatial claims.',
      officialDebunkSource: 'Traffic Police Live CCTV Feeds',
      contradictsOfficial: true,
      evidenceChain: [
        {
          step: 1,
          source: 'Reverse Visual Search & Vector Hashing',
          finding: 'Exact duplicate indexed in 2018 national newspaper archives (The Hindu, August 17, 2018).',
          confidence: 99.8
        },
        {
          step: 2,
          source: 'Smart City Live Traffic CCTV Feed Integration',
          finding: 'Outer Ring Road (ORR) Gachibowli-Shamshabad junction is dry, flow normal.',
          confidence: 100
        }
      ]
    }
  }
];

export const NETWORK_NODES: NetworkNode[] = [
  { id: 'usr-01', label: 'NewsFlashExpress', accountHandle: '@NewsFlashExpress', role: 'ringleader', clusterId: 4, riskScore: 96, followers: 82000, accountAgeDays: 42, language: 'English', postsCount: 142, coordinationIndex: 94 },
  { id: 'usr-02', label: 'HydCalamityWatch', accountHandle: '@HydCalamityWatch', role: 'ringleader', clusterId: 4, riskScore: 98, followers: 44000, accountAgeDays: 14, language: 'Telugu', postsCount: 310, coordinationIndex: 98 },
  { id: 'usr-03', label: 'DeshVaniAlerts', accountHandle: '@DeshVaniAlerts', role: 'amplifier', clusterId: 4, riskScore: 89, followers: 19000, accountAgeDays: 28, language: 'Hindi', postsCount: 220, coordinationIndex: 91 },
  { id: 'usr-04', label: 'TG_PulseBot_09', accountHandle: '@TG_PulseBot_09', role: 'bot', clusterId: 4, riskScore: 99, followers: 120, accountAgeDays: 4, language: 'Telugu', postsCount: 890, coordinationIndex: 100 },
  { id: 'usr-05', label: 'TG_PulseBot_11', accountHandle: '@TG_PulseBot_11', role: 'bot', clusterId: 4, riskScore: 99, followers: 94, accountAgeDays: 4, language: 'Telugu', postsCount: 840, coordinationIndex: 100 },
  { id: 'usr-06', label: 'AlertBharat_44', accountHandle: '@AlertBharat_44', role: 'bot', clusterId: 4, riskScore: 97, followers: 310, accountAgeDays: 6, language: 'Hindi', postsCount: 760, coordinationIndex: 96 },
  { id: 'usr-07', label: 'CityFlash_Bot1', accountHandle: '@CityFlash_Bot1', role: 'bot', clusterId: 4, riskScore: 95, followers: 180, accountAgeDays: 5, language: 'English', postsCount: 650, coordinationIndex: 95 },
  { id: 'usr-08', label: 'TelanganaSDMA', accountHandle: '@TelanganaSDMA', role: 'authentic_authority', clusterId: 1, riskScore: 2, followers: 480000, accountAgeDays: 2800, language: 'English', postsCount: 4500, coordinationIndex: 0 },
  { id: 'usr-09', label: 'PIBFactCheck', accountHandle: '@PIBFactCheck', role: 'authentic_authority', clusterId: 1, riskScore: 1, followers: 1200000, accountAgeDays: 3100, language: 'English', postsCount: 11200, coordinationIndex: 0 },
  { id: 'usr-10', label: 'Collector_Hyd', accountHandle: '@Collector_Hyd', role: 'authentic_authority', clusterId: 1, riskScore: 2, followers: 640000, accountAgeDays: 2400, language: 'Telugu', postsCount: 3800, coordinationIndex: 0 },
  { id: 'usr-11', label: 'LocalCitizen_Ram', accountHandle: '@ram_hyderabadi', role: 'unverified', clusterId: 3, riskScore: 42, followers: 620, accountAgeDays: 850, language: 'Telugu', postsCount: 410, coordinationIndex: 32 },
  { id: 'usr-12', label: 'DailyNewsEcho', accountHandle: '@DailyNewsEcho', role: 'amplifier', clusterId: 4, riskScore: 84, followers: 31000, accountAgeDays: 90, language: 'English', postsCount: 540, coordinationIndex: 88 }
];

export const NETWORK_EDGES: NetworkEdge[] = [
  { source: 'usr-01', target: 'usr-02', interactionType: 'cross_post', weight: 4.8, timeDeltaSeconds: 12 },
  { source: 'usr-01', target: 'usr-03', interactionType: 'caption_variant', weight: 4.5, timeDeltaSeconds: 18 },
  { source: 'usr-02', target: 'usr-04', interactionType: 'retweet', weight: 5.0, timeDeltaSeconds: 3 },
  { source: 'usr-02', target: 'usr-05', interactionType: 'retweet', weight: 5.0, timeDeltaSeconds: 4 },
  { source: 'usr-03', target: 'usr-06', interactionType: 'retweet', weight: 4.9, timeDeltaSeconds: 7 },
  { source: 'usr-01', target: 'usr-07', interactionType: 'retweet', weight: 4.7, timeDeltaSeconds: 9 },
  { source: 'usr-04', target: 'usr-11', interactionType: 'mention', weight: 2.1, timeDeltaSeconds: 45 },
  { source: 'usr-03', target: 'usr-12', interactionType: 'cross_post', weight: 4.2, timeDeltaSeconds: 22 },
  { source: 'usr-08', target: 'usr-09', interactionType: 'mention', weight: 4.0, timeDeltaSeconds: 120 },
  { source: 'usr-08', target: 'usr-10', interactionType: 'mention', weight: 4.5, timeDeltaSeconds: 60 }
];

export const RECENT_SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'POST-001',
    author: 'Hyderabad Calamity Watch',
    handle: '@HydCalamityWatch',
    avatar: '⚠️',
    platform: 'X (Twitter)',
    timestamp: '10:02 AM',
    content: '🚨 BREAKING: Osman Sagar dam crest gate cracked! Flood warning for all downstream colonies. See attached video!',
    language: 'English',
    status: 'CONTRADICTED',
    shares: 4890,
    likes: 1240,
    botScore: 98,
    flaggedReason: 'Synthetically manipulated video clip & coordinated 42-sec bot amplify surge'
  },
  {
    id: 'POST-002',
    author: 'Telangana SDMA Official',
    handle: '@TelanganaSDMA',
    avatar: '🏛️',
    platform: 'X (Twitter)',
    timestamp: '10:06 AM',
    content: '⚠️ OFFICIAL CLARIFICATION: Osman Sagar and Himayat Sagar dams are 100% safe and intact. Live water levels are below danger mark. Do not share AI-generated video and cloned voice notes circulating online. Action being initiated.',
    language: 'English',
    status: 'VERIFIED',
    shares: 14200,
    likes: 18900,
    botScore: 0,
    flaggedReason: 'Government Certified Source'
  },
  {
    id: 'POST-003',
    author: 'తెలంగాణ అలెర్ట్ బులెటిన్',
    handle: '@TG_PulseBot_09',
    avatar: '🤖',
    platform: 'Telegram',
    timestamp: '10:03 AM',
    content: 'అత్యవసర సమాచారం: ఉస్మాన్ సాగర్ డ్యామ్ గేట్లు కొట్టుకుపోయాయి. వెంటనే నగరం వదిలి వెళ్లాలని కలెక్టర్ గారి ఆడియో ఆదేశం!',
    language: 'Telugu',
    status: 'CONTRADICTED',
    shares: 1250,
    likes: 80,
    botScore: 100,
    flaggedReason: 'Automated script distribution + Cloned audio voice payload'
  },
  {
    id: 'POST-004',
    author: 'Desh Vani Alerts',
    handle: '@DeshVaniAlerts',
    avatar: '📢',
    platform: 'WhatsApp',
    timestamp: '10:04 AM',
    content: 'हैदराबाद में बड़ा हादसा! उस्मान सागर डैम टूटा, शहर में बाढ़ का पानी घुसा। देखें हाईवे की ताज़ा तस्वीरें।',
    language: 'Hindi',
    status: 'MISLEADING',
    shares: 8900,
    likes: 340,
    botScore: 91,
    flaggedReason: 'Old 2018 Kerala flood photo repackaged with fabricated Hindi caption'
  },
  {
    id: 'POST-005',
    author: 'PIB Fact Check',
    handle: '@PIBFactCheck',
    avatar: '✅',
    platform: 'X (Twitter)',
    timestamp: '10:09 AM',
    content: '#FakeNewsAlert: An audio note falsely claiming to be District Collector ordering Hyderabad dam evacuation is FAKE. The audio is digitally cloned. Dams are structurally safe.',
    language: 'English',
    status: 'VERIFIED',
    shares: 8400,
    likes: 11200,
    botScore: 0,
    flaggedReason: 'National Fact-Checking Bureau'
  }
];

