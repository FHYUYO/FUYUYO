import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-medium">联系我</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">获取专业技术支持</h2>
          <p className="text-gray-400">无论您遇到什么设备问题，都可以随时联系我，我将为您提供专业的技术支持</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-6">联系方式</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">QQ咨询</h4>
                  <p className="text-gray-400">3059516331</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h4 className="text-lg font-medium mb-4">服务流程</h4>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm mr-4 flex-shrink-0">1</span>
                  <div>
                    <h5 className="font-medium">咨询</h5>
                    <p className="text-gray-400 text-sm">联系我描述您的设备问题和需求</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm mr-4 flex-shrink-0">2</span>
                  <div>
                    <h5 className="font-medium">评估</h5>
                    <p className="text-gray-400 text-sm">我会评估问题难度和所需时间</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm mr-4 flex-shrink-0">3</span>
                  <div>
                    <h5 className="font-medium">报价</h5>
                    <p className="text-gray-400 text-sm">提供详细报价和服务内容</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm mr-4 flex-shrink-0">4</span>
                  <div>
                    <h5 className="font-medium">服务</h5>
                    <p className="text-gray-400 text-sm">通过远程或线下方式提供服务</p>
                  </div>
                </li>
                
              </ol>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity:0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-6">发送咨询</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">姓名</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="请输入您的姓名"
                  />
                </div>
                
                <div>
                  <label htmlFor="device" className="block text-sm font-medium text-gray-400 mb-2">设备信息</label>
                  <input
                    type="text"
                    id="device"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="例如：小米11，三星S20等"
                  />
                </div>
                
                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-gray-400 mb-2">问题描述</label>
                  <textarea
                    id="problem"
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="请详细描述您遇到的问题..."
                  ></textarea>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-600/20"
              >
                提交咨询
              </button>
              
              <p className="text-gray-500 text-sm text-center">
                提交后我会尽快与您联系，请保持通讯畅通
              </p>
            </form>
          </motion.div>
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-gray-500 text-sm">
            专业技术服务，值得您的信赖
          </p>
        </div>
      </div>
    </section>
  );
}