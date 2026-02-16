"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormData {
  name: string;
  birthday: string;
  problem: string;
}

export default function GuidePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    birthday: "",
    problem: "",
  });
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      router.push("/auth");
      return;
    }

    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setFormData((prev) => ({ ...prev, name: user.name }));
    }

    setLoading(false);
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateAdvice = (data: FormData): string => {
    const age = data.birthday
      ? new Date().getFullYear() - new Date(data.birthday).getFullYear()
      : 0;

    const adviceTemplates = [
      `親愛的 ${data.name}，感謝您的信任。關於「${data.problem}」的問題，我們建議您：\n\n1. 保持積極樂觀的心態，這是解決問題的第一步。\n2. 尋求專業人士的協助，他們能提供更具體的建議。\n3. 與親朋好友分享您的感受，不要獨自承擔壓力。\n4. 給自己一些時間，慢慢地找到最適合您的解決方案。\n\n記住，每個人都會遇到困難，重要的是如何面對它。您已經邁出了尋求幫助的第一步，這是非常勇敢的！`,
      
      `${data.name}，您好！針對您提到的「${data.problem}」，以下是一些建議：\n\n• 首先，請給自己一些時間思考這個問題的根源。\n• 嘗試將問題分解成更小的部分，逐一解決。\n• 保持規律的作息和健康的生活方式。\n• 不要害怕尋求專業協助。\n\n${age > 0 ? `以您 ${age} 歲的年紀，` : ""}您擁有解決這個問題的能力。相信自己，一步一步來！`,
    ];

    return adviceTemplates[Math.floor(Math.random() * adviceTemplates.length)];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.birthday || !formData.problem) {
      alert("請填寫所有欄位");
      return;
    }

    const advice = generateAdvice(formData);
    setResult(advice);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      ...formData,
      birthday: "",
      problem: "",
    });
    setResult("");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-300">載入中...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/dashboard">
            <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 cursor-pointer hover:text-indigo-700">
              LifeGuide
            </h1>
          </Link>
          <p className="text-gray-600 dark:text-gray-300">生活諮詢</p>
        </div>

        {!submitted ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              告訴我們您的問題
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  姓名 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="請輸入您的姓名"
                  required
                />
              </div>

              <div>
                <label htmlFor="birthday" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  生日 *
                </label>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  您的問題 *
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                  placeholder="請詳細描述您遇到的問題..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
              >
                送出諮詢
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/dashboard" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                返回控制台
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              諮詢結果
            </h2>

            <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6 mb-6">
              <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line leading-relaxed">
                {result}
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleReset}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
              >
                進行新的諮詢
              </button>

              <Link
                href="/dashboard"
                className="block w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg transition duration-200 text-center"
              >
                返回控制台
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
