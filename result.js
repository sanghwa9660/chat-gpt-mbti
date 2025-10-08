// DOM이 완전히 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {
  const resultElement = document.getElementById("result");
  const restartButton = document.getElementById("restart-button");

  // 로컬스토리지에서 MBTI 결과 가져오기
  const mbtiResult = localStorage.getItem("mbti_result");

  if (mbtiResult) {
    // 결과가 존재하면 표시
    resultElement.textContent = `${mbtiResult}입니다!`;
  } else {
    // 결과가 없으면 안내 메시지 표시
    resultElement.textContent = "아직 테스트를 진행하지 않았습니다!";
    restartButton.textContent = "테스트 하러 가기";
  }
});
