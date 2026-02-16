"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface User {
  email: string;
  name: string;
  loginTime: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const userData = localStorage.getItem("user");

    if (!isAuthenticated || !userData) {
      router.push("/auth");
      return;
    }

    setUser(JSON.parse(userData));
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-300">載入中...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
            LifeGuide
          </h1>
          <p className="text-gray-600 dark:text-gray-300">控制台</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            歡迎回來，{user.name}！
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">電子郵件</p>
              <p className="text-gray-800 dark:text-white">{user.email}</p>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">姓名</p>
              <p className="text-gray-800 dark:text-white">{user.name}</p>
            </div>

            <div className="pb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">登入時間</p>
              <p className="text-gray-800 dark:text-white">
                {new Date(user.loginTime).toLocaleString("zh-TW")}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              href="/guide"
              className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 text-center shadow-md hover:shadow-lg"
            >
              開始諮詢
            </Link>

            <button
              onClick={handleLogout}
              className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              登出
            </button>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
            返回首頁
          </Link>
        </div>
      </div>
    </main>
  );
}
