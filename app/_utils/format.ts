export function formatDateToKorean(date: Date): string {
  // const year = date.getFullYear();
  // const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
  // const day = date.getDate();

  // return `${year}년 ${month}월 ${day}일`;

  // toLocaleString의 옵션으로도 가능하다!
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateToKoreanWithTime(date: Date): string {
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}
