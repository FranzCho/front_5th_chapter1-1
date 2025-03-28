import { Router } from "../router";

export const LoginPage = () => /* html */ `
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" type="text" placeholder="이메일 또는 전화번호" class="w-full p-2 border rounded">
          <p id="username-error" class="text-red-500 text-sm mt-1 hidden">사용자 이름을 입력해주세요.</p>
        </div>
        <div class="mb-6">
          <input id="password" type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`;

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    const userInfo = {
      username,
      password,
    };

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    alert("로그인 성공!");

    // 라우팅 처리
    window.history.pushState({}, "", "/");
    Router.Render(); // MainPage로 이동
  });
});
