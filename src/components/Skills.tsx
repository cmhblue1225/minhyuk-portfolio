import { motion } from 'framer-motion'
import { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95, color: 'from-apple-blue-400 to-apple-blue-600' },
        { name: 'TypeScript', level: 90, color: 'from-apple-blue-500 to-apple-blue-700' },
        { name: 'JavaScript', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'HTML/CSS', level: 88, color: 'from-primary-400 to-primary-600' },
        { name: 'Tailwind CSS', level: 92, color: 'from-apple-blue-300 to-apple-blue-500' },
        { name: 'Framer Motion', level: 80, color: 'from-blue-500 to-blue-700' }
      ]
    },
    backend: {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-apple-blue-600 to-blue-700' },
        { name: 'Express.js', level: 80, color: 'from-primary-500 to-primary-700' },
        { name: 'Supabase', level: 90, color: 'from-apple-blue-500 to-apple-blue-700' },
        { name: 'PostgreSQL', level: 75, color: 'from-blue-600 to-blue-800' },
        { name: 'Socket.IO', level: 78, color: 'from-apple-blue-400 to-apple-blue-600' },
        { name: 'RESTful API', level: 85, color: 'from-primary-400 to-primary-600' }
      ]
    },
    ai: {
      title: 'AI & Tools',
      icon: '🤖',
      skills: [
        { name: 'OpenAI API', level: 88, color: 'from-apple-blue-300 to-apple-blue-500' },
        { name: 'ChatGPT Integration', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'Git/GitHub', level: 90, color: 'from-primary-600 to-primary-800' },
        { name: 'Vite', level: 85, color: 'from-apple-blue-400 to-apple-blue-600' },
        { name: 'Spotify API', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'Sensor APIs', level: 80, color: 'from-apple-blue-500 to-blue-700' }
      ]
    }
  }

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>
  
  type SkillCategory = keyof typeof skillCategories
  type Skill = typeof skillCategories[SkillCategory]['skills'][0]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-apple-blue-50 via-blue-50 to-white dark:from-apple-gray-900 dark:via-apple-gray-800 dark:to-apple-gray-700 particles-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-apple-dark dark:text-white mb-6">
            기술 <span className="gradient-text-blue">스택</span>
          </h2>
          <p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 max-w-3xl mx-auto">
            현대적인 웹 기술과 AI를 활용하여 혁신적인 솔루션을 구현합니다
          </p>
        </motion.div>

        {/* 슬라이딩 토글 카테고리 탭 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative glass-blue dark:glass-dark rounded-2xl p-1.5 shadow-xl backdrop-blur-xl border border-apple-blue-200/40 dark:border-apple-blue-700/40">
            {/* 슬라이딩 배경 */}
            <motion.div
              className="absolute top-1.5 bottom-1.5 bg-gradient-to-r from-apple-blue-500 to-apple-blue-600 rounded-xl shadow-lg"
              animate={{
                x: categories.findIndex(cat => cat === activeCategory) * 140, // 버튼 간격 조정
                width: 136 // 버튼 너비 조정
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 35
              }}
            />
            
            <div className="flex relative z-10 gap-1">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-5 py-3 rounded-xl font-semibold transition-all duration-200 relative z-20 w-[136px] text-sm ${
                    activeCategory === category
                      ? 'text-white shadow-lg'
                      : 'text-apple-blue-700 dark:text-apple-blue-300 hover:text-apple-blue-800 dark:hover:text-apple-blue-200'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <span className="mr-1.5 text-base">{skillCategories[category].icon}</span>
                    <span className="font-medium">{skillCategories[category].title}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 스킬 리스트 */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as SkillCategory].skills.map((skill: Skill, index: number) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass dark:glass-dark rounded-xl p-6 shadow-lg card-hover backdrop-blur-xl border border-apple-blue-200/20 dark:border-apple-blue-700/20"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-apple-dark dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-apple-gray-600 dark:text-apple-gray-300">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-apple-gray-200 dark:bg-apple-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                  >
                    {/* 진행바 애니메이션 효과 */}
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{
                        x: [-100, 300],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear',
                      }}
                      style={{
                        width: '100px',
                        height: '100%',
                        transform: 'skewX(-20deg)',
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 하단 특화 기술 소개 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-apple-blue/10 to-purple-500/10 dark:from-apple-blue/20 dark:to-purple-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-apple-dark dark:text-white mb-4">
              🌟 특화 분야
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-2">🔥</div>
                <h4 className="font-semibold text-apple-dark dark:text-white mb-1">
                  최신 기술 스택
                </h4>
                <p className="text-sm text-apple-gray-600 dark:text-apple-gray-300">
                  React 19, TypeScript 5.x 등 최신 기술 활용
                </p>
              </div>
              <div>
                <div className="text-4xl mb-2">🤖</div>
                <h4 className="font-semibold text-apple-dark dark:text-white mb-1">
                  AI 통합 개발
                </h4>
                <p className="text-sm text-apple-gray-600 dark:text-apple-gray-300">
                  OpenAI API를 활용한 실용적 AI 서비스 구현
                </p>
              </div>
              <div>
                <div className="text-4xl mb-2">🚀</div>
                <h4 className="font-semibold text-apple-dark dark:text-white mb-1">
                  상용 서비스 배포
                </h4>
                <p className="text-sm text-apple-gray-600 dark:text-apple-gray-300">
                  실제 사용자가 이용하는 서비스 개발 및 운영
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills