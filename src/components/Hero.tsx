import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Github, Mail, Phone } from 'lucide-react'

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-apple-blue-50 to-white dark:from-apple-gray-900 dark:via-apple-gray-800 dark:to-apple-gray-700">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-apple-blue-100/30 via-blue-100/20 to-apple-blue-200/30 dark:from-apple-blue-900/30 dark:via-blue-900/20 dark:to-apple-blue-800/30" />
      
      {/* 플로팅 배경 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-apple-blue-400/30 dark:bg-apple-blue-300/40 rounded-full animate-glow"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* 메인 타이틀 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-responsive-lg font-bold text-apple-dark dark:text-white mb-4">
              안녕하세요! 👋
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text-blue">조민혁</span>입니다
            </h2>
          </motion.div>

          {/* 타이핑 애니메이션 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="text-xl md:text-2xl lg:text-3xl text-apple-gray-600 dark:text-apple-gray-300 font-medium h-20 flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  '혁신을 만드는 개발자',
                  2000,
                  'AI와 웹 풀스택 전문가',
                  2000,
                  '창의적 문제 해결사',
                  2000,
                  '사용자 경험을 중시하는 개발자',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text-blue"
              />
            </div>
          </motion.div>

          {/* 설명 텍스트 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg md:text-xl text-apple-gray-600 dark:text-apple-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            AI 기술과 웹 풀스택 개발을 통해 혁신적인 디지털 솔루션을 만드는 개발자입니다. 
            사용자 중심의 경험과 최신 기술을 결합하여 의미 있는 프로젝트를 구현합니다.
          </motion.p>

          {/* 액션 버튼들 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#projects')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="apple-button bg-apple-blue text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg border border-white/20 hover:bg-apple-blue-600 hover:border-white/30 transition-all duration-300"
            >
              프로젝트 보기
            </motion.a>
            
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="apple-button border-2 border-apple-blue text-apple-blue-600 dark:text-apple-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-apple-blue hover:text-white hover:border-apple-blue-600 bg-white/10 dark:bg-black/20 backdrop-blur-sm transition-all duration-300"
            >
              연락하기
            </motion.a>
          </motion.div>

          {/* 소셜 링크들 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <motion.a
              href="mailto:cmhblue1225@naver.com"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-600 dark:text-apple-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-all duration-200"
            >
              <Mail size={24} />
            </motion.a>
            
            <motion.a
              href="tel:010-5116-5305"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-600 dark:text-apple-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-all duration-200"
            >
              <Phone size={24} />
            </motion.a>
            
            <motion.a
              href="https://github.com/cmhblue1225"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-600 dark:text-apple-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-all duration-200"
            >
              <Github size={24} />
            </motion.a>
          </motion.div>

          {/* 스크롤 다운 버튼 */}
          <motion.button
            onClick={scrollToNext}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            whileHover={{ y: -5 }}
            className="animate-bounce text-apple-gray-400 dark:text-apple-gray-500 hover:text-apple-blue dark:hover:text-apple-blue transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Hero