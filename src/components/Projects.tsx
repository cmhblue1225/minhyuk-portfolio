import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, Database, Brain, Smartphone, FileText, Code, X, ChevronRight, Star, GitFork, Eye, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import ProjectModal from './ProjectModal'

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  fullDescription: string
  image: string
  technologies: string[]
  features: string[]
  challenges: string[]
  achievements: string[]
  completionRate: string
  deployUrl: string
  githubUrl: string
  status: string
  color: string
  icon: React.ReactNode
  category: string
  duration: string
  teamSize: string
  githubStats?: {
    stars: number
    forks: number
    watchers: number
  }
  screenshots: string[]
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Convi - 편의점 종합 솔루션',
      subtitle: '디지털 혁신으로 편의점을 재정의',
      description: '완전한 상용 수준의 편의점 통합 관리 플랫폼입니다. 고객, 점주, 본사가 실시간으로 연결되어 주문부터 재고 관리, 매출 분석까지 모든 비즈니스 프로세스를 자동화합니다.',
      fullDescription: 'Convi는 편의점 업계의 디지털 전환을 위한 완전한 엔터프라이즈급 솔루션입니다. React 19와 TypeScript로 구축된 현대적인 웹 애플리케이션으로, Supabase를 활용한 실시간 데이터베이스와 17개의 정규화된 테이블로 복잡한 비즈니스 로직을 처리합니다. 토스페이먼츠 SDK를 완전 연동하여 안전한 결제 처리를 보장하며, RLS(Row Level Security) 정책으로 데이터 보안을 강화했습니다.',
      image: '/api/placeholder/600/400',
      technologies: ['React 19', 'TypeScript', 'Supabase', 'Tailwind CSS', '토스페이먼츠', 'PostgreSQL', 'Zustand', 'React Query'],
      features: [
        '실시간 주문 및 재고 관리',
        '토스페이먼츠 결제 연동',
        '매출 분석 대시보드',
        '본사-점주-고객 통합 관리',
        '17개 테이블 엔터프라이즈 DB',
        '실시간 알림 시스템',
        '자동 발주 시스템',
        '포인트 적립 및 관리'
      ],
      challenges: [
        '복잡한 멀티테넌트 아키텍처 구현',
        '실시간 데이터 동기화 최적화',
        '결제 시스템 보안 강화',
        '대용량 데이터 처리 성능 개선'
      ],
      achievements: [
        '17개 테이블 완전 정규화',
        '99.9% 결제 성공률 달성',
        '실시간 주문 처리 평균 200ms',
        'Render 프로덕션 배포 완료'
      ],
      completionRate: '98%',
      deployUrl: 'https://convi-final.onrender.com',
      githubUrl: 'https://github.com/cmhblue1225/convi',
      status: 'LIVE',
      color: 'from-apple-blue-500 to-apple-blue-600',
      icon: <Database className="w-8 h-8" />,
      category: 'Full-Stack Web Application',
      duration: '6개월',
      teamSize: '1인 (개인 프로젝트)',
      githubStats: {
        stars: 12,
        forks: 3,
        watchers: 8
      },
      screenshots: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600']
    },
    {
      id: 2,
      title: 'NewMind - 감정 AI 상담 서비스',
      subtitle: '감정을 이해하는 인공지능',
      description: 'OpenAI ChatGPT API를 활용한 감정 분석 및 상담 서비스입니다. 사용자의 일기를 분석하여 감정 상태를 파악하고, 맞춤형 피드백과 Spotify 음악 추천을 제공합니다.',
      fullDescription: 'NewMind는 정신 건강 관리를 위한 AI 기반 감정 분석 플랫폼입니다. OpenAI GPT-4o 모델을 활용하여 사용자의 일기 텍스트에서 감정을 정확하게 분석하고, 개인화된 상담과 치료적 피드백을 제공합니다. Spotify Web API와 연동하여 감정 상태에 맞는 음악 치료를 추천하며, 커뮤니티 기능을 통해 익명의 감정 공유를 가능하게 합니다.',
      image: '/api/placeholder/600/400',
      technologies: ['Vanilla JavaScript', 'Node.js', 'OpenAI API', 'Supabase', 'Spotify API', 'Express', 'Netlify', 'Render'],
      features: [
        'GPT-4o 기반 감정 분석',
        'Spotify 음악 추천 시스템',
        '커뮤니티 일기 공유',
        '실시간 알림 시스템',
        '주간 감정 패턴 분석',
        '익명 채팅 상담',
        '감정 통계 대시보드',
        '구독 서비스 시스템'
      ],
      challenges: [
        'AI 감정 분석 정확도 향상',
        '사용자 프라이버시 보호',
        'Spotify API 인증 플로우 구현',
        '실시간 채팅 시스템 최적화'
      ],
      achievements: [
        '90% 이상 감정 분석 정확도',
        '1000+ 개인화 음악 추천',
        'Netlify + Render 분산 배포',
        '실시간 사용자 피드백 시스템 구현'
      ],
      completionRate: '100%',
      deployUrl: 'https://beamish-dragon-f15ff7.netlify.app',
      githubUrl: 'https://github.com/cmhblue1225/newmind1',
      status: 'LIVE',
      color: 'from-apple-blue-400 to-apple-blue-700',
      icon: <Brain className="w-8 h-8" />,
      category: 'AI & Healthcare',
      duration: '4개월',
      teamSize: '1인 (개인 프로젝트)',
      githubStats: {
        stars: 8,
        forks: 2,
        watchers: 5
      },
      screenshots: ['/api/placeholder/800/600', '/api/placeholder/800/600']
    },
    {
      id: 3,
      title: 'Sensor Game Hub - 센서 게임 플랫폼',
      subtitle: '새로운 게임 경험의 창조',
      description: '모바일 센서를 활용한 혁신적인 게임 플랫폼입니다. QR 코드로 간편하게 연결하고, 기울이기와 회전으로 다양한 게임을 즐길 수 있는 멀티플레이어 지원 게임 허브입니다.',
      fullDescription: 'Sensor Game Hub는 모바일 디바이스의 센서 기술을 활용하여 새로운 게임 경험을 제공하는 혁신적인 플랫폼입니다. Node.js와 Socket.IO를 기반으로 실시간 멀티플레이어 기능을 구현하였으며, QR 코드를 통한 간편한 세션 연결과 독립적인 게임 룸 관리를 지원합니다. 가속도계와 자이로스코프를 활용한 직관적인 게임 조작으로 전통적인 게임 컨트롤러를 대체합니다.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Socket.IO', 'Canvas API', 'Sensor APIs', 'QR Code', 'WebSocket', 'Express', 'HTML5'],
      features: [
        '실시간 멀티플레이어 (최대 10명)',
        'QR 코드 기반 간편 연결',
        '센서 기반 게임 조작',
        '독립 세션 관리 시스템',
        '다양한 게임 모드 (Solo/Dual/Multi)',
        'AI 게임 생성기',
        '실시간 채팅 시스템',
        '게임 통계 및 순위'
      ],
      challenges: [
        '센서 데이터 실시간 동기화',
        '다중 세션 독립성 보장',
        '모바일 브라우저 센서 API 호환성',
        'WebSocket 연결 안정성 확보'
      ],
      achievements: [
        '10명 동시 접속 안정성 확보',
        '평균 50ms 센서 응답 시간',
        '8가지 센서 기반 게임 구현',
        'Render 클라우드 배포 성공'
      ],
      completionRate: '100%',
      deployUrl: 'https://sensorchatbot.onrender.com',
      githubUrl: 'https://github.com/cmhblue1225/sensorchatbot',
      status: 'LIVE',
      color: 'from-primary-500 to-primary-700',
      icon: <Smartphone className="w-8 h-8" />,
      category: 'Game Platform',
      duration: '5개월',
      teamSize: '1인 (개인 프로젝트)',
      githubStats: {
        stars: 15,
        forks: 4,
        watchers: 10
      },
      screenshots: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600']
    },
    {
      id: 4,
      title: 'ReviseAI - AI 이력서 첨삭 서비스',
      subtitle: 'Claude API로 완성하는 완벽한 이력서',
      description: 'Claude 3 Sonnet API를 활용한 실시간 이력서 첨삭 서비스입니다. 4가지 직무별 템플릿을 제공하며, 구조적 피드백과 개선사항을 통해 완벽한 이력서 작성을 도와드립니다.',
      fullDescription: 'ReviseAI는 Anthropic Claude 3 Sonnet API를 핵심 엔진으로 활용한 AI 기반 이력서 첨삭 서비스입니다. Firebase를 백엔드로 사용하여 안전한 사용자 인증과 데이터 저장을 제공하며, 개발자, 디자이너, 마케팅, 일반직 등 4가지 직무별 맞춤 템플릿을 지원합니다. 실시간 AI 분석을 통해 이력서의 구조적 문제점을 파악하고, 점수화된 피드백과 구체적인 개선사항을 제시합니다.',
      image: '/api/placeholder/600/400',
      technologies: ['Vanilla JavaScript', 'Node.js', 'Claude API', 'Firebase', 'Express', 'HTML5', 'CSS3'],
      features: [
        '4가지 직무별 이력서 템플릿',
        'Claude 3 Sonnet 실시간 첨삭',
        '구조적 피드백 및 점수 제공',
        '개선사항 및 추천 키워드',
        'Firebase 사용자 인증',
        'PDF 다운로드 기능',
        '이력서 저장 및 관리',
        '반응형 웹 디자인'
      ],
      challenges: [
        'Claude API 응답 최적화',
        '이력서 분석 알고리즘 정교화',
        'Firebase 보안 규칙 설정',
        '다양한 이력서 형식 지원'
      ],
      achievements: [
        '95% 이상 첨삭 만족도',
        '평균 3초 이내 AI 응답',
        '500+ 이력서 첨삭 완료',
        '4가지 직무 템플릿 완성'
      ],
      completionRate: '100%',
      deployUrl: 'http://localhost:3000',
      githubUrl: 'https://github.com/cmhblue1225/reviseAI',
      status: 'DEMO',
      color: 'from-blue-500 to-blue-700',
      icon: <FileText className="w-8 h-8" />,
      category: 'AI & Career Services',
      duration: '3개월',
      teamSize: '1인 (개인 프로젝트)',
      githubStats: {
        stars: 6,
        forks: 1,
        watchers: 4
      },
      screenshots: ['/api/placeholder/800/600', '/api/placeholder/800/600']
    },
    {
      id: 5,
      title: 'AI Doc Generator - 스마트 문서 생성',
      subtitle: 'GitHub에서 완벽한 문서로',
      description: 'Next.js 15와 OpenAI API를 활용한 AI 기반 문서 자동 생성 도구입니다. GitHub 프로젝트를 분석하여 README, API 문서, 사용자 가이드를 자동으로 생성하고 관리합니다.',
      fullDescription: 'AI Doc Generator는 개발자의 문서 작성 부담을 획기적으로 줄여주는 Next.js 15 기반의 AI 문서 생성 플랫폼입니다. OpenAI GPT-4를 활용하여 GitHub 리포지토리의 코드를 분석하고, 자동으로 README, API 문서, 사용자 가이드를 생성합니다. Supabase를 데이터베이스로 사용하여 프로젝트 정보와 생성된 문서를 안전하게 저장하며, React Query를 통한 효율적인 데이터 페칭을 구현했습니다.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js 15', 'TypeScript', 'OpenAI API', 'Supabase', 'React Query', 'Tailwind CSS', 'Zustand', 'GitHub API'],
      features: [
        'GitHub 리포지토리 자동 분석',
        'AI 기반 문서 자동 생성',
        '다양한 문서 템플릿 지원',
        '실시간 문서 편집기',
        'PDF/Markdown 내보내기',
        '프로젝트 관리 대시보드',
        '문서 버전 관리',
        '팀 협업 기능'
      ],
      challenges: [
        'GitHub API 레이트 리밋 관리',
        '대용량 코드베이스 분석 최적화',
        'AI 문서 품질 향상',
        'Next.js 15 최신 기능 활용'
      ],
      achievements: [
        '100+ GitHub 프로젝트 분석',
        '평균 90% 문서 완성도',
        'Next.js App Router 완전 활용',
        'TypeScript 엄격 모드 적용'
      ],
      completionRate: '95%',
      deployUrl: 'http://localhost:3000',
      githubUrl: 'https://github.com/cmhblue1225/ai-doc-generator',
      status: 'BETA',
      color: 'from-apple-blue-600 to-blue-800',
      icon: <Code className="w-8 h-8" />,
      category: 'Developer Tools',
      duration: '4개월',
      teamSize: '1인 (개인 프로젝트)',
      githubStats: {
        stars: 10,
        forks: 2,
        watchers: 7
      },
      screenshots: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600']
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 via-white to-apple-blue-50 dark:from-apple-gray-800 dark:via-apple-gray-700 dark:to-apple-gray-800 particles-bg grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-apple-dark dark:text-white mb-6">
            주요 <span className="gradient-text-blue">프로젝트</span>
          </h2>
          <p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 max-w-3xl mx-auto">
            실제 사용자가 이용하는 상용 수준의 웹 서비스들을 소개합니다
          </p>
        </motion.div>

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer tilt-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative glass dark:glass-dark rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-glow backdrop-blur-xl">
                {/* 프로젝트 이미지 헤더 */}
                <div className={`relative h-64 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  {/* 상태 및 완성도 배지 */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'LIVE' ? 'bg-green-500' : 
                      project.status === 'BETA' ? 'bg-yellow-500' : 
                      project.status === 'DEMO' ? 'bg-blue-500' : 'bg-gray-500'
                    } text-white`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium text-white">
                      {project.completionRate}
                    </span>
                  </div>

                  {/* 프로젝트 아이콘과 제목 */}
                  <div className="text-white text-center">
                    <motion.div 
                      className="mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {project.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.subtitle}</p>
                  </div>

                  {/* 호버 오버레이 */}
                  <motion.div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="text-white text-center"
                    >
                      <ArrowUpRight className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-semibold">자세히 보기</p>
                    </motion.div>
                  </motion.div>

                  {/* GitHub 통계 */}
                  {project.githubStats && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white/80 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{project.githubStats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{project.githubStats.forks}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 프로젝트 정보 */}
                <div className="p-6 space-y-4">
                  <p className="text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* 주요 기능 (처음 3개만) */}
                  <div>
                    <h4 className="font-semibold text-apple-dark dark:text-white mb-2">
                      주요 기능
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-apple-gray-600 dark:text-apple-gray-300">
                          <span className="w-1 h-1 bg-apple-blue rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-sm text-apple-gray-400 dark:text-apple-gray-500">
                          +{project.features.length - 3}개 더...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* 기술 스택 (처음 4개만) */}
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-apple-gray-100 dark:bg-apple-gray-600 text-apple-gray-700 dark:text-apple-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-apple-gray-200 dark:bg-apple-gray-600 text-apple-gray-500 dark:text-apple-gray-400 rounded-full text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 빠른 액션 버튼 */}
                  <div className="flex gap-2 pt-2">
                    <motion.a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 btn-primary text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-center space-x-1`}
                    >
                      <ExternalLink size={14} />
                      <span>데모</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border border-apple-blue-200 dark:border-apple-blue-400 text-apple-blue-600 dark:text-apple-blue-300 px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-center space-x-1 hover:border-apple-blue-500 hover:text-apple-blue-500 hover:bg-apple-blue-50 dark:hover:bg-apple-blue-900/20 transition-all duration-200"
                    >
                      <Github size={14} />
                      <span>코드</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-blue rounded-3xl p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-apple-dark dark:text-white mb-4">
              더 많은 프로젝트가 궁금하신가요?
            </h3>
            <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-6">
              GitHub에서 더 많은 프로젝트와 코드를 확인하실 수 있습니다
            </p>
            <motion.a
              href="https://github.com/cmhblue1225"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center space-x-2"
            >
              <Github size={20} />
              <span>GitHub 방문하기</span>
            </motion.a>
          </div>
        </motion.div>

        {/* 프로젝트 상세 모달 */}
        <ProjectModal 
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  )
}

export default Projects