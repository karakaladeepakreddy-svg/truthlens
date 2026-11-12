export type VerificationStatus = 'VERIFIED' | 'CONTRADICTED' | 'MISLEADING' | 'UNVERIFIED';

export type MediaType = 'image' | 'video' | 'audio' | 'text' | 'multimodal';

export interface MediaAnalysisResult {
  id: string;
  timestamp: string;
  title: string;
  mediaType: MediaType;
  status: VerificationStatus;
  confidenceScore: number; // 0 to 100
  deepfakeScore: number; // 0 to 100 (probability of manipulation)
  language: 'English' | 'Hindi' | 'Telugu';
  summary: string;
  sourceAccount: string;
  propagationVelocity: number; // shares/min
  reachEstimate: number;
  
  // Multimodal inspection details
  visionForensics?: {
    manipulationDetected: boolean;
    technique: string; // e.g. "Facial landmark warp / GAN artifact / ELA anomaly"
    faceSwapConfidence: number;
    elaAnomalyRatio: number;
    metadataAltered: boolean;
    reverseSearchMatch?: {
      originalEvent: string;
      originalDate: string;
      originalLocation: string;
      similarityScore: number;
    };
  };

  audioForensics?: {
    voiceCloningDetected: boolean;
    spectralContinuityScore: number;
    syntheticArtifactsDetected: boolean;
    voiceBiometricMatch: string; // e.g. "Cloned profile matching Public Official X (89% similarity)"
    pitchConsistency: number;
  };

  claimVerification?: {
    claimText: string;
    verdict: string;
    officialDebunkSource?: string;
    officialDebunkUrl?: string;
    contradictsOfficial: boolean;
    evidenceChain: Array<{
      step: number;
      source: string;
      finding: string;
      confidence: number;
    }>;
  };

  multilingualVariants?: Array<{
    language: 'English' | 'Hindi' | 'Telugu';
    translatedText: string;
    distributionCount: number;
  }>;
}

export interface NetworkNode {
  id: string;
  label: string;
  accountHandle: string;
  role: 'ringleader' | 'amplifier' | 'bot' | 'authentic_authority' | 'unverified';
  clusterId: number;
  riskScore: number; // 0 - 100
  followers: number;
  accountAgeDays: number;
  language: string;
  postsCount: number;
  coordinationIndex: number; // 0 - 100 (degree of identical synchronized bursts)
}

export interface NetworkEdge {
  source: string;
  target: string;
  interactionType: 'retweet' | 'cross_post' | 'caption_variant' | 'mention';
  weight: number;
  timeDeltaSeconds: number;
}

export interface SocialPost {
  id: string;
  author: string;
  handle: string;
  avatar: string;
  platform: 'X (Twitter)' | 'Telegram' | 'WhatsApp' | 'YouTube' | 'Facebook';
  timestamp: string;
  content: string;
  language: 'English' | 'Hindi' | 'Telugu';
  mediaUrl?: string;
  mediaType?: MediaType;
  status: VerificationStatus;
  shares: number;
  likes: number;
  botScore: number;
  flaggedReason: string;
}

export interface SystemAlert {
  id: string;
  timestamp: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'INFO';
  title: string;
  description: string;
  affectedRegion: string;
  languagesDetected: string[];
  campaignCluster: string;
  status: 'ACTIVE' | 'INVESTIGATING' | 'MITIGATED';
}

