import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Database, Brain, Smartphone } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Convi - 편의점 종합 솔루션',
      subtitle: '디지털 혁신으로 편의점을 재정의',
      description: '완전한 상용 수준의 편의점 통합 관리 플랫폼입니다. 고객, 점주, 본사가 실시간으로 연결되어 주문부터 재고 관리, 매출 분석까지 모든 비즈니스 프로세스를 자동화합니다.',
      image: '/api/placeholder/600/400',
      technologies: ['React 19', 'TypeScript', 'Supabase', 'Tailwind CSS', '토스페이먼츠', 'PostgreSQL'],
      features: [
        '실시간 주문 및 재고 관리',
        '토스페이먼츠 결제 연동',
        '매출 분석 대시보드',
        '본사-점주-고객 통합 관리',
        '17개 테이블 엔터프라이즈 DB'
      ],
      completionRate: '98%',
      deployUrl: 'https://convi-final.onrender.com',
      githubUrl: 'https://github.com/cmhblue1225/convi',
      status: 'LIVE',
      color: 'from-blue-500 to-purple-600',
      icon: <Database className="w-8 h-8" />
    },
    {
      id: 2,
      title: 'NewMind - 감정 AI 상담 서비스',
      subtitle: '감정을 이해하는 인공지능',
      description: 'OpenAI ChatGPT API를 활용한 감정 분석 및 상담 서비스입니다. 사용자의 일기를 분석하여 감정 상태를 파악하고, 맞춤형 피드백과 Spotify 음악 추천을 제공합니다.',
      image: '/api/placeholder/600/400',
      technologies: ['Vanilla JS', 'Node.js', 'OpenAI API', 'Supabase', 'Spotify API', 'Express'],
      features: [
        'GPT 기반 감정 분석',
        'Spotify 음악 추천 시스템',
        '커뮤니티 일기 공유',
        '실시간 알림 시스템',
        '주간 감정 패턴 분석'
      ],
      completionRate: '100%',
      deployUrl: 'https://beamish-dragon-f15ff7.netlify.app',
      githubUrl: 'https://github.com/cmhblue1225/newmind1',
      status: 'LIVE',
      color: 'from-emerald-500 to-teal-600',
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 3,
      title: 'Sensor Game Hub - 센서 게임 플랫폼',
      subtitle: '새로운 게임 경험의 창조',
      description: '모바일 센서를 활용한 혁신적인 게임 플랫폼입니다. QR 코드로 간편하게 연결하고, 기울이기와 회전으로 다양한 게임을 즐길 수 있는 멀티플레이어 지원 게임 허브입니다.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Socket.IO', 'Canvas API', 'Sensor APIs', 'QR Code', 'WebSocket'],
      features: [
        '실시간 멀티플레이어 (최대 10명)',
        'QR 코드 기반 간편 연결',
        '센서 기반 게임 조작',
        '독립 세션 관리 시스템',
        '다양한 게임 모드 (Solo/Dual/Multi)'
      ],
      completionRate: '100%',
      deployUrl: 'https://sensorchatbot.onrender.com',
      githubUrl: 'https://github.com/cmhblue1225/sensorchatbot',
      status: 'LIVE',
      color: 'from-orange-500 to-red-600',
      icon: <Smartphone className="w-8 h-8" />
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-apple-gray-800">
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
            주요 <span className="text-gradient-apple">프로젝트</span>
          </h2>
          <p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 max-w-3xl mx-auto">
            실제 사용자가 이용하는 상용 수준의 웹 서비스들을 소개합니다
          </p>
        </motion.div>

        {/* 프로젝트 리스트 */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* 프로젝트 이미지 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  {/* 상태 배지 */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* 완성도 배지 */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      완성도 {project.completionRate}
                    </span>
                  </div>

                  {/* 이미지 플레이스홀더 */}
                  <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <div className="mb-4">{project.icon}</div>
                      <div className="text-2xl font-bold">{project.title}</div>
                      <div className="text-lg opacity-80">{project.subtitle}</div>
                    </div>
                  </div>
                  
                  {/* 호버 오버레이 */}
                  <motion.div
                    className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center"
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="text-white text-center"
                    >
                      <Play className="w-16 h-16 mx-auto mb-2" />
                      <p className="font-semibold">프로젝트 보기</p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* 프로젝트 정보 */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-apple-dark dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className={`text-lg font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-4`}>
                    {project.subtitle}
                  </p>
                  <p className="text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* 주요 기능 */}
                <div>
                  <h4 className="text-lg font-semibold text-apple-dark dark:text-white mb-3">
                    🎯 주요 기능
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-apple-gray-600 dark:text-apple-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-apple-blue rounded-full mr-3"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* 기술 스택 */}
                <div>
                  <h4 className="text-lg font-semibold text-apple-dark dark:text-white mb-3">
                    ⚡ 기술 스택
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-700 dark:text-apple-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* 액션 버튼들 */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`apple-button bg-gradient-to-r ${project.color} text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg`}
                  >
                    <ExternalLink size={20} />
                    <span>라이브 데모</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="apple-button border-2 border-apple-gray-300 dark:border-apple-gray-600 text-apple-gray-700 dark:text-apple-gray-300 px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:border-apple-blue hover:text-apple-blue transition-colors duration-200"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </motion.div>
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
          <div className="bg-gradient-to-r from-apple-blue/10 to-purple-500/10 dark:from-apple-blue/20 dark:to-purple-500/20 rounded-3xl p-8">
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
              className="apple-button bg-apple-dark dark:bg-white text-white dark:text-apple-dark px-8 py-4 rounded-xl font-semibold inline-flex items-center space-x-2"
            >
              <Github size={20} />
              <span>GitHub 방문하기</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects