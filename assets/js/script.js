let globalQuestion // 문제 객체가 저장될 전역변수
let Number = 0
let iKnow = 0 // 알고 있는 갯수
let iDKnow = 0 // 모르는 갯수
let value = 0 // 진행률

const data = [
  {
    id: 'Quiz 1',
    question: '"테이크 아웃"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '테이크 아웃',
    description:
      '포장의 영어표현을 말해요! <br> 예를들어 커피 테이크 아웃은<br>커피를 포장한다는 뜻이에요.',
  },
  {
    id: 'Quiz 2',
    question: '"사이렌 오더"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '사이렌 오더',
    description:
      '스타벅스에서 제공하는 서비스의 이름으로, 휴대전화를 통해 미리 커피를 주문하고 결재하는 서비스입니다!',
  },
  {
    id: 'Quiz 3',
    question: '"클릭"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '클릭',
    description:
      "마우스의 버튼을 '딸깍!' <br>눌렀다 떼는 것을 말해요! <br><br> 꼭 마우스가 아니더라도 무언가를 누른다는 의미로도 쓰인답니다! ",
  },
  {
    id: 'Quiz 4',
    question: '"MBTI"<br>의 뜻을 아시나요??',
    yes: '<br>좋아요!<br>다음 문제로 넘어가세요!',
    no: 'MBTI',
    description:
      '자기보고식 성격 유형 검사 도구로, 사람의 성격유형을 16가지로 분류해서 나타내요! 흥미롭지않나요?!',
  },
  {
    id: 'Quiz 5',
    question: '"드론"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '드론',
    description:
      '파일럿이 탑승하지 않은 채<br> 무선으로 조종하는 ‘무인 항공기’를 말해요! 최근 차세대 전쟁 무기로 각광받고 있어요',
  },
  {
    id: 'Quiz 6',
    question: '"인스타그램(인스타)"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '인스타그램(인스타)',
    description:
      '사진과 동영상을 공유할 수 있는 소셜 네트워크 서비스를 말해요! 월간 이용자 수가 20억 명이 넘는 거대한 서비스랍니다.',
  },
  {
    id: 'Quiz 7',
    question: '"릴스"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '릴스',
    description:
      "'인스타그램'이라는 SNS에서<br> 제공하는 기능으로, 15~30초<br> 사이의 짧은 동영상을 올리고 공유하는 것을 말해요",
  },
  {
    id: 'Quiz 8',
    question: '"QnA"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: 'QnA',
    description:
      "'Question and Answer'의<br> 약자로, 질문을 하고 답을 한다는 뜻이에요",
  },
  {
    id: 'Quiz 9',
    question: '"와츠인마이백"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '와츠인마이백',
    description:
      "'내 가방 안에 뭐가 있을까?'를 의미해요. 이 의미 그대로, 본인의 가방 속 물건을 소개하는 영상들이 유행하고 있답니다.",
  },
  {
    id: 'Quiz 10',
    question: '"언박싱"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '언박싱',
    description:
      '상품의 상자를 열어서 안에 구성품을 살펴보고, 소개하는 것을 말해요! ‘언박싱’ 영상을 보면 물건을 구매하기 전 참고해 볼 수 있겠죠?',
  },
  {
    id: 'Quiz 11',
    question: '"VR"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: 'VR',
    description:
      '가상의 공간에서 사람이 실제와 같은 체험을 할 수 있도록 제공하는 컴퓨터 관련 기술을 말해요!',
  },
  {
    id: 'Quiz 12',
    question: '"리셀"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '리셀',
    description:
      '한정판 상품이나 빈티지 상품 등 구하기 어려운 상품을 되파는 행위를 말해요!',
  },
  {
    id: 'Quiz 13',
    question: '"브랜드 앰버서더"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '브랜드 앰버서더',
    description:
      '브랜드 제품을 홍보하고, 행사에 참여하며 브랜드의 소비자들과 소통하는 사람을 말해요!',
  },
  {
    id: 'Quiz 14',
    question: '"아이스 버킷 챌린지"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '아이스 버킷 챌린지',
    description:
      '루게릭병 환자를 돕기 위한 릴레이 기부 캠페인을 말해요. 얼음물을 뒤집어쓰는 동영상을 SNS에 올리고, 다음 도전자 3명을 지목해 릴레이로 기부를 이어가는 방식으로 진행됩니다!',
  },
  {
    id: 'Quiz 15',
    question: '"넷플릭스"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '넷플릭스',
    description:
      '드라마나 다큐, 영화등 동영상들을 볼 수 있는 구독제 서비스를 <br> 제공하는 회사입니다!',
  },
  {
    id: 'Quiz 16',
    question: '"OTT"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: 'OTT',
    description:
      '인터넷을 통해 방송 프로그램, 영화, 교육 등의 각종 미디어 콘텐츠를 사용자가 원할 때 제공하는<br> 서비스를 말해요! <br><br> OTT 서비스를 제공하는 대표적인 회사로 ‘넷플릭스’가 있어요!',
  },
  {
    id: 'Quiz 17',
    question: '"와이파이"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '와이파이',
    description:
      "무선(Wireless) 방식으로 유선랜과 같은 뛰어난 품질(Fidelity)을 제공한다는 뜻의 Wireless Fidelity를 줄여서 부르는 말로, <br><br> 한마디로 '무선 인터넷'입니다!",
  },
  {
    id: 'Quiz 18',
    question: '"블루투스"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '블루투스',
    description:
      '휴대폰, 노트북, 이어폰·헤드폰 등의 휴대기기를 서로 연결해 정보를 교환하는 근거리 무선 기술 표준을 뜻해요!',
  },
  {
    id: 'Quiz 19',
    question: '"카카오톡"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>다음 문제로 넘어가세요!',
    no: '카카오톡',
    description:
      '문자 과금 없이 사람들과 메시지를 주고받을 수 있는 모바일 메신저 앱을 말해요!<br><br> 카카오톡이 마비되면 대한민국이 마비될 정도로 없어서는 안 될<br> 서비스가 되었답니다.',
  },
  {
    id: 'Quiz 20',
    question: '"카카오페이"<br>의 뜻을 아시나요?',
    yes: '좋아요!<br>결과를 확인해보세요!',
    no: '카카오페이',
    description:
      '카카오에서 제공하는 결제서비스로 모임의 결제 금액 정산이나, 송금 등을 편하게 진행 할 수 있는<br> 기능입니다!',
  },
]

