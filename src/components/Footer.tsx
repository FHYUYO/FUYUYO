export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">TechMaster</span>
            </div>
            <p className="text-gray-400 max-w-md">
              专业移动设备技术服务，提供刷机、ROOT、救砖和系统优化等服务。8年经验，3000+成功案例，安全可靠。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">快速链接</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">首页</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">服务</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">案例</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">关于我</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-blue-400 transition-colors">常见问题</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">联系我</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">3059516331</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} TechMaster. 保留所有权利。</p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">专业移动设备技术服务</p>
          </div>
        </div>
      </div>
    </footer>
  );
}