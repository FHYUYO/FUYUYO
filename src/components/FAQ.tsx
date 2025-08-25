import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// FAQ data
const faqs = [
  {
    question: "刷机、ROOT会影响手机保修吗？",
    answer: "是的，大多数手机厂商会将刷机和ROOT操作视为保修失效的原因。建议在保修期内谨慎进行此类操作，或选择官方保修范围内的服务。如果您的设备已过保修期，则无需担心此问题。"
  },
  {
    question: "远程服务如何进行？安全吗？",
    answer: "远程服务通过专业远程控制软件进行，我会提供安全的连接方式。在服务过程中，我只会进行与服务相关的操作，不会查看或获取您的个人数据。所有操作都会在您的监督下进行，确保安全可靠。"
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-medium">常见问题</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">你可能想知道</h2>
          <p className="text-gray-400">解答客户最常咨询的问题，帮助您更好地了解我们的服务</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className={cn(
                  "w-full flex justify-between items-center p-6 bg-gray-800 rounded-xl text-left focus:outline-none transition-all",
                  openIndex === index ? "border-blue-600/50" : "border-gray-800 hover:border-gray-700"
                )}
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn("h-6 w-6 text-gray-400 transition-transform", openIndex === index ? "transform rotate-180 text-blue-400" : "")}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <motion.div
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{ 
                  maxHeight: openIndex === index ? "500px" : 0,
                  opacity: openIndex === index ? 1 : 0 
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-400 bg-gray-800/50 rounded-b-xl">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
          
          <div className="mt-12 text-center p-8 bg-gray-800 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4">还有其他问题？</h3>
            <p className="text-gray-400 mb-6">如果您有其他疑问，欢迎随时联系我咨询</p>
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all inline-flex items-center"
            >
              立即咨询
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}