function make_question() {
  globalQuestion = data[Number]
  Number += 1
  if (Number === 1) {
    document.querySelector('#progress_bar').style.display = 'block' // 일회용 진행바 띄우기
  }
  value += 5 // 진행률 5 추가
  document.querySelector('#progress_bar').setAttribute('value', value)
  document.querySelector('.main-page').style.display = 'none' // 메인페이지 지우기
  document.querySelector('.main-flower').style.display = 'none' // 꽃 사진 지우기
  document.querySelector('#question-page-quiz').style.display = 'block'
  document.querySelector('#question-page-qustion').innerHTML =
    globalQuestion.question // 문제페이지 문제 생성
  document.querySelector('#question-page-quiz').innerHTML = globalQuestion.id // 몇 번째 문제인지
  document.querySelector('#question-page-description').innerHTML = '' // no_bad 에서 생성된 해설 초기화

  document.querySelector('#question-page-nextBtn').style.display = 'none' // 다음 문제 버튼 숨기기
  document.querySelector('#question-page-Btn').style.display = 'block' // 예, 아니요 버튼 띄우기
}

function yes_good() {
  // yes를 눌렀다는 기준
  iKnow += 1 // 알고 있어요 1 추가
  document.querySelector('#question-page-qustion').innerHTML =
    globalQuestion.yes // 알고 있다는 멘트
  if (Number < 20) {
    document.querySelector('#question-page-nextBtn').style.display = 'block' // 다음 문제 버튼 띄우기
    document.querySelector('#question-page-Btn').style.display = 'none' // 예, 아니요 버튼 숨기기
  } else {
    document.querySelector('#question-page-lastBtn').style.display = 'block' // 결과확인 버튼 띄우기
    document.querySelector('#question-page-Btn').style.display = 'none' // 예, 아니요 버튼 숨기기
  }
}

function no_bad() {
  // no를 눌렀다는 기준
  iDKnow += 1 // 몰라요 1 추가
  document.querySelector('#question-page-qustion').innerHTML = globalQuestion.no // 문제가 뭐였는지
  document.querySelector('#question-page-description').innerHTML =
    globalQuestion.description //문제에 대한 해설
  if (Number < 20) {
    document.querySelector('#question-page-nextBtn').style.display = 'block' // 다음 문제 버튼 띄우기
    document.querySelector('#question-page-Btn').style.display = 'none' // 예, 아니요 버튼 숨기기
  } else {
    document.querySelector('#question-page-lastBtn').style.display = 'block' // 결과확인 버튼 띄우기
    document.querySelector('#question-page-Btn').style.display = 'none' // 예, 아니요 버튼 숨기기
  }
}

function end_game() {
  // 몇 개 맞추고, 몇 개 틀렸는지!
  document.querySelector('.question-page').style.display = 'none' // 문제 페이지 삭제
  document.querySelector('.last-page').style.display = 'block' // 마지막 페이지 보이기

  document.querySelector(
    '#last-page-ment-p1'
  ).innerHTML = `아는 단어 ${iKnow}개`
  document.querySelector(
    '#last-page-ment-p2'
  ).innerHTML = `모르는 단어 ${iDKnow}개`
}

function new_start() {
  // 초기 설정 그대로 맞추기
  iKnow = 0
  iDKnow = 0 // 갯수 초기화
  Number = 0 // 숫자 초기화
  value = 0 // 진행률 초기화
  document.querySelector('#question-page-qustion').innerHTML = '' //문제 초기화
  document.querySelector('#question-page-description').innerHTML = '' //해설 초기화
  document.querySelector('.main-flower').style.display = 'block' // 꽃 사진 보이기
  document.querySelector('.main-page').style.display = 'block' // 메인 페이지 보이기
  document.querySelector('.question-page').style.display = 'block' // 문제 페이지 살리기
  document.querySelector('#progress_bar').style.display = 'none' // 진행률 숨기기
  document.querySelector('#question-page-quiz').style.display = 'none' // 퀴즈 로고 숨기기
  document.querySelector('#question-page-Btn').style.display = 'none' // 예 아니오 숨기기
  document.querySelector('#question-page-nextBtn').style.display = 'none' //다음문제 버튼 숨기기
  document.querySelector('#question-page-lastBtn').style.display = 'none' // 결과 확인 숨기기

  document.querySelector('.last-page').style.display = 'none' // 마지막 페이지 삭제
}
