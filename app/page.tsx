import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="text-center max-w-md w-full">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
            LifeGuide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            你的生活導師
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            歡迎來到 LifeGuide！我們提供專業的生活諮詢服務，幫助您解決生活中的各種問題。
          </p>
          
          <Link
            href="/auth"
            className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            開始使用
          </Link>
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>© 2024 LifeGuide. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
