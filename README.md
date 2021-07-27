# calendar
https://minseojo.github.io/calendar/
***
2021-07-03 달력 프레임 완성 (일정 추가 만들 예쩡)

2021-07-27 테이블로 구현된 날짜를 어떻게 바꾸면 효율적일지 생각 함 (일정 추가 만들기 전)

***


getYear():	연도를 리턴

getMonth():	0에서 11사이의 정수 달을 리턴, 1월=0

getDate():	날짜를 리턴

getDay(): 한 주 내의 요일의 수를 리턴, 일요일=0

getHours():	0에서 23사이의 정수 시간을 리턴

getMinutes():	0에서 59까지의 정수 분을 리턴

getSeconds():	0에서 59까지의 정수 초를 리턴

***
innerHTML 함정: https://oniondev.tistory.com/17 

=> innerHTML은 처음에 가지고 있던 HTML내용을 전부 없애고 재설정 함. -> 요소(element)의 내용을 변경하는 대신 HTML을 문서(document)에 삽입하려면, insertAdjacentHTML() 메서드를 사용하십시오.

