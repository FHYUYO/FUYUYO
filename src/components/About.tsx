import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-gray-800">
             <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://lf-code-agent.coze.cn/obj/x-ai-cn/132958913794/attachment/D4F71B1DB819293F9A4BB2703F28DD6F_20250825173938.jpg" 
                  alt="专业技术人员"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-2xl z-0"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-blue-400 font-medium">关于我</span>
            <h2 className="text-3xl md:text-4xl font-bold">8年专业移动设备<br />技术服务经验</h2>
            
            <p className="text-gray-400">
              我是一名资深移动设备技术工程师，拥有8年专业刷机、ROOT和救砖经验。曾任职于多家知名手机品牌售后服务部门，精通各品牌设备的系统结构和修复技术。
            </p>
            
            <p className="text-gray-400">
              已成功为超过3000+客户解决各类设备难题，包括刷机、ROOT、救砖、系统优化等服务。始终坚持"安全第一、客户至上"的服务理念，确保每一次服务都让客户满意。
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-blue-400 mb-1">8+</div>
                <div className="text-gray-400">技术经验(年)</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-blue-400 mb-1">3000+</div>
                <div className="text-gray-400">成功案例</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-blue-400 mb-1">98%</div>
                <div className="text-gray-400">客户满意度</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-blue-400 mb-1">100+</div>
                <div className="text-gray-400">支持机型</div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20 mt-4"
            >
              联系我获取服务
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}