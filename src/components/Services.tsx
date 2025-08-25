import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Service data
const services = [
  {
    id: 1,
    title: "专业刷机服务",
    description: "提供各品牌手机官方系统、第三方ROM刷机服务，支持主流安卓设备，确保系统稳定流畅。",
    features: [
      "支持三星、小米、华为、OPPO等主流品牌",
      "提供官方系统和第三方ROM选择",
      "保留用户数据刷机选项",
      "刷后系统优化设置"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    )
  },
  {
    id: 2,
    title: "ROOT权限获取",
    description: "安全获取设备ROOT权限，解锁高级功能，让您完全掌控自己的设备，支持最新系统版本。",
    features: [
      "安全ROOT，降低变砖风险",
      "支持Android 10-14系统",
      "提供ROOT管理工具",
      "ROOT后技术支持"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "手机救砖服务",
    description: "针对变砖设备提供专业修复服务，解决开机黑屏、无限重启、卡在LOGO等问题，成功率高达95%。",
    features: [
      "黑屏、无限重启修复",
      "卡在LOGO、Recovery模式",
      "系统崩溃修复",
      "硬件检测服务"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    id: 4,
    title: "增值服务",
    description: "提供系统优化、定制ROM、广告去除等增值服务，提升设备性能和使用体验。",
    features: [
      "系统深度优化",
      "定制ROM开发",
      "系统广告去除",
      "性能提升设置"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-medium">我的服务</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">专业技术服务</h2>
          <p className="text-gray-400">提供全方位的移动设备技术解决方案，解决您遇到的各种系统问题</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5 group"
            >
              <div className="w-16 h-16 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
          >
            需要定制服务？联系我获取解决方案
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}