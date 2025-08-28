import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Star, GitFork, Eye, ChevronRight, Calendar, Users, Tag, Award } from 'lucide-react'

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

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 100
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.6
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.3
      }
    }
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-apple-gray-800 rounded-3xl shadow-2xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 헤더 */}
            <div className={`relative bg-gradient-to-r ${project.color} p-8 text-white`}>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/20 rounded-2xl">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'LIVE' ? 'bg-green-500' : 
                      project.status === 'BETA' ? 'bg-yellow-500' : 'bg-blue-500'
                    } text-white`}>
                      {project.status}
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      완성도 {project.completionRate}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
                  <p className="text-xl opacity-90 mb-4">{project.subtitle}</p>
                  <div className="flex items-center gap-6 text-sm opacity-80">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      <span>{project.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* GitHub 통계 */}
              {project.githubStats && (
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    <span>{project.githubStats.stars}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitFork className="w-4 h-4" />
                    <span>{project.githubStats.forks}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{project.githubStats.watchers}</span>
                  </div>
                </div>
              )}
            </div>

            {/* 콘텐츠 */}
            <div className="overflow-y-auto max-h-[60vh]">
              <div className="p-8 space-y-8">
                {/* 프로젝트 설명 */}
                <section>
                  <h3 className="text-2xl font-bold text-apple-dark dark:text-white mb-4">
                    프로젝트 소개
                  </h3>
                  <p className="text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed text-lg">
                    {project.fullDescription}
                  </p>
                </section>

                {/* 스크린샷 갤러리 */}
                <section>
                  <h3 className="text-2xl font-bold text-apple-dark dark:text-white mb-4">
                    스크린샷
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="aspect-video bg-apple-gray-100 dark:bg-apple-gray-700 rounded-xl overflow-hidden"
                      >
                        <div className="w-full h-full flex items-center justify-center text-apple-gray-400">
                          스크린샷 {index + 1}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* 기술 스택 */}
                <section>
                  <h3 className="text-2xl font-bold text-apple-dark dark:text-white mb-4">
                    기술 스택
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-700 dark:text-apple-gray-300 rounded-full font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </section>

                {/* 주요 기능 */}
                <section>
                  <h3 className="text-2xl font-bold text-apple-dark dark:text-white mb-4">
                    주요 기능
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-apple-gray-50 dark:bg-apple-gray-700 rounded-xl"
                      >
                        <ChevronRight className="w-4 h-4 text-apple-blue" />
                        <span className="text-apple-gray-700 dark:text-apple-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* 도전 과제 */}
                <section>
                  <h3 className="text-2xl font-bold text-apple-dark dark:text-white mb-4">
                    기술적 도전
                  </h3>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-xl"
                      >
                        <p className="text-apple-gray-700 dark:text-apple-gray-300">{challenge}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* 성취 */}
                <section>
                  <h3 className="text-2xl font-bold text-apple-dark dark:text-white mb-4">
                    주요 성과
                  </h3>
                  <div className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-xl"
                      >
                        <Award className="w-5 h-5 text-green-600" />
                        <p className="text-apple-gray-700 dark:text-apple-gray-300">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* 하단 액션 버튼 */}
            <div className="p-8 bg-apple-gray-50 dark:bg-apple-gray-900 border-t border-apple-gray-200 dark:border-apple-gray-700">
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 bg-gradient-to-r ${project.color} text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg`}
                >
                  <ExternalLink size={20} />
                  <span>라이브 데모 보기</span>
                </motion.a>
                
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 border-2 border-apple-gray-300 dark:border-apple-gray-600 text-apple-gray-700 dark:text-apple-gray-300 px-6 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:border-apple-blue hover:text-apple-blue transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>GitHub 보기</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal