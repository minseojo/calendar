# calendar
https://minseojo.github.io/calendar/

***
2021-07-03 달력 프레임 완성 (일정 추가 만들 예정)
***
2021-07-27 테이블로 구현된 날짜를 어떻게 바꾸면 효율적일지 생각 함 (일정 추가 만들기 전)
***
Before

![image](https://user-images.githubusercontent.com/64322765/127111947-55f38c0f-44bb-433d-a889-1d0fdb228576.png)
***
After

![image](https://user-images.githubusercontent.com/64322765/127111786-51d35e01-e424-48f9-acf8-1794366e21de.png)

특정 날짜에 마우스홀더 -> 왼쪽 위에 +버튼 -> +버튼 누르면 새로운 페이지가 생성(일정). -> 페이지에 글을 작성 후 버튼 형식으로 페이지의 제목이 나옴.

***
***
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
***
