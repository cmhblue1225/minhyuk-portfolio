import { motion } from 'framer-motion'
import { Heart, Code, Brain, Users } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI 전문성',
      description: 'OpenAI API를 활용한 감정 분석, 추천 시스템 등 인공지능 기술을 실제 서비스에 적용한 경험'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: '풀스택 개발',
      description: 'React, TypeScript, Node.js를 중심으로 한 현대적인 웹 애플리케이션 풀스택 개발'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '사용자 중심',
      description: '실제 사용자의 니즈를 파악하고 직관적이며 효율적인 사용자 경험을 설계'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: '문제 해결',
      description: '복잡한 비즈니스 요구사항을 분석하고 창의적인 기술 솔루션으로 해결'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-apple-gray-800">
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
            개발자 <span className="text-gradient-apple">조민혁</span>
          </h2>
          <p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 max-w-3xl mx-auto">
            혁신적인 기술로 세상을 더 나은 곳으로 만들고자 하는 개발자입니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 왼쪽: 소개 텍스트 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-apple-dark dark:text-white">
              안녕하세요, 저는 조민혁입니다! 👨‍💻
            </h3>
            
            <div className="space-y-4 text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed">
              <p>
                AI와 웹 풀스택 개발에 열정을 가진 개발자로, 최신 기술을 활용하여 
                사용자에게 의미 있는 가치를 제공하는 서비스를 만드는 것을 목표로 합니다.
              </p>
              
              <p>
                <strong className="text-apple-blue">편의점 종합 솔루션</strong>부터 
                <strong className="text-apple-blue"> AI 감정 상담 서비스</strong>, 
                <strong className="text-apple-blue"> 혁신적인 센서 게임 플랫폼</strong>까지
                다양한 프로젝트를 통해 실제 사용자가 필요로 하는 솔루션을 구현해왔습니다.
              </p>
              
              <p>
                특히 <strong className="text-apple-blue">React 19, TypeScript, Supabase</strong> 등의 
                최신 기술 스택을 활용한 엔터프라이즈급 애플리케이션 개발과 
                <strong className="text-apple-blue"> OpenAI API</strong>를 통한 AI 서비스 개발에 
                전문성을 가지고 있습니다.
              </p>
            </div>

            {/* 연락 정보 */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-apple-blue font-semibold">📧 이메일:</span>
                <a 
                  href="mailto:cmhblue1225@naver.com"
                  className="text-apple-gray-600 dark:text-apple-gray-300 hover:text-apple-blue transition-colors"
                >
                  cmhblue1225@naver.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-apple-blue font-semibold">📱 전화:</span>
                <a 
                  href="tel:010-5116-5305"
                  className="text-apple-gray-600 dark:text-apple-gray-300 hover:text-apple-blue transition-colors"
                >
                  010-5116-5305
                </a>
              </div>
            </div>
          </motion.div>

          {/* 오른쪽: 특징 카드들 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 bg-apple-gray-50 dark:bg-apple-gray-700 rounded-2xl card-hover"
              >
                <div className="text-apple-blue mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-apple-dark dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-apple-gray-600 dark:text-apple-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 하단 통계 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '3+', label: '완료 프로젝트', description: '실제 배포된 웹 서비스' },
            { number: '10+', label: '기술 스택', description: '숙련된 기술들' },
            { number: '100%', label: '완성도', description: '상용 수준의 품질' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-apple mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-apple-dark dark:text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-apple-gray-600 dark:text-apple-gray-300">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About