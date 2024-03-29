/*computeAverageLengthOfWords2
문제
두 단어를 입력받아 두 단어의 평균 길이를 내림하여 리턴해야 합니다.

입력
인자 1 : word1
string 타입의 알파벳 문자열
word1.length는 10 이하
인자 2 : word2
string 타입의 알파벳 문자열
word2.length는 10 이하
출력
number 타입을 리턴해야 합니다.
주의 사항
평균 길이를 내림하여 리턴해야 합니다.*/

function computeAverageLengthOfWords2(word1, word2) {
  return Math.floor((word1.length + word2.length) / 2);
}
