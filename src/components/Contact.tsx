import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 실제 이메일 전송 로직은 여기에 구현
    setTimeout(() => {
      setIsSubmitting(false)
      alert('메시지가 성공적으로 전송되었습니다!')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: '이메일',
      value: 'cmhblue1225@naver.com',
      href: 'mailto:cmhblue1225@naver.com',
      description: '언제든지 연락주세요'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: '전화번호',
      value: '010-5116-5305',
      href: 'tel:010-5116-5305',
      description: '평일 9시-18시 통화 가능'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '위치',
      value: '대한민국 서울',
      href: '#',
      description: '원격 근무 가능'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/cmhblue1225',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:cmhblue1225@naver.com',
      color: 'hover:text-red-500'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-apple-gray-50 dark:bg-apple-gray-900">
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
            함께 <span className="text-gradient-apple">일해요</span>
          </h2>
          <p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 max-w-3xl mx-auto">
            새로운 프로젝트나 협업 기회가 있으시면 언제든지 연락주세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* 왼쪽: 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-apple-dark dark:text-white mb-6">
                연락처 정보
              </h3>
              <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-8">
                프로젝트 문의, 협업 제안, 또는 단순한 인사말까지 모든 연락을 환영합니다.
                빠른 시일 내에 답변드리겠습니다.
              </p>
            </div>

            {/* 연락처 카드들 */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center p-6 bg-white dark:bg-apple-gray-800 rounded-2xl shadow-lg card-hover block"
                >
                  <div className="text-apple-blue mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-apple-dark dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-apple-blue font-medium">
                      {info.value}
                    </p>
                    <p className="text-sm text-apple-gray-600 dark:text-apple-gray-300">
                      {info.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* 소셜 링크들 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <h4 className="text-lg font-semibold text-apple-dark dark:text-white mb-4">
                소셜 미디어
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-600 dark:text-apple-gray-300 ${social.color} transition-all duration-200`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 오른쪽: 연락 폼 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-apple-gray-800 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-apple-dark dark:text-white mb-6">
              메시지 보내기
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-apple-gray-700 dark:text-apple-gray-300 mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-apple-gray-300 dark:border-apple-gray-600 bg-apple-gray-50 dark:bg-apple-gray-700 text-apple-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all duration-200"
                    placeholder="성함을 입력해주세요"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-apple-gray-700 dark:text-apple-gray-300 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-apple-gray-300 dark:border-apple-gray-600 bg-apple-gray-50 dark:bg-apple-gray-700 text-apple-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all duration-200"
                    placeholder="이메일 주소를 입력해주세요"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-apple-gray-700 dark:text-apple-gray-300 mb-2">
                  제목
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-apple-gray-300 dark:border-apple-gray-600 bg-apple-gray-50 dark:bg-apple-gray-700 text-apple-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all duration-200"
                  placeholder="메시지 제목을 입력해주세요"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-apple-gray-700 dark:text-apple-gray-300 mb-2">
                  메시지
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-apple-gray-300 dark:border-apple-gray-600 bg-apple-gray-50 dark:bg-apple-gray-700 text-apple-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="메시지를 입력해주세요..."
                />
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full apple-button bg-apple-blue text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>전송 중...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>메시지 보내기</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* 하단 추가 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-apple-blue/10 to-purple-500/10 dark:from-apple-blue/20 dark:to-purple-500/20 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-apple-dark dark:text-white mb-4">
              💼 현재 구직 중입니다
            </h3>
            <p className="text-apple-gray-600 dark:text-apple-gray-300">
              AI 및 웹 풀스택 개발 포지션에 관심이 있습니다. 
              새로운 도전과 성장 기회를 찾고 있으니 언제든지 연락주세요!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact