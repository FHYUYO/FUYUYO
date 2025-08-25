import { motion } from 'framer-motion';

// Project data
const projects = [
  {
    id: 1,
    title: "三星Galaxy S系列救砖",
    description: "修复三星Galaxy S10/S20/S21系列因错误刷机导致的变砖问题",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Samsung%20Galaxy%20S%20series%20phone%20repair%2Ctechnical%20service%2Cprofessional%20flashing%20tools&sign=643dba4bc51e3e358fe0fbc16e4c1a86",
    category: "救砖服务"
  },
  {
    id: 2,
    title: "小米设备MIUI优化",
    description: "为小米/红米设备提供深度系统优化，提升性能和续航",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Xiaomi%20phone%20system%20optimization%2Cperformance%20improvement%2Ctechnical%20service%20interface&sign=98e301e3d212125c2c97f711bf98f1f0",
    category: "系统优化"
  },
  {
    id: 3,
    title: "华为设备解锁ROOT",
    description: "为华为设备提供Bootloader解锁和ROOT权限获取服务",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Huawei%20device%20ROOT%20unlocking%2Ctechnical%20service%2CAndroid%20system&sign=f768f45abfd9cdcd1e851e9fd560c886",
    category: "ROOT服务"
  },
  {
    id: 4,
    title: "定制ROM开发",
    description: "为热门机型开发定制ROM，去除广告，优化系统",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Custom%20ROM%20development%2CAndroid%20system%20modification%2Ctechnical%20service&sign=cf7b044ccb34d7ec0b65c0f984b5d0f8",
    category: "增值服务"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-medium">成功案例</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">精选服务案例</h2>
          <p className="text-gray-400">展示部分成功服务案例，更多案例可咨询了解</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden"
            >
              <div className="aspect-[4/5] bg-gray-800 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-xs font-medium mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">以上仅为部分案例，更多成功案例可联系咨询</p>
          <a 
            href="#contact" 
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-all inline-flex items-center"
          >
            查看更多案例
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}