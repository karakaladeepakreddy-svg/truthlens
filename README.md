# 🛡️ TruthLens — Real-Time Multimodal Deepfake Detection and Coordinated Misinformation Intelligence Platform

**Team**: WARRIORS  
**Hackathon**: YUKTIK '26 (CSE AI&ML, KMIT)  
**Problem Statement**: PS11 — Real-Time Multimodal Deepfake Detection and Coordinated Misinformation Intelligence Platform  

---

## 🌟 Overview

With the rapid proliferation of synthetic media and coordinated disinformation campaigns, standalone single-post classifiers fail to capture distributed adversarial operations. 

**TruthLens** is an intelligence and verification platform designed to:
1. **Detect Multimodal Deepfakes**: Vision Transformer optical flow for video GAN composites, Mel-spectrogram & 14.5 kHz vocoder cutoff detection for cloned voices, and Error Level Analysis (ELA) with perceptual hash matching for repurposed imagery.
2. **Contextual Claim Verification (RAG)**: Ultra-low-latency verification powered by **Groq Llama-3.3-70B** cross-referencing real-time official telemetry (e.g. TG-SDMA reservoir sensors) and accredited fact-checking bureaus (PIB Fact Check).
3. **Graph Neural Network Coordinated Inauthentic Behavior (CIB)**: Interactive network graph detecting synchronized posting bursts across bot rings and ringleader accounts.
4. **Multilingual Correlation**: Synchronous tracking and classification across **English**, **Telugu (తెలుగు)**, and **Hindi (हिन्दी)**.
5. **Explainable AI (XAI)**: End-to-end evidence provenance chains and printable police/agency forensic dossiers.

---

## 🏗️ System Architecture

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS, HTML5 Canvas Network Graph, Web Audio Spectrogram
- **Inference Engine**: Groq API (`llama-3.3-70b-versatile`) with high-fidelity deterministic fallback
- **Forensic Pipeline**:
  - Video: Vision Transformer (ViT) & optical flow shear analysis
  - Audio: Spectral continuity & vocoder phase anomaly detection
  - Image: Error Level Analysis (ELA) & pHash vector index matching
  - Network: Graph clustering & temporal burst anomaly detection ($p < 0.0001$)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ (tested on Node 20+)
- npm or pnpm

### 2. Installation
```bash
git clone <repo-url>
cd truthlens
npm install --legacy-peer-deps
```

### 3. Running Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Running Production Server
```bash
npm run build
npm run start
```

### 5. Optional Groq API Key
Add to `.env.local` or configure in `/admin`:
```env
NEXT_PUBLIC_GROQ_API_KEY=gsk_your_groq_api_key_here
```

---

## ⚖️ Evaluation Criteria Mapping

- **Multimodal AI Detection (20%)**: `/analyze`
- **Claim Verification & Contextual Reasoning (20%)**: `/analyze` & `/api/groq/verify`
- **Coordinated Network Detection (15%)**: `/network`
- **Real-Time Web Integration (15%)**: `/feed` & `/dashboard`
- **Multilingual Capability (10%)**: Global Language Selector & translation
- **Explainability & Traceability (10%)**: `/investigations`
- **System Architecture & Scalability (5%)**: Modular Next.js 15 + Groq LPU
- **UI/UX & Polish (5%)**: Cyber-Intel dark aesthetic with real-time alerts

---

© 2026 Team WARRIORS · YUKTIK-2026
